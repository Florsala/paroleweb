import React from 'react'

import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';


const LaguageSwitcher = () => {

  const {i18n} = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
        }

  return (
    <>

<select className='selectLg' onChange={changeLanguage}>
    <option value="es">es </option>
    <option value="en">en</option>
</select>

    </>
  )
}

export default LaguageSwitcher