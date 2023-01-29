import React, { useState, useEffect } from "react";
import "../styles/Servicios.css";
import game from "../assets/game.svg";



import { FiChevronDown } from "react-icons/fi";


const Servicios3 = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    let handler = () => {
      setClick(false);
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <>
      

      

        <div className={click ? "Serv-box2 open" : "Serv-box2"}>
          <div className="circle-purple">
            <img style={{ width: "3.125rem" }} src={game} alt="read" />
          </div>

          <div className="Serv-box-content2">
            <h5 className="Serv-box-title">
            Game Developers Recruiting
            </h5>

            <div className={click ? "Serv-box-text2 open" : "Serv-box-text2"}>
              <ul>
                <li>
                Talento especializado en desarrollo de videojuegos, realidad virtual y metaverso.
                </li>
                <li>Profesionales de Desarrollo de Videojuegos Sr y SSr. </li>
              </ul>

              {click && (
                <ul>
                  <li> Estándares de trabajo de empresas de nivel como Etermax, Globant y Nimble Giant. </li>
                  <li>Procesos ágiles para incorporación inmediata.</li>
                 
                </ul>
              )}
            </div>

            <div onClick={handleClick}>
              {!click && <FiChevronDown className="chevron-down_svs2 open" />}
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Servicios3;
