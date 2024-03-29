import React, { useEffect, useRef, useState } from "react";


import dots from "../assets/dots.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Number01 from "./Number01";
import Number02 from "./Number02";
import Number03 from "./Number03";
import Number04 from "./Number04";








const Numbers = () => {

    
useEffect(() => {
    AOS.init({duration: 2000});
  }, [])




    const [click, setClick] = useState(false)

  


     
  
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
      
      <section
    style={{
      backgroundImage: `url(${dots})`,
      marginTop: "8rem",
      backgroundRepeat: "repeat",
      marginBottom: "6rem",
    }}
  >
    <Number01/>

    {/* segunda imagen */}

    <Number02/>
    
    {/* tercera imagen */}

    <Number03/>

     <Number04/> 


  </section>
  
  </div>
  )
}

export default Numbers