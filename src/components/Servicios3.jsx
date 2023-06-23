import React, { useState, useEffect } from "react";
import "../styles/Servicios.css";



import { FiChevronDown } from "react-icons/fi";
import { FaPeopleArrows } from  'react-icons/fa';


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
            <FaPeopleArrows className="circle-icon-people"/>
{/*             <img style={{ width: "3.125rem" }} src={game} alt="read" />
 */}          </div>

          <div className="Serv-box-content2">
            <h5 className="Serv-box-title">
            Armamos tu equipo IT en Argentina
            </h5>

            <div className={click ? "Serv-box-text2 open" : "Serv-box-text2"}>
              <ul>
                <li>
                Adquisición estratégica de talento: Entendemos las necesidades y preferencias específicas de las empresas europeas y estadounidenses. 
                </li>
              </ul>

              {click && (
                <ul>
                                  <li>Identificación de candidatos de primer nivel en Argentina. </li>

                  <li> Te brindamos información valiosa, tendencias y análisis basado en datos para respaldar tu proceso de toma de decisiones.
</li>
                 
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
