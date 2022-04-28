import Head from "next/head";
import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Services } from "../components/services";
import { Contact } from "../components/contact";
import { Partenaires } from "../components/partenaires";
import { AboutAccueil } from "../components/aboutAccueil";

import JsonData from "../data/data.json";

export default function Home() {
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
      <Header data={landingPageData.Header} />
      <AboutAccueil />
      <Services data={landingPageData.Services} />
      <Partenaires data={landingPageData.Partenaires} />
      <Contact data={landingPageData.Contact} isMainPage />
    </div>
  );
}
