import React, { useEffect } from "react";
import LineTitle from "../assets/LineTitle.svg";
import lineHome from "../assets/Line-home.svg";

import { HashLink as Link } from "react-router-hash-link";

import { FiChevronsDown } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import Numbers from "../components/Numbers";

import "../styles/circle-animation.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <section id="inicio">
        <div className="TitleContainer">
          <h1 className="Title">
            Soluciones para la gestión del
            <span id="Title-purple"> capital humano </span>
            <br />
            en empresas IT
          </h1>
          <div className="LineTitle">
            <img src={LineTitle} alt="linea" />
          </div>
        </div>

        <div className="TextContainer">
          <p>
            Innovamos en la evolución de las organizaciones hacia el alto
            rendimiento, generando líderes conscientes y conectándote con las
            personas talentosas que ayudan a hacer crecer tu empresa.
          </p>
        </div>

        <div className="btns-home">
          <div>
            <button className="btnHome-1">
              <Link to="/#nosotros" smooth>
                Conocenos
              </Link>
            </button>

            <button className="btnHome-2">
              <Link to="/#contacto" smooth>
                Contactanos
              </Link>
            </button>
          </div>
        </div>
        <div className="btnpurple-container">
          <Link to="/#inicio-2p" smooth>
            <FiChevronsDown className="btnpurple" />
          </Link>
        </div>

        <div className="circleAnim" >
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </section>

      <section id="inicio-2p">
        <div>
          <img className="lineHome" src={lineHome} alt="linea" />
        </div>

        <div className="inicio2">
          <div data-aos="fade-right" className="Box-1">
            <p>
              Con nuestro servicio de <span>IT Recruiting </span> resolvemos las
              necesidades de staffing de tu compañía logrando el match perfecto
              que necesitás para seguir creciendo.
            </p>
          </div>

          <div className="Box-img">
            <img
              className="circle-8"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt=""
            />
          </div>

          <div data-aos="fade-left" className="Box-2">
            <p>
              Con nuestros <span> Trainings</span> los colaboradores de tu
              empresa incorporan y elevan sus soft skills mejorando los vínculos
              personales y el desempeño profesional.
            </p>
          </div>
        </div>
      </section>

      <Numbers />
    </div>
  );
};

export default Home;
