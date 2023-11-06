import React, { useState, useEffect } from "react";
import "../styles/Servicios.css";
import person from "../assets/bxs-group.svg";
import { useTranslation } from "react-i18next";

import dots from "../assets/dots.svg";
import {FiChevronDown} from "react-icons/fi";
import {IoMdPeople} from "react-icons/io";
import SliderC from "./SliderC";
import Servicios2 from "./Servicios2";

import line4 from "../assets/Line4.svg"
import Servicios3 from "./Servicios3";
import Servicios4 from "./Servicios4";



const Servicios = () => {

  const { t, i18n } = useTranslation();

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
          <h2 className="Serv-title">{t("services")}</h2>

          <div className="Serv-circle-pink"></div>
          <div className="Serv-circle-dash"></div>
        </div>

        <div className="Serv-box-container">
          <div  className={click ? "Serv-box open" : "Serv-box"}>
            <div className="circle-purple">
              <IoMdPeople className="circle-icon-people"/>
         </div>

            <div className=" Serv-box-content" >
              <h5 className="Serv-box-title">
              {t("services.title.1")}
              </h5>
              <div className={click ? "Serv-box-text open" : "Serv-box-text"}>
                <ul>
                  <li>{t("services.1.text.op1")}</li>
                  <li>{t("services.1.text.op2")}</li>
                  <li>{t("services.1.text.op3")}</li>
                </ul>
                

                  { click && (
                    <ul>
                    <li>{t("services.1.text.op4")}</li>
                  <li>{t("services.1.text.op5")}</li>
                  <li>{t("services.1.text.op6")}</li>
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
          <Servicios3/>
          <Servicios4/>


        </div>
      </section>

      <section>
        <img src={line4} alt="" className="line4"/>
        <div className="Serv-container">
          <h2 className="Serv-title">{t("companies.title")}</h2>

          <div className="Serv-circle-pink"></div>
        </div>

       <SliderC/>

      </section>
    </>
  );
};

export default Servicios;
