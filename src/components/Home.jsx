import React, { useEffect } from "react";
import LineTitle from "../assets/LineTitle.svg";
import lineHome from "../assets/Line-home.svg";

import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

import { FiChevronsDown } from "react-icons/fi";
import Numbers from "../components/Numbers";

import "../styles/circle-animation.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <section id="inicio">
        <div className="TitleContainer">
          {/*  <h1 className="Title">
           {t("head.title")}
          </h1> */}

          {i18n.language === "es" ? (
            <h1 className="Title">
              {t("head.title")}
              <span id="Title-purple"> {t("head.title.purple")} </span>
            </h1>
          ) : (
            <h1 className="Title">
              <span id="Title-purple"> {t("head.title.purple")} </span>
              {t("head.title")}
            </h1>
          )}

          <div className="LineTitle">
            <img src={LineTitle} alt="linea" />
          </div>
        </div>

        <div className="TextContainer">
          <p>{t("head.subtitle")}</p>
          <p>{t("head.subtitle2")}</p>

          <div className="btns-home">
            <div style={{ position: "relative", zIndex: "1" }}>
              <button className="btnHome-1">
                <Link to="/#nosotros" smooth>
                  {t("head.button")}
                </Link>
              </button>

              <button style={{ background: "#F44336" }} className="btnHome-2">
                <Link to="/#contacto" smooth>
                  {t("head.button2")}
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="btnpurple-container">
          <Link to="/#inicio-2p" smooth>
            <FiChevronsDown className="btnpurple" />
          </Link>
        </div>

        <div className="circleAnim">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </section>

      <section style={{ marginTop: "8rem" }} id="inicio-2p">
        <div>
          <img className="lineHome" src={lineHome} alt="linea" />
        </div>

        <div className="inicio2">
          <div data-aos="fade-right" className="Box-1">
            <p>{t("head.box1")}</p>
          </div>

          <div className="Box-img">
            <img
              className="circle-8"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt=""
            />
          </div>

          <div data-aos="fade-left" className="Box-2">
{i18n.language === "en" ? (
<p>{t("head.box2")}</p>
) : (
  <ul style={{listStyleType: "circle", padding: "1rem"}}>
    <li>{t("head.box2.a")}</li>
    <li>{t("head.box2.b")}</li>
    <li>{t("head.box2.c")}</li>
    <li>{t("head.box2.d")}</li>
  </ul>
)}

            
          </div>
        </div>
      </section>

      <Numbers />
    </div>
  );
};

export default Home;
