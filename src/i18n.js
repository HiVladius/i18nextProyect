import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          Welcome: {
            text: "Esto si funciona",
            text2:
              "Welcome to this React Internationalization App my friend! 2",
              text3:
              "the best aplication in the world!"
          },
        },
      },
      fr: {
        translation: {
          Welcome: {
            text: "Bienvenue sur cette application d'internationalisation React",
            text2:
              "Bienvenue sur cette application d'internationalisation React mon ami! 2",
                text3:
                "la meilleure application au monde !"
          },
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
