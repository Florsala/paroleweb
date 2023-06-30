import React, { useEffect, useRef, useState } from "react";


import { GoChevronDown } from "react-icons/go";
import { useTranslation } from "react-i18next";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Number01 = () => {
  const { t, i18n } = useTranslation();

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
         {t("number.2.title")}
        </h5>

         <GoChevronDown
          className="chevron-down"
          onClick={handleClick}
           
        />
        {click && (
          <p className="number-section_text2">
                   {t("number.2.text")}

          </p>
        )} 
      </div>
    </div>
    </div>
  )
}

export default Number01