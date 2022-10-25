import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contacto.css";



import Mail from "../assets/mailbox.svg";

const Contacto = () => {


  const [inputNombre, cambiarInputNombre] = useState("");
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
          cambiarInputCorreo("");
          cambiarInputMsg("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

 

  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

 

  const handleInputMsg = (e) => {
    cambiarInputMsg(e.target.value);
  };
  return (
    <div id="contacto" >
      <div className="Ct-container">
        <h2 className="Serv-title">¿Podemos ayudarte con algo más?</h2>

        <div className="Ct-circle-pink"></div>
      </div>

      <div>
        <div className="Ct-container-2">
          <div className="Ct-container-text">
            <div className="Ct-container-head">
              <h3>¡Contactanos!</h3>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}  className="form-2">
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
            <div style={{ display: "flex" }}>
              <textarea
                name="mensaje"
                as="textarea"
                cols="20"
                rows="1"
                aria-required="true"
                aria-invalid="false"
                placeholder="Tu mensaje"
                  value={inputMsg}
            onChange={handleInputMsg} 
                required
              />

<input className="btnForm" type="submit" value="Enviar"          
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
