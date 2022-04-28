import Link from "next/link";

export const Prestations = (props) => {
  return (
    <div
      id="team"
      className="text-center"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 style={{ color: "white" }}>Nos Services</h2>
          <p style={{ color: "white" }}>
            <strong>Entreprise de nettoyage pour les professionnels</strong>, C
            DU PROPRE PLUS apporte tout son savoir-faire en matière de :
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                  <Link href={d.path}>
                    <div
                      className="thumbnail"
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption" style={{ color: "white" }}>
                        <h4 style={{ color: "white" }}>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
