import Link from "next/link";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            style={{ marginTop: "18px" }}
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link href="/">
            <a href="#page-top">
              <img style={{ height: "5em" }} src="img/logo.jpg" alt="" />
            </a>
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link href="/about">
                <a className="page-scroll">QUI SOMMES-NOUS</a>
              </Link>
            </li>
            <li>
              <Link href="/prestations">
                <a className="page-scroll">SERVICES</a>
              </Link>
            </li>
            <li>
              <Link href="/recrutement">
                <a className="page-scroll">RECRUTEMENT</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="page-scroll">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
