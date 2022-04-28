import React from "react";

export const NettoyageMoquettes = (props) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const check = [
    "Aspiration des surfaces",
    "Shampouinage",
    "Brossage du revêtement",
    "Extraction des impuretés par aspiration",
    "Rinçage des sols etc..",
  ];

  const arrayImg = ["1.JPEG", "2.JPEG", "3.JPEG", "4.JPEG"];
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
              src={`img/nettoyagemoquettes/${arrayImg[imgIndex]}`}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>NETTOYAGE MOQUETTES</h2>
              <p>
                C DU PROPRE PLUS s’est entouré des meilleurs agents d’entretien
                pour réaliser des prestations de qualité assurant une{" "}
                <strong>
                  propreté impeccable de vos moquettes ou de vos tapis:
                </strong>
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
