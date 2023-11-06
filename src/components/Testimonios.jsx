import React, { useEffect, useState } from "react";
import "../styles/Testimonios.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import Testimonio2 from "../components/Testimonio2";

import "aos/dist/aos.css";

const Testimonios = () => {
  const { t } = useTranslation();

  const [readMore, setReadMore] = useState(false);

  

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="testimonio-grid">
      <div className="testimonio-box" data-aos="fade-right">
        <h4 className="testimonio-title">{t("testimonio.title")}</h4>
        <q className="testimonio-text">{t("testimonio.text")}</q>
      </div>

      <div className="testimonio-box" data-aos="fade-left">
        <h4 className="testimonio-title">{t("testimonio.4.title")}</h4>
        <q className="testimonio-text">{t("testimonio.4.text")}</q>
      </div>

      <div className="testimonio-box" data-aos="fade-right">
        <h4 className="testimonio-title">{t("testimonio.3.title")}</h4>
        <q className="testimonio-text">
          {t("testimonio.3.text")}
          <a
            className="readMoreLink"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            { !readMore &&  <span className="moreLess_text">{t("seemore")} <AiOutlinePlusCircle className="moreLess"/> </span>  }
          </a>

          {readMore &&
          <p>          {t("testimonio.3.2.text")}
           <a
            className="readMoreLink"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            <span className="moreLess_text">{t("seeless")}</span> <AiOutlineMinusCircle className="moreLess"/> 
          </a>
          </p>
        }
        </q>

       
      </div>

      
      <Testimonio2/>

      <div className="testimonio-box" data-aos="fade-right">
        <h4 className="testimonio-title">{t("testimonio.5.title")}</h4>
        <q className="testimonio-text">{t("testimonio.5.text")}</q>
      </div>
    </div>
  );
};

export default Testimonios;
