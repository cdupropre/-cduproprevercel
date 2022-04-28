import React from "react";

export const Cristallisation = (props) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const check = [
    "Décapage",
    "Ponçage",
    "Nettoyage",
    "Cristallisation",
  ];

  const arrayImg = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
  ];
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (imgIndex === 6) {
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
              src={`img/cristallisation/${arrayImg[imgIndex]}`}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>CRISTALLISATION DES SOLS</h2>
              <p>
                C DU PROPRE PLUS met en œuvre des méthodes, des équipes et des
                moyens adaptés à tous les types de{" "}
                <strong>surfaces marbre</strong>. La{" "}
                <strong>cristallisation</strong> des sols marbres redonne
                propreté et éclat durable à tous ces types de surfaces:
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
