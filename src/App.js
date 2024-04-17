import "./App.css";
import { LanguageSelector } from "./components/LanguageSelector";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  
  return (
    <>
      <div className="App">
        <LanguageSelector />
        <Content />
        <Sidebar />

      </div>
      
    </>
  );
}

export default App;
