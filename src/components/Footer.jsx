import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/LogoFooter.svg";

import Linkedin from "../assets/media/linkedin.svg";
import Facebook from "../assets/media/facebook.svg";
import Instagram from "../assets/media/instagram.svg";

import Envelope from "../assets/envelope.svg";
import lineFooter from "../assets/lineFooter.svg"


const Footer = () => {
  return (
    <>
    
    <div className="container-f">
      <div className="footer-container">
        <img className="logoFooter" src={Logo} alt="" />

        <div className="footer-icons">
          <a className="f-icon" href="https://www.linkedin.com/company/11372125/admin/" target={'blank'}><img src={Linkedin} alt="Linkedin" /></a>
          <a className="f-icon" href="https://www.facebook.com/Paroleconsultora" target={'blank'}> <img src={Facebook} alt="Facebook" /></a>
          <a className="f-icon" href="https://www.instagram.com/paroleconsultora/" target={'blank'}> <img src={Instagram} alt="Instagram" /></a>
         
         
        </div>
      </div>

      <img src={lineFooter} alt="" className="lineFooter"/>

      <div className="container-info">
        <div className="footer-text">
          <h4>
            <span>
              <img style={{width: "1.8rem"}} src={Envelope} alt="Mail" />
            </span>
            Contacto
          </h4>
          <div style={{fontSize:"1.1rem",    marginTop: '0.4rem'}}>
             <p>contacto@parole.com.ar</p>
          <p>Tel: +542214955544</p>
          <p>Tel: +54 261 6688109</p>
          </div>
          <div style={{fontSize:"1.2rem", marginTop:'1rem'}}>
            <p>La Plata - Buenos Aires - Argentina</p>
          </div>
         
        </div>
      </div>

      <div className="bottom-footer">
        <p style={{ color: "white", fontWeight: "400", fontFamily: "Nunito" }}>
          {" "}
          &copy;{new Date().getFullYear()} Parole Consultora - Todos los
          derechos reservados
        </p>
      </div>
    </div>
    </>
  );
};

export default Footer;
