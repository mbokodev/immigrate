type Lead = Record<string, unknown>;

const required = ["name", "email", "phone", "residence", "destination", "project", "situation", "timeline", "details", "consent"];

export async function POST(request: Request) {
  try {
    const body = await request.json() as Lead;
    if (body.website) return Response.json({ message: "Merci. Votre demande a bien été reçue." });
    if (required.some((field) => !body[field] || String(body[field]).trim().length === 0)) return Response.json({ message: "Merci de compléter tous les champs obligatoires." }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(String(body.email))) return Response.json({ message: "L’adresse e-mail semble incorrecte." }, { status: 400 });
    if (String(body.details).trim().length < 20) return Response.json({ message: "Merci de nous donner un peu plus de détails sur votre projet." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) return Response.json({ message: "Le formulaire n’est pas encore relié à notre messagerie. Écrivez-nous à contact@lacavalerie.com." }, { status: 503 });

    const lines = [
      ["Nom", body.name], ["E-mail", body.email], ["WhatsApp", body.phone], ["Résidence", body.residence],
      ["Destination", body.destination], ["Projet", body.project], ["Situation", body.situation], ["Échéance", body.timeline], ["Message", body.details],
    ].map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">${escapeHtml(String(label))}</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(String(value))}</td></tr>`).join("");
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], reply_to: String(body.email), subject: `Nouvelle consultation — ${body.name}`, html: `<h1>Nouvelle demande La Cavalerie</h1><table style="border-collapse:collapse">${lines}</table>` }) });
    if (!response.ok) return Response.json({ message: "L’envoi a échoué. Réessayez dans quelques instants ou écrivez-nous directement." }, { status: 502 });
    return Response.json({ message: "Merci ! Votre demande a bien été envoyée. Nous vous répondrons sous 1 à 2 jours ouvrables." });
  } catch {
    return Response.json({ message: "La demande n’a pas pu être traitée." }, { status: 400 });
  }
}

function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[char] || char); }
