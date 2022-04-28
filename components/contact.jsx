import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  firstName: "",
  email: "",
  tel: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, firstName, email, tel, message }, setState] =
    useState(initialState);
  const [messageSend, setMessageSend] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    setMessageSend(true);
    e.preventDefault();
    console.log(e.target)
    emailjs
      .sendForm(
        "service_i4snm54",
        "template_2nsanic",
        e.target,
        "mE2OMSU_UIBv9DWaP"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setMessageSend(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div
        id="contact"
        style={{ minHeight: !props.isMainPage && "100vh", display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  Veuillez remplir le formulaire ci-dessous pour nous envoyer un
                  e-mail et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nom"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        placeholder="Prénom"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="tel"
                        name="tel"
                        className="form-control"
                        placeholder="Téléphone"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Envoyer
                </button>
                <span style={{ marginLeft: "10px" }}>
                  {" "}
                  {messageSend && "Message envoyé !"}
                </span>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adresse
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Téléphone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
