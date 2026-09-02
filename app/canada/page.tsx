import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectForm } from "../components/ProjectForm";

const pageTitle = "Construire votre avenir au Canada";
const pageDescription = "Études, carrière ou projet de vie : imaginez votre avenir au Canada et transformez cette ambition en un parcours clair avec La Cavalerie.";
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: { title: `${pageTitle} | La Cavalerie`, description: pageDescription, images: [{ url: "/canada-page/hero-toronto.png", width: 1694, height: 929, alt: "Une nouvelle vie au Canada avec La Cavalerie" }] },
  twitter: { card: "summary_large_image", title: `${pageTitle} | La Cavalerie`, description: pageDescription, images: ["/canada-page/hero-toronto.png"] },
};

const paths = [
  { number: "01", title: "Étudier", text: "Choisir une formation qui ouvre vraiment la prochaine porte de votre parcours.", note: "Diplôme · spécialisation · nouveau départ" },
  { number: "02", title: "Travailler", text: "Donner une direction internationale à votre expérience et à vos compétences.", note: "Carrière · mobilité · opportunités" },
  { number: "03", title: "S’installer", text: "Construire un projet de vie durable, réfléchi et adapté à votre réalité.", note: "Projet de vie · famille · avenir" },
];
const steps = [
  ["Votre histoire", "Nous partons de votre parcours, pas d’une solution toute faite."],
  ["Votre destination", "Nous clarifions la province, la ville et le chemin qui vous correspondent."],
  ["Votre feuille de route", "Nous transformons votre ambition en prochaines étapes concrètes."],
  ["Votre préparation", "Vous avancez avec une méthode claire et des attentes réalistes."],
];
const heroSlides = [
  { src: "/canada-page/hero-toronto.png", alt: "Jeune femme contemplant Toronto sous la neige" },
  { src: "/canada-page/hero-montreal-dream.png", alt: "Étudiant contemplant Montréal sous une neige légère" },
  { src: "/canada-page/hero-vancouver-dream.png", alt: "Jeune professionnel contemplant Vancouver à l’aube" },
];

export default function CanadaPage() { return <div className="ca-page">
  <section className="ca-hero"><div className="ca-hero-slides" aria-hidden="true">{heroSlides.map((slide, index) => <Image className="ca-hero-image" src={slide.src} alt="" fill priority={index === 0} sizes="100vw" key={slide.src} />)}</div><div className="sr-only">{heroSlides.map((slide) => <span key={slide.src}>{slide.alt}. </span>)}</div><div className="ca-hero-overlay" /><div className="ca-hero-copy"><Link className="ca-back" href="/">← Choisir une autre destination</Link><p className="ca-kicker"><span>Canada</span> · Études, carrière & projet de vie</p><h1>Et si votre<br />prochaine vie<br /><em>commençait ici&nbsp;?</em></h1><p>Un grand projet commence souvent par une image. Nous vous aidons à la transformer en direction, en étapes et en décisions solides.</p><div className="ca-hero-actions"><a className="ca-button" href="#demarrer">Faire le premier pas <span>↗</span></a><a href="#possibles">Explorer les possibles <span>↓</span></a></div></div><div className="ca-scroll"><span /> Faites défiler pour rêver plus loin</div><div className="ca-slide-progress" aria-hidden="true"><span /><span /><span /></div></section>
  <section className="ca-manifesto"><p className="ca-section-label">Une destination, mille possibles</p><h2>Le Canada n’est pas<br />seulement un pays.<br /><em>C’est un horizon.</em></h2><div className="ca-manifesto-note"><span>🍁</span><p>Des campus vivants. Des villes ouvertes sur le monde. Des carrières à réinventer. Et peut-être, une nouvelle version de vous-même.</p></div></section>
  <section className="ca-possibles" id="possibles"><div className="ca-paths-intro"><p className="ca-section-label light">Choisir votre chemin</p><h2>Trois façons<br />d’écrire la suite.</h2><p>Il n’existe pas un seul rêve canadien. Il existe celui qui ressemble à votre parcours.</p></div><div className="ca-paths">{paths.map((path) => <article key={path.number}><span>{path.number}</span><div><h3>{path.title}</h3><p>{path.text}</p><small>{path.note}</small></div><b aria-hidden="true">↗</b></article>)}</div></section>
  <section className="ca-story ca-story-campus"><div className="ca-story-image"><Image src="/canada-page/campus-autumn.png" alt="Étudiant sur un campus canadien en automne" fill sizes="(max-width: 850px) 100vw, 48vw" /></div><div className="ca-story-copy"><span className="ca-chapter">Chapitre 01 · Apprendre</span><h2>Étudier là où<br />les idées voyagent.</h2><p>Votre formation ne devrait pas être un simple choix de programme. Elle doit prolonger votre histoire et préparer la personne que vous souhaitez devenir.</p><blockquote>« Un projet cohérent commence par la bonne question, pas par le premier formulaire. »</blockquote><a href="#demarrer">Parler de mon projet d’études <span>→</span></a></div></section>
  <section className="ca-dream-line"><p>Montréal <span>•</span> Toronto <span>•</span> Ottawa <span>•</span> Québec <span>•</span> Calgary <span>•</span> Vancouver</p></section>
  <section className="ca-story ca-story-career"><div className="ca-story-copy"><span className="ca-chapter">Chapitre 02 · Grandir</span><h2>Donner plus<br />d’espace à votre<br /><em>ambition.</em></h2><p>Changer de pays, c’est parfois changer d’échelle. Nous vous aidons à regarder votre expérience avec lucidité, à comprendre vos options et à construire une trajectoire crédible.</p><div className="ca-mini-stats"><span><b>01</b> Votre profil</span><span><b>02</b> Vos options</span><span><b>03</b> Votre stratégie</span></div></div><div className="ca-story-image"><Image src="/canada-page/career-montreal.png" alt="Jeune professionnelle dans une ville canadienne" fill sizes="(max-width: 850px) 100vw, 52vw" /></div></section>
  <section className="ca-method"><div className="ca-method-head"><p className="ca-section-label">Du rêve au plan</p><h2>Rêver grand.<br /><em>Avancer juste.</em></h2><p>Notre rôle n’est pas de vous vendre une promesse. C’est de donner à votre ambition une forme claire, réaliste et profondément personnelle.</p></div><div className="ca-method-steps">{steps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
  <section className="ca-partners" aria-labelledby="partners-title"><div className="ca-partners-copy"><p className="ca-section-label light">Notre écosystème</p><h2 id="partners-title">Ils avancent<br /><em>à nos côtés.</em></h2><p>Des collaborations choisies pour ouvrir de nouvelles perspectives et mieux accompagner chaque projet.</p></div><div className="ca-partner-logos"><article><Image src="/partners/digitaltech.jpg" alt="DigitalTech, partenaire de La Cavalerie" width={2035} height={2560} sizes="(max-width: 700px) 70vw, 220px" /></article><article><Image src="/partners/partner-mark.png" alt="Partenaire de La Cavalerie" width={752} height={264} sizes="(max-width: 700px) 70vw, 220px" /></article><article><Image src="/partners/octoplus.jpg" alt="Octoplus, partenaire de La Cavalerie" width={2560} height={2069} sizes="(max-width: 700px) 70vw, 220px" /></article></div></section>
  <section className="ca-quote"><div className="ca-orbit orbit-one" /><div className="ca-orbit orbit-two" /><span>Votre avenir mérite mieux qu’un départ improvisé.</span><h2>Il mérite une vision.</h2><p>Et cette vision peut commencer aujourd’hui.</p><a className="ca-button ca-button-light" href="#demarrer">Faire le premier pas <b>→</b></a></section>
  <section className="ca-form-section" id="demarrer"><div className="ca-form-copy"><p className="ca-section-label light">Votre histoire commence ici</p><h2>Quel Canada<br />imaginez-vous&nbsp;?</h2><p>Présentez-nous votre projet. Nous prendrons le temps de comprendre votre situation avant de vous proposer la prochaine étape utile.</p><div><span>✓ Échange humain</span><span>✓ Réponse personnalisée</span><span>✓ Aucune promesse irréaliste</span></div></div><div className="ca-form-card"><div className="ca-form-heading"><span>Parlez-nous de vous</span><small>Environ 2 minutes</small></div><ProjectForm destination="Canada" /></div></section>
</div>; }
