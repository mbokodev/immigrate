import Image from "next/image";
import Link from "next/link";

const destinations = [
  { href: "/belgique", country: "Belgique", flag: "🇧🇪", eyebrow: "Destination 01", description: "Étudier en Belgique", image: "/destination-belgique.png", alt: "Jeune étudiante africaine sur un campus universitaire européen" },
  { href: "/canada", country: "Canada", flag: "🇨🇦", eyebrow: "Destination 02", description: "Étudier • Travailler • Résidence permanente", image: "/destination-canada.png", alt: "Jeune professionnel africain dans un environnement urbain moderne" },
];

export default function Home() {
  return <div className="destination-page">
    <section className="destination-intro" aria-labelledby="page-title">
      <p className="kicker"><span /> Accompagnement depuis l’Afrique</p>
      <h1 id="page-title">Votre projet commence<br />par une <em>destination.</em></h1>
      <div className="intro-bottom"><h2>Quel pays vous intéresse&nbsp;?</h2><p>Découvrez l’accompagnement La Cavalerie adapté à votre projet.</p></div>
    </section>
    <section className="destination-cards" aria-label="Choisir une destination">
      {destinations.map((item) => <Link className="destination-choice" href={item.href} key={item.country}>
        <Image src={item.image} alt={item.alt} fill priority sizes="(max-width: 760px) 100vw, 50vw" />
        <span className="destination-shade" />
        <div className="destination-topline"><span>{item.eyebrow}</span><span className="flag" aria-hidden="true">{item.flag}</span></div>
        <div className="destination-copy"><p>{item.description}</p><h2>{item.country}</h2><span className="destination-link">Découvrir {item.country === "Belgique" ? "la Belgique" : "le Canada"}<b aria-hidden="true">↗</b></span></div>
      </Link>)}
    </section>
    <p className="home-note">Un accompagnement clair, humain et adapté à votre parcours.</p>
  </div>;
}
