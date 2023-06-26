import React from 'react'
import '../styles/LanguageSwitcher.css';
import sp from '../assets/spain.svg';

const LaguageSwitcher = () => {
  return (
    <div>

<select className='selectLg'>
    <option value="es">es </option>
    <option value="en">en</option>
</select>

    </div>
  )
}

export default LaguageSwitcher