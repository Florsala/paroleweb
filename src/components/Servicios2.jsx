import React, { useState, useEffect } from "react";
import "../styles/Servicios.css";
import read from "../assets/read.svg";


import { useTranslation } from "react-i18next";

import { FiChevronDown } from "react-icons/fi";


const Servicios = () => {

  const { t } = useTranslation();

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
{t("services.title.2")}            </h5>

            <div className={click ? "Serv-box-text2 open" : "Serv-box-text2"}>
              <ul>
                <li>
                  {t("services.2.text.op1")}

                </li>
                <li>{t("services.2.text.op2")}</li>
              </ul>

              {click && (
                <ul>
                  <li>{t("services.2.text.op3")}</li>
                  <li>{t("services.2.text.op4")}</li>
                  <li>{t("services.2.text.op5")}</li>
                  <li>{t("services.2.text.op6")}</li>
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
