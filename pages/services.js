import Head from "next/head";
import { useState, useEffect } from "react";
import { Services } from "../components/services";
import JsonData from "../data/data.json";

export default function SevicesPage() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Head>
        <title>C DU PROPRE PLUS</title>
        <meta
          name="description"
          content="C DU PROPRE PLUS, crée en 2005 est une société de prestations multiservices dans le domaine du nettoyage et de la propreté située à Juan-les-pins. Nous intervenons principalement dans les locaux d’entreprises, les copropriétés, les immeubles et parkings. Nous sommes attachés à conserver une clientèle fidèle et satisfaite de nos services d'entretien, nous permettant de renforcer notre réputation dans le domaine du nettoyage."
        />
      </Head>
      <Services data={landingPageData.Services} />
    </div>
  );
}
