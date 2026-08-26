import Image from "next/image";
import Link from "next/link";
import { ProjectForm } from "./ProjectForm";

type Props = { destination: "Belgique" | "Canada"; image: string; label: string; title: string; text: string; paths: string[] };
export function DestinationPreview({ destination, image, label, title, text, paths }: Props) {
  return <><section className="preview-hero"><div className="preview-copy"><Link className="back-link" href="/">← Choisir une autre destination</Link><p className="kicker"><span /> {label}</p><h1>{title}</h1><p className="preview-lead">{text}</p><a className="button button-primary" href="#demarrer">Démarrer mon projet <span>→</span></a></div><div className="preview-image"><Image src={image} alt="" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div></section>
    <section className="path-section" aria-labelledby="paths-title"><p className="section-label">Votre accompagnement</p><div><h2 id="paths-title">Une première étape simple.<br />Un projet mieux orienté.</h2><p>Nous commençons par comprendre votre situation, votre objectif et vos questions. Le détail de l’accompagnement sera présenté ici lors de la prochaine étape.</p></div><div className="path-list">{paths.map((path, index) => <article key={path}><span>0{index + 1}</span><h3>{path}</h3></article>)}</div></section>
    <section className="form-section" id="demarrer"><div><p className="section-label light">Votre projet commence ici</p><h2>Parlons de ce que<br />vous souhaitez construire.</h2><p>Quelques informations suffisent pour préparer un premier échange utile.</p></div><ProjectForm destination={destination} /></section></>;
}
