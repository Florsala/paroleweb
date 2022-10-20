import React, { useEffect, useRef, useState } from "react";


import dots from "../assets/dots.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Number01 from "./Number01";
import Number02 from "./Number02";
import Number03 from "./Number03";







const Numbers = () => {

    
useEffect(() => {
    AOS.init({duration: 2000});
  }, [])




    const [click, setClick] = useState(false)

    const handleClick = (e) => {

       setClick(!click);

       console.log(e.target);
    } 


    const [open, setOpen] = useState(false);
   
  
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
    <div><section
    style={{
      backgroundImage: `url(${dots})`,
      marginTop: "6rem",
      backgroundRepeat: "repeat",
      marginBottom: "6rem",
    }}
  >
    <Number01/>

    {/* segunda imagen */}

    <Number02/>
    
    {/* tercera imagen */}

    <Number03/>
  </section></div>
  )
}

export default Numbers