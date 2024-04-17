import {useState} from 'react'
import i18n from '../components/i18next/i18n'



export const LanguageSelector = () => {

    const [selectLanguage, setSelectLanguage] = useState(i18n.language)
    
    const chooseLanguage = (e) => {
        e.preventDefault()
        i18n.changeLanguage(e.target.value)
        setSelectLanguage(e.target.value)
    }

  return (
    <div>
      <select value={selectLanguage} onChange={chooseLanguage}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  )
}

