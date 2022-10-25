import React, { useEffect, useRef, useState } from "react";



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
        <div className="grid">
      <div className="elem-1" data-aos="fade-right">
        <img 
          className="circle-img1"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="hands"
        />
      </div>
      <div className="number"  >
        <p className="number-section"> 01.</p>
      </div>

      <div className="number-section_container" ref={mainRef}>
        <h5 className="number-section_title">
          Estamos enfocados en conectar con tus necesidades de staffing
        </h5>

        <GoChevronDown
          className="chevron-down"
          onClick={handleClick}
          
        />
        {click && (
          <p className="number-section_text">
            Nuestro servicio de IT Recruiting comprende tareas de sourcing
            adaptadas a los ritmos rápidos del sector. Co-creamos junto con
            cada cliente un proceso de búsqueda apuntado a lograr una
            conexión significativa con los valores, intereses y objetivos de
            la organización.
          </p>
        )}
      </div>
    </div>
    </div>
  )
}

export default Number01