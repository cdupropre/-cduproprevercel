import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="TECH DIGITAL" />
        <meta
          name="description"
          content="C DU PROPRE PLUS, crée en 2005 est une société de prestations multiservices dans le domaine du nettoyage et de la propreté située à Juan-les-pins. Nous intervenons principalement dans les locaux d’entreprises, les copropriétés, les immeubles et parkings. Nous sommes attachés à conserver une clientèle fidèle et satisfaite de nos services d'entretien, nous permettant de renforcer notre réputation dans le domaine du nettoyage."
        />
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="img/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="img/apple-touch-icon-114x114.png"
        />

        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/font-awesome/css/font-awesome.css"
        />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/nivo-lightbox/nivo-lightbox.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/nivo-lightbox/default.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
        <script type="text/javascript" src="js/jquery.1.11.1.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
