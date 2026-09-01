type Lead = Record<string, unknown>;

const required = ["name", "residence", "destination", "project", "situation", "timeline", "consent"];
const contactLabels: Record<string, string> = { whatsapp: "WhatsApp", phone: "Appel téléphonique", email: "E-mail" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json() as Lead;
    if (body.website) return Response.json({ message: "Merci. Votre demande a bien été reçue." });
    if (required.some((field) => !body[field] || String(body[field]).trim().length === 0)) return Response.json({ message: "Merci de compléter tous les champs obligatoires." }, { status: 400 });
    const name = String(body.name).trim();
    const residence = String(body.residence).trim();
    const details = String(body.details || "").trim();
    const project = String(body.project).trim();
    const currentWork = String(body.currentWork || "").trim();
    if (name.length < 2 || name.length > 100) return Response.json({ message: "Merci de renseigner un nom valide." }, { status: 400 });
    if (residence.length < 2 || residence.length > 120) return Response.json({ message: "Merci de préciser votre niveau d’études actuel." }, { status: 400 });
    if (details && (details.length < 20 || details.length > 2000)) return Response.json({ message: "Votre message doit contenir entre 20 et 2 000 caractères." }, { status: 400 });
    if (body.destination === "Canada") {
      if (!["Étudiant", "Travailleur", "Résidence permanente"].includes(project)) return Response.json({ message: "Merci de choisir la procédure qui vous intéresse." }, { status: 400 });
      if (project !== "Étudiant" && (currentWork.length < 2 || currentWork.length > 160)) return Response.json({ message: "Merci de préciser votre domaine de travail actuel." }, { status: 400 });
    }
    const usesPreferredContact = body.destination === "Belgique" || body.destination === "Canada";
    const contactMethod = String(body.contactMethod || "");
    const contactValue = String(body.contactValue || "").trim();
    if (usesPreferredContact && (!contactLabels[contactMethod] || !contactValue)) return Response.json({ message: "Merci de choisir et de renseigner votre moyen de contact." }, { status: 400 });
    if (usesPreferredContact && contactMethod === "email" && (contactValue.length > 254 || !emailPattern.test(contactValue))) return Response.json({ message: "L’adresse e-mail semble incorrecte." }, { status: 400 });
    if (usesPreferredContact && contactMethod !== "email") {
      const digitCount = contactValue.replace(/\D/g, "").length;
      if (!/^[+\d\s().-]+$/.test(contactValue) || digitCount < 7 || digitCount > 15) return Response.json({ message: "Le numéro de téléphone semble incorrect." }, { status: 400 });
    }

    const isCanada = body.destination === "Canada";
    const apiKey = isCanada ? process.env.RESEND_CANADA_API_KEY : process.env.RESEND_BELGIQUE_API_KEY;
    const to = isCanada ? process.env.CONTACT_CANADA_TO_EMAIL : process.env.CONTACT_BELGIQUE_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) return Response.json({ message: "Le formulaire n’est pas encore relié à notre messagerie. Écrivez-nous à contact@lacavalerie.com." }, { status: 503 });

    const lines = [
      ["Nom", body.name],
      ...(usesPreferredContact ? [["Contact souhaité", contactLabels[contactMethod]], ["Coordonnée", contactValue]] : [["E-mail", body.email], ["WhatsApp", body.phone]]),
      ["Niveau d’études", body.residence],
      ["Destination", body.destination], ["Procédure", body.project],
      ...(body.destination === "Canada" && project !== "Étudiant" ? [["Activité professionnelle actuelle", currentWork]] : []),
      ["Situation", body.situation], ["Échéance", body.timeline], ["Message", details || "Non renseigné"],
    ].map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">${escapeHtml(String(label))}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(String(value))}</td></tr>`).join("");
    const emailPayload: Record<string, unknown> = { from, to: [to], subject: `Nouvelle consultation — ${body.name}`, html: `<h1>Nouvelle demande La Cavalerie</h1><table style="border-collapse:collapse">${lines}</table>` };
    const replyTo = usesPreferredContact && contactMethod === "email" ? contactValue : body.email;
    if (replyTo) emailPayload.reply_to = String(replyTo);
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify(emailPayload) });
    if (!response.ok) return Response.json({ message: "L’envoi a échoué. Réessayez dans quelques instants ou écrivez-nous directement." }, { status: 502 });
    return Response.json({ message: "Votre demande a bien été envoyée. Nous vous recontacterons dans les plus brefs délais." });
  } catch {
    return Response.json({ message: "La demande n’a pas pu être traitée." }, { status: 400 });
  }
}

function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[char] || char); }
