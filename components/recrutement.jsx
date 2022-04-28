import { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

export const Recrutement = (props) => {
  const [messageSend, setMessageSend] = useState(false);

  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pj, setPj] = useState(null);

  const handleSubmit = (e) => {
    setMessageSend(true);
    e.preventDefault();
    console.log(message, "message");
    emailjs
      .sendForm(
        "service_i4snm54",
        "template_97dpeyr",
        e.target,
        "mE2OMSU_UIBv9DWaP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSend(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const upload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cdupropre_images");
    formData.append("api_key", "229338419912387");

    await axios
      .post("https://api.cloudinary.com/v1_1/dlhnr89jw/image/upload", formData)
      .then((res) => {
        setMessage((state) => state + ' ' + res.data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div
        id="contact"
        style={{
          minHeight: !props.isMainPage && "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-10">
            <div className="row">
              <div className="section-title">
                <h2>Nous recrutons</h2>
                <p>Vous souhaitez rejoindre notre équipe de professionnels ?</p>
                <p>
                  Pour postuler, merci de nous transmettre vos coordonnées ainsi
                  que votre CV via le formulaire ci dessous :
                </p>
              </div>
              <form
                encType="multipart/form-data"
                name="sentMessage"
                onSubmit={handleSubmit}
              >
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
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setFirstName(e.target.value)}
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
                        onChange={(e) => setTel(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <p>Votre CV en format image (PNG, JPG...)</p>
                <div className="form-group">
                  <input
                    id="fileItem"
                    name="fileItem"
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) => {
                      upload(e.target.files[0]);
                    }}
                  />
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
        </div>
      </div>
    </div>
  );
};
