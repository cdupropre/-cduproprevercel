import React from "react";
import Head from "next/head";
import "../styles/index.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>C DU PROPRE PLUS</title>
        <meta
          name="description"
          content="C DU PROPRE PLUS, crée en 2005 est une société de prestations multiservices dans le domaine du nettoyage et de la propreté située à Juan-les-pins. Nous intervenons principalement dans les locaux d’entreprises, les copropriétés, les immeubles et parkings. Nous sommes attachés à conserver une clientèle fidèle et satisfaite de nos services d'entretien, nous permettant de renforcer notre réputation dans le domaine du nettoyage."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
