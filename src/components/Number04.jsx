import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { GoChevronDown } from "react-icons/go";
import { HashLink as Link } from "react-router-hash-link";

import { FiChevronsDown } from "react-icons/fi";

import AOS from "aos";
import "aos/dist/aos.css";

const Number01 = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    setClick(!click);

    console.log(e.target);
  };

  let mainRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!mainRef.current.contains(e.target)) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div>
      <div className="grid2">
        <div className="elem-2" data-aos="fade-left">
          <img
            className="circle-img2"
            src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="working"
          />
        </div>

        <div className="number2">
          <p className="number-section2">04.</p>
        </div>

        <div className="number-section_container2" ref={mainRef}>
          <h5 className="number-section_title2">
{t("number.4.title")}          </h5>

          <GoChevronDown className="chevron-down" onClick={handleClick} />
          {click && (
           
            <p className="number-section_text2">
            {t("number.4.text")}  
            </p>
          )}
        </div>

       
      </div>

      <div className="btnpurple-container2">
          <Link to="/#servicios" smooth>
            <FiChevronsDown
              className="btnpurple2"
              style={{ position: "absolute" }}
            />
          </Link>
        </div>
    </div>
  );
};

export default Number01;
