import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectForm } from "../components/ProjectForm";

export const metadata: Metadata = { title: "Étudier en Belgique", description: "Construisez votre projet d’études en Belgique avec un accompagnement clair, humain et structuré." };

const audience = [
  ["01", "Élèves et futurs bacheliers", "Vous souhaitez préparer vos études supérieures et choisir une orientation cohérente."],
  ["02", "Étudiants en poursuite d’études", "Vous voulez prolonger votre parcours en Belgique avec un projet lisible et réaliste."],
  ["03", "Jeunes diplômés", "Vous envisagez une spécialisation ou une nouvelle étape académique à l’international."],
  ["04", "Parents et familles", "Vous souhaitez comprendre le projet, anticiper les besoins et accompagner une décision importante."],
];
const support = [
  ["Comprendre", "Nous écoutons votre parcours, vos ambitions et vos contraintes avant de parler de solutions."],
  ["Orienter", "Nous vous aidons à clarifier vos choix et à construire un projet d’études cohérent."],
  ["Structurer", "Nous organisons avec vous les actions, les documents et les priorités de votre projet."],
  ["Préparer", "Nous vous accompagnons pour aborder chaque prochaine étape avec davantage de sérénité."],
];
const stages = [
  ["01", "Premier échange", "Nous faisons connaissance et posons les bases de votre projet."],
  ["02", "Évaluation", "Votre parcours, votre objectif et votre situation sont examinés avec attention."],
  ["03", "Feuille de route", "Vous repartez avec une direction claire et des priorités concrètes."],
  ["04", "Accompagnement", "Nous avançons ensemble sur les étapes prévues dans votre formule."],
  ["05", "Préparation au départ", "Vous anticipez plus sereinement votre nouvelle vie étudiante."],
];
const faqs = [
  ["Quand faut-il commencer à préparer son projet ?", "Le plus tôt possible. Anticiper permet de réfléchir à votre orientation, de mieux organiser vos priorités et d’avancer sans précipitation."],
  ["Puis-je être accompagné si je ne sais pas encore quelle formation choisir ?", "Oui. La clarification du projet fait justement partie des premiers sujets que nous abordons avec vous."],
  ["La Cavalerie garantit-elle une admission ?", "Non. Les décisions appartiennent aux établissements concernés. Notre engagement porte sur la qualité, la clarté et le sérieux de votre préparation."],
  ["Mes parents peuvent-ils participer au premier échange ?", "Oui. Lorsque cela est utile, un parent peut prendre part à l’échange afin que chacun comprenne les objectifs et les prochaines étapes."],
  ["Comment se déroule la première consultation ?", "Vous nous présentez votre situation et vos questions. Nous identifions ensuite les points à clarifier et la forme d’accompagnement la plus pertinente."],
];

export default function BelgiquePage() {
  return <>
    <section className="be-hero">
      <div className="be-hero-copy"><Link className="back-link" href="/">← Choisir une autre destination</Link><p className="kicker"><span /> Belgique · Projet d’études</p><h1>Construisez votre projet d’études <em>en Belgique.</em></h1><p>Un accompagnement humain et structuré pour transformer votre ambition en un projet clair, cohérent et bien préparé.</p><div className="be-hero-actions"><a className="button button-primary" href="#consultation">Prendre rendez-vous <span>→</span></a><a className="be-text-link" href="#pourquoi">Découvrir l’accompagnement <span>↓</span></a></div><div className="be-trust"><span><b>01</b> Écoute</span><span><b>02</b> Clarté</span><span><b>03</b> Méthode</span></div></div>
      <div className="be-hero-visual"><Image src="/destination-belgique.png" alt="Étudiante africaine sur un campus universitaire" fill priority sizes="(max-width: 900px) 100vw, 48vw" /><div className="be-image-note"><span>Votre première étape</span><strong>Faire le point sur votre projet.</strong></div></div>
    </section>
    <section className="be-why" id="pourquoi"><div><p className="section-label">Pourquoi étudier en Belgique ?</p><h2>Un environnement d’études ouvert sur <em>l’Europe.</em></h2></div><div className="be-why-content"><p className="be-large-copy">La Belgique attire des étudiants internationaux à la recherche d’un enseignement de qualité, d’un environnement multiculturel et d’une expérience académique au cœur de l’Europe.</p><p>Mais choisir une destination ne suffit pas. Il faut aussi construire un projet en accord avec votre parcours, vos ambitions et votre réalité. C’est là que commence notre accompagnement.</p><div className="be-facts"><span><b>FR</b>Un environnement francophone</span><span><b>EU</b>Une ouverture européenne</span><span><b>∞</b>Des parcours diversifiés</span></div></div></section>
    <section className="be-audience"><div className="be-section-head"><div><p className="section-label">Pour qui ?</p><h2>À qui s’adresse notre accompagnement&nbsp;?</h2></div><p>Chaque parcours est différent. Nous adaptons notre écoute à votre situation et à votre niveau de réflexion.</p></div><div className="be-audience-grid">{audience.map(([n,title,text]) => <article key={n}><span>{n}</span><div className="be-line-icon" aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="be-support"><div className="be-support-intro"><p className="section-label light">Notre rôle</p><h2>Comment La Cavalerie vous accompagne&nbsp;?</h2><p>Nous vous aidons à garder une vision claire de votre projet, de vos choix et de la prochaine action utile.</p><a className="button button-light" href="#consultation">Faire évaluer mon projet <span>→</span></a></div><div className="be-support-list">{support.map(([title,text],i) => <article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
    <section className="be-stages"><div className="be-section-head"><div><p className="section-label">Votre parcours</p><h2>Les grandes étapes de votre projet.</h2></div><p>Une progression simple et lisible, depuis votre première question jusqu’à la préparation de votre départ.</p></div><div className="be-stage-track">{stages.map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
    <section className="be-difference"><div className="be-difference-copy"><p className="section-label">Pourquoi La Cavalerie ?</p><h2>Du sérieux dans la méthode.<br /><em>De l’humain dans l’échange.</em></h2><p>Votre projet mérite mieux qu’une réponse générique. Nous prenons le temps de comprendre avant de vous orienter.</p></div><div className="be-values"><article><span>✓</span><h3>Des réponses claires</h3><p>Nous privilégions des explications simples, compréhensibles et sans jargon inutile.</p></article><article><span>✓</span><h3>Une approche personnalisée</h3><p>Votre parcours et vos objectifs guident chaque échange et chaque recommandation.</p></article><article><span>✓</span><h3>Des attentes réalistes</h3><p>Nous ne promettons ni admission ni résultat administratif. Nous vous aidons à mieux vous préparer.</p></article><article><span>✓</span><h3>Un suivi structuré</h3><p>Vous savez toujours où vous en êtes et quelle est la prochaine étape utile.</p></article></div></section>
    <section className="be-faq"><div><p className="section-label">Questions fréquentes</p><h2>Avant de commencer.</h2><p>Les premières réponses pour vous aider à avancer avec davantage de confiance.</p></div><div className="be-faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    <section className="be-final" id="consultation"><div className="be-final-copy"><p className="section-label light">Réserver une consultation</p><h2>Parlons de<br />votre projet.</h2><p>Présentez-nous votre situation en quelques mots. Nous vous recontacterons pour organiser un premier échange.</p><div className="be-reassurance"><span>✓ Formulaire rapide</span><span>✓ Réponse personnalisée</span><span>✓ Échange confidentiel</span></div></div><div className="be-form-card"><div className="be-form-title"><span>Votre demande</span><small>Environ 2 minutes</small></div><ProjectForm destination="Belgique" /></div></section>
    <a className="mobile-project-cta" href="#consultation">Prendre rendez-vous <span>→</span></a>
  </>;
}
