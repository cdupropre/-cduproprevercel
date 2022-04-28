export const Partenaires = (props) => {
  return (
    <div id="team" className="text-center" style={{ background: "white" }}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Nos Partenaires</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img
                      src={d.img}
                      alt="..."
                      className="team-img"
                      style={{ height: "98.45px", objectFit: "contain" }}
                    />
                    <div className="caption">
                      <h4 style={{ color: "black" }}>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
