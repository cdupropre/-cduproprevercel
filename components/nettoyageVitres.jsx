import React from "react";

export const NettoyageVitres = (props) => {
    const [imgIndex, setImgIndex] = React.useState(0);

  const check = ["Fenêtres", "Baies vitrées", "Vérandas", "Verrières", "Velux"];


  const arrayImg = [
    "1.jpeg",
    "2.JPG",
    "3.JPG",
  ];
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (imgIndex === 2) {
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
              src={`img/vitres/${arrayImg[imgIndex]}`}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>NETTOYAGE VITRES</h2>
              <p>
                Nos équipes s’occupent de laver et nettoyer toutes les surfaces
                vitrées en extérieur. Il peut s’agir des vitreries suivantes :
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
