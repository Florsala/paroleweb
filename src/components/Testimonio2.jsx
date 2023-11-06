import React, { useEffect, useState } from "react";
import "../styles/Testimonios.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";


import "aos/dist/aos.css";

const Testimonios = () => {
  const { t } = useTranslation();

  const [readMore, setReadMore] = useState(false);

  

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
   
        <div className="testimonio-box" data-aos="fade-left">
        <h4 className="testimonio-title">{t("testimonio.2.title")}</h4>
        <q className="testimonio-text">
          {t("testimonio.2.text")}
          <a
            className="readMoreLink"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            { !readMore &&  <span className="moreLess_text">{t("seemore")} <AiOutlinePlusCircle className="moreLess"/> </span>}
          </a>

          {readMore &&
          <p>          {t("testimonio.2.2.text")}
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
        </q>      </div>

      
  );
};

export default Testimonios;
