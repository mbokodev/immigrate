import type { Metadata } from "next";
import { DestinationPreview } from "../components/DestinationPreview";
export const metadata: Metadata = { title: "Votre projet au Canada", description: "Études, travail ou résidence permanente : donnez une direction claire à votre projet au Canada." };
export default function CanadaPage() { return <DestinationPreview destination="Canada" image="/destination-canada.png" label="Canada · Mobilité" title="Donnez une direction claire à votre projet Canada." text="Étudier, travailler ou construire un projet de vie : choisissez votre parcours et commencez par une évaluation humaine de votre situation." paths={["Étudier", "Travailler", "Résidence permanente"]} />; }
