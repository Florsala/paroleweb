import React, { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";


import { GoChevronDown } from "react-icons/go";

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
          {t("number.3.title")}
{/*         Conoce las tendencias y oportunidades en <br /> el mercado IT
 */}     
        </h5>

        <GoChevronDown
          className="chevron-down"
          
          onClick={handleClick}
        />
        {click && (
          <p className="number-section_text3">
          {t("number.3.text")}

          </p>
        )}
      </div>
    </div>
    
    </div>
  )
}

export default Number01