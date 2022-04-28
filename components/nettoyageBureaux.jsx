import React from "react";

export const NettoyageBureaux = (props) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const check = [
    "Entretien et nettoyage des sols de toutes surfaces",
    "Nettoyage de vos vitres, vitrines, portes, miroirs…",
    "Entretien (dépoussiérage, nettoyage) de vos bureaux",
    "Évacuation d’encombrants (cartons, portants…)",
  ];

  const arrayImg = ["1.jpg", "2.jpg"];
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (imgIndex === 1) {
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
              src={`img/nettoyagebureaux/${arrayImg[imgIndex]}`}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Nettoyage bureaux</h2>
              <p>En fonction de vos besoins, nous vous proposons:</p>
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
