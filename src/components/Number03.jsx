import React, { useEffect, useRef, useState } from "react";


import { HashLink as Link } from "react-router-hash-link";

import { FiChevronsDown } from "react-icons/fi"; 
import { GoChevronDown } from "react-icons/go";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Number01 = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
      }, [])
    
    
    
    
        const [click, setClick] = useState(false)
    
        const handleClick = (e) => {
    
           setClick(!click);
    
           console.log(e.target);
        } 
    
    
       
      
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
        <div className="grid3">
      <div className="elem-3" data-aos="fade-right">
        <img
          className="circle-img3"
          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="woman"
        />
      </div>

      <div className="number3">
        <p className="number-section3">03.</p>
      </div>
      <div className="number-section_container3" ref={mainRef}>
        <h5 className="number-section_title3">
          Nos especializamos en el <br /> Sector IT, con servicios 100%
          remotos{" "}
        </h5>

        <GoChevronDown
          className="chevron-down"
          
          onClick={handleClick}
        />
        {click && (
          <p className="number-section_text3">
            Trabajamos en modalidad online desde que Parole nació en 2017
            porque entendimos la necesidad de conexión remota que ya había
            en aquel momento. Decidimos seguir por esa línea convirtiéndonos
            en expertos en el sector IT que fue el que más rápido se adaptó
            a la tendencia y se subió a la ola de transformación digital.
            Hoy desde la virtualidad llegamos a clientes de todo el mundo
            con nuestros servicios de Recruiting y Soft Skills Training.
          </p>
        )}
      </div>
    </div>
    <div
      className="btnpurple-container2"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Link to="/#servicios" smooth>
        <FiChevronsDown
          className="btnpurple2"
          style={{ position: "absolute" }}
        />
      </Link>
    </div>
    </div>
  )
}

export default Number01