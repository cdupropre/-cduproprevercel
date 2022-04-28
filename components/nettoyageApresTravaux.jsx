import React from "react";

export const NettoyageApresTravaux = (props) => {
  const [imgIndex, setImgIndex] = React.useState(0);

  const check = [
    "Évacuation des déchets, gravats, poussières",
    "Évacuation des résidus de matériaux (copeaux, sciure, chutes de bois…)",
    "Entretien des sols et des murs",
    "Nettoyage des diverses taches",
    "Nettoyage des vitres",
  ];

  const arrayImg = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
  ];
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (imgIndex === 7) {
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
              src={`img/gravats/slider/${arrayImg[imgIndex]}`}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>NETTOYAGE après TRAVAUX</h2>
              <p>
                C DU PROPRE PLUS s’engage à vous fournir des prestations de{" "}
                <strong>nettoyage après travaux</strong> dans une approche
                éco-responsable :
              </p>
              <div className="list-style">
                <div
                  className="col-lg-6 col-sm-6 col-xs-12"
                  style={{ width: "100%" }}
                >
                  <ul>
                    {check.map((d, i) => {
                      return <li key={`${d}-${i}`}>{d}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
