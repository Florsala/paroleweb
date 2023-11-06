import React, { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga';

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import Equipo from "./components/Equipo";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
//import Whatsapp from "./components/Whatsapp";
import ScrollToTop from "./components/ScrollToTop";
import TagManager from 'react-gtm-module';
import './config/i18next-config';
import Testimonios from "./components/Testimonios";



const tagManagerArgs = {
  gtmId: 'GTM-5NHVXQX',
  dataLayer: {
     event: 'pageview',
     path: "/inicio/"
  }
}
 

 
TagManager.initialize(tagManagerArgs)




function App() {

useEffect(() => {
  ReactGA.initialize('UA-157340916-1');

  ReactGA.pageview(window.location.pathname + window.location.search);


}, [])


  return (
    <BrowserRouter>
    
    <div className="App">
      <NavBar />

      <Home />
      <Servicios />
      <Testimonios/>
      <Equipo />
      <Contacto />
     {/*  <Whatsapp/> */}
      <ScrollToTop/>

      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
