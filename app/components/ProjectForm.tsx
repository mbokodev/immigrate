"use client";
import { FormEvent, useState } from "react";

export function ProjectForm({ destination }: { destination: "Belgique" | "Canada" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("loading"); const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, destination, consent: "yes", situation: "À préciser", timeline: "À préciser" }) });
    setStatus(response.ok ? "success" : "error"); if (response.ok) form.reset();
  }
  return <form className="project-form" onSubmit={submit}>
    <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    {destination === "Canada" ? <label className="full">Quel est votre projet ?<select name="project" required defaultValue=""><option value="" disabled>Choisir un parcours</option><option>Études</option><option>Travail</option><option>Résidence permanente</option></select></label> : <input type="hidden" name="project" value="Études" />}
    <label>Nom et prénom<input name="name" autoComplete="name" required /></label><label>WhatsApp / téléphone<input name="phone" type="tel" autoComplete="tel" required /></label>
    <label className="full">E-mail<input name="email" type="email" autoComplete="email" required /></label>
    {destination === "Belgique" ? <label className="full">Niveau d’études actuel<input name="residence" required placeholder="Ex. Terminale, licence, master…" /></label> : <input type="hidden" name="residence" value="À préciser" />}
    <label className="full">Parlez-nous brièvement de votre projet<textarea name="details" required minLength={20} rows={4} /></label>
    <button className="button button-primary full" disabled={status === "loading"}>{status === "loading" ? "Envoi en cours…" : "Démarrer mon projet"}<span>→</span></button>
    {status === "success" && <p className="form-feedback success full">Votre demande a bien été envoyée. Nous vous répondrons rapidement.</p>}{status === "error" && <p className="form-feedback error full">L’envoi n’a pas abouti. Vous pouvez réessayer dans quelques instants.</p>}
  </form>;
}
