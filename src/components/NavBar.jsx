import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/LOGO.svg";
import logo2 from "../assets/Logo-h.svg";
import Elipse from "../assets/Ellipse.png";

import Hamburger from "../assets/hamburger.svg";
import Xbar from "../assets/xbar.svg";
import { HashLink as Link } from "react-router-hash-link";
import {useTranslation} from 'react-i18next';

import LanguageSwitcher from "./LaguageSwitcher";

const NavBar = () => {

  const {t, i18n} = useTranslation();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 6.25) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <div className={color ? "navbar navbar-bcg" : "navbar"}>
        <div className="navbar-logos">
          <img className="logo-P" src={logo} alt="logo" />
          <img className="logo-parole" src={logo2} alt="parole" />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <img className="ico" src={Elipse} alt="" />
            <Link to="/#inicio" smooth onClick={() => setClick(false)}>
            {t("menu.home")}
            </Link>
          </li>
          {/*           <span className="active-menu"></span>
           */}{" "}
          <li className="nav-item">
            <img className="ico" src={Elipse} alt="" />
            <Link to="/#servicios" smooth onClick={() => setClick(false)}>
              
            {t("menu.services")}
            </Link>
          </li>
          <li className="nav-item">
            <img className="ico" src={Elipse} alt="" />
            <Link to="/#nosotros" smooth onClick={() => setClick(false)}>
              NOSOTROS
            </Link>
          </li>
          <li className="nav-item">
            <img className="ico" src={Elipse} alt="" />
            <Link to="/#contacto" smooth onClick={() => setClick(false)}>
              CONTACTO
            </Link>
          </li>
          <li className="selectLi">
            <LanguageSwitcher />
          </li>
        </ul>

        <div className="hamburger" ref={menuRef} onClick={handleClick}>
          {click ? (
            <img src={Xbar} alt="X" />
          ) : (
            <img src={Hamburger} alt="menu" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
