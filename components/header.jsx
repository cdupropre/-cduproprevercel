import React from "react";
import Link from "next/link";

export const Header = (props) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const arrayImg = ["first-img.jpg", "first-img2.jpg", "first-img3.jpg"];
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
    <header
      id="header"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="intro"
        style={{
          height: "100vh",
          background: `url(../img/${arrayImg[imgIndex]}) center center no-repeat`,
        }}
      >
        <div
          className="overlay"
          style={{ height: "100vh", display: "flex", alignItems: "center" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="titleHeader">
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <Link href="/contact">
                  <a className="contactHeader btn btn-custom btn-lg page-scroll">
                    Nous contacter
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
