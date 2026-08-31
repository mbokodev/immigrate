"use client";
import { FormEvent, useState } from "react";

export function ProjectForm({ destination }: { destination: "Belgique" | "Canada" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "phone" | "email">("whatsapp");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("loading"); setFeedback(""); const form = event.currentTarget;
    try {
      const values = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, destination, consent: "yes", situation: "À préciser", timeline: "À préciser" }) });
      const result = await response.json() as { message?: string };
      setFeedback(result.message || (response.ok ? "Votre demande a bien été envoyée." : "L’envoi n’a pas abouti."));
      setStatus(response.ok ? "success" : "error");
      if (response.ok) { form.reset(); setContactMethod("whatsapp"); }
    } catch {
      setStatus("error"); setFeedback("Impossible de contacter le serveur. Vérifiez votre connexion et réessayez.");
    }
  }
  return <form className="project-form" onSubmit={submit}>
    <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    {destination === "Canada" ? <label className="full">Quel est votre projet ?<select name="project" required defaultValue=""><option value="" disabled>Choisir un parcours</option><option>Études</option><option>Travail</option><option>Résidence permanente</option></select></label> : <input type="hidden" name="project" value="Études" />}
    <label className={destination === "Belgique" ? "full" : undefined}>Nom et prénom<input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
    {destination === "Belgique" ? <>
      <fieldset className="contact-method full">
        <legend>Comment souhaitez-vous être contacté(e) ?</legend>
        <div className="contact-options">
          <label><input type="radio" name="contactMethod" value="whatsapp" checked={contactMethod === "whatsapp"} onChange={() => setContactMethod("whatsapp")} /><span>WhatsApp</span></label>
          <label><input type="radio" name="contactMethod" value="phone" checked={contactMethod === "phone"} onChange={() => setContactMethod("phone")} /><span>Appel téléphonique</span></label>
          <label><input type="radio" name="contactMethod" value="email" checked={contactMethod === "email"} onChange={() => setContactMethod("email")} /><span>E-mail</span></label>
        </div>
      </fieldset>
      <label className="full">{contactMethod === "email" ? "Votre adresse e-mail" : contactMethod === "phone" ? "Votre numéro de téléphone" : "Votre numéro WhatsApp"}
        <input name="contactValue" type={contactMethod === "email" ? "email" : "tel"} inputMode={contactMethod === "email" ? "email" : "tel"} autoComplete={contactMethod === "email" ? "email" : "tel"} required maxLength={contactMethod === "email" ? 254 : 30} pattern={contactMethod === "email" ? undefined : "[+0-9 ()\\-.]{7,30}"} title={contactMethod === "email" ? undefined : "Saisissez un numéro valide avec au moins 7 caractères."} placeholder={contactMethod === "email" ? "Ex. nom@exemple.com" : "Ex. +237 6 00 00 00 00"} onInput={contactMethod === "email" ? undefined : (event) => { event.currentTarget.value = event.currentTarget.value.replace(/[^+0-9 ()\-.]/g, ""); }} />
      </label>
    </> : <><label>WhatsApp / téléphone<input name="phone" type="tel" autoComplete="tel" required /></label><label className="full">E-mail<input name="email" type="email" autoComplete="email" required /></label></>}
    {destination === "Belgique" ? <label className="full">Niveau d’études actuel<input name="residence" required minLength={2} maxLength={120} placeholder="Ex. Terminale, licence, master…" /></label> : <input type="hidden" name="residence" value="À préciser" />}
    <label className="full">Parlez-nous brièvement de votre projet <span className="optional-label">(facultatif)</span><textarea name="details" minLength={20} maxLength={2000} rows={4} /></label>
    <button className="button button-primary full" disabled={status === "loading"}>{status === "loading" ? "Envoi en cours…" : destination === "Belgique" ? "Envoyer" : "Démarrer mon projet"}<span>→</span></button>
    {status === "success" && <p className="form-feedback success full" role="status">{feedback}</p>}{status === "error" && <p className="form-feedback error full" role="alert">{feedback}</p>}
  </form>;
}
