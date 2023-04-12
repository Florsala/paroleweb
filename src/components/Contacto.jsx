import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contacto.css";
import ReactGA from "react-ga";

import Mail from "../assets/mailbox.svg";

const Contacto = () => {
  const handleClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click botón contacto",
    });
    console.log("mensaje enviado");
  };

  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputEmpresa, cambiarInputEmpresa] = useState("");
  const [inputWeb, cambiarInputWeb] = useState("");
  const [inputRol, cambiarInputRol] = useState("");

  const [inputCorreo, cambiarInputCorreo] = useState("");
  const [inputMsg, cambiarInputMsg] = useState("");
  const [sentForm, setSentForm] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSentForm(true);

    emailjs
      .sendForm(
        "service_o0t5z56",
        "template_a03p9hn",
        form.current,
        "BsfYLVTbz5mz1AsJg"
      )
      .then(
        (result) => {
          console.log(result.text);
          cambiarInputNombre("");
          cambiarInputWeb("");

          cambiarInputCorreo("");
          cambiarInputMsg("");
          cambiarInputEmpresa("");
          cambiarInputRol("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  const handleInputEmpresa = (e) => {
    cambiarInputEmpresa(e.target.value);
  };

  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };
  const handleInputWeb = (e) => {
    cambiarInputWeb(e.target.value);
  };

  const handleInputRol = (e) => {
    cambiarInputRol(e.target.value);
  };

  const handleInputMsg = (e) => {
    cambiarInputMsg(e.target.value);
  };
  return (
    <div id="contacto">
      <div className="Ct-container">
        <h2 className="Serv-title">¿Podemos ayudarte con algo más?</h2>

        <div className="Ct-circle-pink"></div>
      </div>

      <div>
        <div className="Ct-container-2">
          <div className="Ct-container-text">
            <div className="Ct-container-head">
              <h3>¡Contactanos!</h3>

              <img
                style={{
                  padding: "0.5rem ",
                  width: "9.375rem",
                  height: "9.375rem",
                }}
                src={Mail}
                alt=""
              />
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="form-2">
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                id="nombre"
                value={inputNombre}
                onChange={handleInputNombre}
                required
              />

              <input
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                value={inputCorreo}
                onChange={handleInputCorreo}
                required
              />

              
            </div>
            <div  style={{ display: "flex", alignItems: "baseline" }}>
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                id="empresa"
                value={inputEmpresa}
                onChange={handleInputEmpresa}
                required
              />

              <input
                type="text"
                name="web"
                placeholder="Web de la Empresa"
                id="web"
                value={inputWeb}
                onChange={handleInputWeb}
                required
              />
            </div>

            <input
              type="text"
              name="rol"
              placeholder="Rol de la persona"
              id="rol"
              value={inputRol}
              onChange={handleInputRol}
              required
            />

            <div style={{ display: "flex" }}>
              <textarea
                name="mensaje"
                as="textarea"
                cols="20"
                rows="1"
                aria-required="true"
                aria-invalid="false"
                placeholder="Info adicional sobre rol/necesidad"
                value={inputMsg}
                onChange={handleInputMsg}
              />

              <input
                onClick={handleClick}
                className="btnForm"
                type="submit"
                value="Enviar"
              />
              {/*             {sentForm && ( <div style={{display:'flex', color:'white', alignItems:'center'}}> 
             
             <p className="exito"> 
             ¡Gracias por tu mensaje!</p></div>)

} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
