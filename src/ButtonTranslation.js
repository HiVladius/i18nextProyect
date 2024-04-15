import React from 'react'
import i18n from "i18next";


function ButtonTranslation() {

    
    const lngs = [
        { code: "en", label: "English" },
        { code: "fr", label: "French" },
      ];
    

  return (
    <>
    <div>
        {lngs.map((lng) => {
          return (
            <button
              key={lng.code}
              type="submit"
              onClick={() => {
                i18n.changeLanguage(lng.code);
              }}
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
                margin: "5px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {lng.label}
            </button>
          );
        })}
      </div>
    </>
  )
}

export default ButtonTranslation