import React, { useState, useEffect } from "react";
import "../styles/Servicios.css";
import read from "../assets/read.svg";



import { FiChevronDown } from "react-icons/fi";


const Servicios = () => {
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
            <img style={{ width: "3.125rem" }} src={read} alt="read" />
          </div>

          <div className="Serv-box-content2">
            <h5 className="Serv-box-title">
              Soft Skills Trainings para la Industria IT
            </h5>

            <div className={click ? "Serv-box-text2 open" : "Serv-box-text2"}>
              <ul>
                <li>
                  Soft Skills para el desarrollo profesional y la gestión de
                  talento.
                </li>
                <li>Diseño y ejecución de soluciones de aprendizaje.</li>
              </ul>

              {click && (
                <ul>
                  <li>Entrenamiento y formación continua del personal.</li>
                  <li>Desarrollo de liderazgo accountable y empowerment.</li>
                  <li>Desarrollo de habilidades de management.</li>
                  <li>Creación de equipos de alto rendimiento.</li>
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

export default Servicios;
