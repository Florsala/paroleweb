import React, { useState, useEffect } from "react";
import "../styles/Servicios.css";

import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { MdPersonSearch } from "react-icons/md";

const Servicios4 = () => {
  const { t, i18n } = useTranslation();

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
      <div className={click ? "Serv-box4 open" : "Serv-box2"}>
        <div className="circle-purple">
          <MdPersonSearch className="circle-icon-people" />
          {/*             <img style={{ width: "3.125rem" }} src={game} alt="read" />
           */}{" "}
        </div>

        <div className="Serv-box-content2">
          <h5 className="Serv-box-title">{t("services.title.4")}</h5>

          <div className={click ? "Serv-box-text2 open" : "Serv-box-text2"}>
            <ul>
              <li>{t("services.4.text.op1")}</li>
            </ul>

            {click && (
              <ul>
                <li>{t("services.4.text.op2")} </li>
                <li>
                  {t( "services.4.text.op3")}
                </li>

                <li>
                  {t( "services.4.text.op4")}
                  
                </li>

                <li>
                  {t( "services.4.text.op5")}
                  
                </li>
                <li>
                  {t( "services.4.text.op6")}
                  
                </li>

               {/*  {i18n.language === "es" && (<li> {t("services.4.text.op5")}</li>) } */}
                
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

export default Servicios4;
