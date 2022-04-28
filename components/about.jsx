import React from 'react';

export const About = (props) => {
      const [imgIndex, setImgIndex] = React.useState(0);


  const arrayImg = ["1.JPEG", "2.jpg", "3.JPEG","4.jpg"];
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (imgIndex === 3) {
        setImgIndex(0);
      } else {
        setImgIndex((state) => state + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [imgIndex]);

  return (
    <div
      id="about"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="container aboutOpacity aboutAnim">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src={`img/about/${arrayImg[imgIndex]}`}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Qui sommes-nous</h2>
              <p>
                Fort d'une équipe de 10 personnes, C DU PROPRE PLUS, crée en
                2005 est une société de{" "}
                <strong>
                  prestations multiservices dans le domaine du nettoyage et de
                  la propreté
                </strong>{" "}
                située à Juan-les-pins.
                <br />
                <br />
                Nous intervenons principalement dans les locaux d’entreprises,
                les copropriétés, les immeubles et parkings. Nous sommes
                attachés à conserver une clientèle fidèle et satisfaite de nos
                services d'entretien, nous permettant de renforcer notre
                réputation dans le domaine du <strong>nettoyage</strong>.
                <br />
                <br />
                Pour tous renseignements, n’hésitez pas à nous faire parvenir
                votre demande via le formulaire de contact, ou par téléphone au{" "}
                <strong>06 98 27 23 08</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
