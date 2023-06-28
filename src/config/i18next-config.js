import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import enTranslation from "../locales/en.json";
import esTranslation from "../locales/es.json";

i18n

.use(LanguageDetector)
.use(initReactI18next)
.init({
     lng: 'es',
     fallbackLng: 'es',
    resources: {
        en: { translation: enTranslation },

        es: { translation: esTranslation },
    
    }
     
});

