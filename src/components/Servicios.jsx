import React, { useState, useEffect } from "react";
import "../styles/Servicios.css";
import person from "../assets/bxs-group.svg";

import dots from "../assets/dots.svg";

import {FiChevronDown} from "react-icons/fi";
import SliderC from "./SliderC";
import Servicios2 from "./Servicios2";

import line4 from "../assets/Line4.svg"

const Servicios = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);




  useEffect(() => {
    let handler = () => {
      setClick(false);
    
    };
    document.addEventListener("mousedown", handler)
  })


  return (
    <>
      <section
        id="servicios"
        style={{
          backgroundImage: `url(${dots})`,

          backgroundRepeat: "repeat",
          /* height: "60rem", */
        }}
      >
        <div className="Serv-container">
          <h2 className="Serv-title">Servicios</h2>

          <div className="Serv-circle-pink"></div>
          <div className="Serv-circle-dash"></div>
        </div>

        <div className="Serv-box-container">
          <div  className={click ? "Serv-box open" : "Serv-box"}>
            <div className="circle-purple">
              <img style={{ width: "3.125rem" }} src={person} alt="person" />
            </div>

            <div className=" Serv-box-content" >
              <h5 className="Serv-box-title">
                IT recruiting y Gestión del Talento{" "}
              </h5>
              <div className={click ? "Serv-box-text open" : "Serv-box-text"}>
                <ul>
                  <li>Planificación Estratégica</li>
                  <li>Sourcing y Headhunting.</li>
                  <li>Entrevistas y elaboración de informes.</li>
                </ul>
                

                  { click && (
                    <ul>
                    <li>Engagement y fidelización del colaborador.</li>
                  <li>Onboarding.</li>
                  </ul>
                  
                  ) }
                  
                
              </div>
              <div onClick={handleClick} >
                {!click && 
                  <FiChevronDown className="chevron-down_svs open" />
                }

              </div>
          

              
            </div>
          </div>

          <Servicios2/>

        </div>
      </section>

      <section>
        <img src={line4} alt="" className="line4"/>
        <div className="Serv-container">
          <h2 className="Serv-title">Quiénes confían en nosotros</h2>

          <div className="Serv-circle-pink"></div>
        </div>

       <SliderC/>

      </section>
    </>
  );
};

export default Servicios;
