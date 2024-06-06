import React, { useEffect /*  useRef, useState  */ } from "react";
/* import emailjs from "@emailjs/browser";

 */
import { useTranslation } from "react-i18next";

import "../styles/Equipo.css";
import dots from "../assets/dots.svg";

import Dana from "../assets/Equipo/Dan2-2.png";

import Daiana from "../assets/Equipo/Dai2-1.png";
import pablo from "../assets/Equipo/pablo.png";

import {IoLogoLinkedin} from "react-icons/io5";

/* import { BsPaperclip } from "react-icons/bs";

import line7 from "../assets/Line7.svg";

import {TiInputChecked} from "react-icons/ti"; */

import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/Form.css";

const Equipo = () => {
  const { t, i18n } = useTranslation();


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  /*   const [inputNombre, cambiarInputNombre] = useState("");
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




  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

 

  const handleInputMsg = (e) => {
    cambiarInputMsg(e.target.value);
  };
 */

  return (
    <div
      id="nosotros"
      style={{
        backgroundImage: `url(${dots})`,

        backgroundRepeat: "repeat",
      }}
    >
      <div  className="Eq-container">

        
        {i18n.language === "es" ? (
            <h2 className="Serv-title">
            {t("team.title")}
            </h2>
          ) : (
            <h2 style={{right:"11rem"}} className="Serv-title">
            {t("team.title")}
            </h2>
          )} 

{/*           <h2 className="Serv-title">{t("team.title")}</h2>
 */}
        <div className="Eq-circle-pink"></div>
      
        
        <div className="Eq-circle-dash"></div>
      </div>
      <div className="Eq-container-p">
        <div className="Eq-container-p-box">
          <div className="box-img">
            <img src={Dana} alt="Dana Licht" />
            <div className="drop"></div>
          </div>
          <div className="box-text">
            <h5>Dana Licht</h5>
            <ul>
              <li>{t("dana.1")}</li>
              
              <a href="https://www.linkedin.com/in/dana-licht-b88b9a121/" target={'blank'}><IoLogoLinkedin className="linkLogo"/></a>
            </ul>
          </div>
        </div>

        <div className="Eq-container-p-box">
          <div className="box-img">
            <img src={Daiana} alt="Daiana Perez" />
            <div className="drop"></div>
          </div>
          <div className="box-text">
            <h5>Daiana Perez Mamakian</h5>
            <ul>
              <li>{t("daiana.1")}</li>
              <a href="https://www.linkedin.com/in/daiperezmamakian/" target={'blank'}><IoLogoLinkedin className="linkLogo"/></a>
            </ul>
          </div>
        </div>

      <div className="Eq-container-p-box">
          <div className="box-img">
            <img src={pablo} alt="Pablo Bichara" />
            <div className="drop"></div>
          </div>
          <div className="box-text">
            <h5>Pablo Bichara</h5>
            <ul>
              <li>{t("pablo.1")}</li>
              <a href="https://www.linkedin.com/in/pablobichara/" target={'blank'}><IoLogoLinkedin className="linkLogo"/></a>
            </ul>
          </div>
        </div>
      </div>

       

       

      {/*       <div className="trab-container">
        <img src={line7} alt="" className="line7" />

        <div className="trab-container-text">
          <h3>Trabajá con nosotros</h3>
        </div>

        <form ref={form} onSubmit={sendEmail}  className="form">
          <div style={{ width: "100%", display: "flex", flexFlow: "row wrap" }}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="email"
               value={inputCorreo}
            onChange={handleInputCorreo} 
              required
            />

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

            <div
              style={{ marginRight: "auto", padding: "1rem", display: "flex", flexDirection: "column" }}
            >
              <label className="cv">
                
                <span>
                  <BsPaperclip
                    style={{
                      width: "1.5rem",
                      color: "white",
                      height: "1.5rem",
                    }}
                  />
                </span>{" "}
                Adjuntar CV
              </label>
              <input className="attach" type="file" name="my_file" />
              {sentForm && ( <div style={{display:'flex', color:'white', alignItems:'center'}}>  <TiInputChecked style={{fontSize:'2rem'}}/> <p className="exito"> Formulario enviado con éxito</p></div>)

               }
                        
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default Equipo;
