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
     <div className="grid2">
      <div className="elem-2" data-aos="fade-left">
        <img
          className="circle-img2"
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="meeting"
        />
      </div>

      <div className="number2">
        <p className="number-section2">02.</p>
      </div>

      <div className="number-section_container2"ref={mainRef} >
        <h5 className="number-section_title2">
          Somos expertos en comunicación y aplicación de Soft Skills{" "}
        </h5>

         <GoChevronDown
          className="chevron-down"
          onClick={handleClick}
           
        />
        {click && (
          <p className="number-section_text2">
            Trabajamos trainings dinámicos y participativos para optimizar
            los vínculos dentro de las compañías y ofrecer soporte a su
            cultura interna. Al trabajar el desarrollo de soft skills con su
            staff, las empresas obtienen relaciones interpersonales fuertes,
            reducción del índice de rotación, mejora del índice de calidad y
            maximización del potencial de los colaboradores.
          </p>
        )} 
      </div>
    </div>
    </div>
  )
}

export default Number01