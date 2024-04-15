import logo from "./logo.svg";
import "./App.css";
import "./i18n"; // Debe importarse para que la aplicación pueda usar la traducción
import { useTranslation } from "react-i18next";
import ButtonTranslation from "./ButtonTranslation";

function App() {
  const { t } = useTranslation();

  
 

  //#regin Cambiar
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <h4>{t("Welcome.text")}</h4>
        

        </div>
        <ButtonTranslation />
      </header>
      
    </>
  );
}

export default App;
