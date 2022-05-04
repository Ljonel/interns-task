import "./App.css";
import EditIntern from "./components/EditIntern";
import InternList from "./components/InternList";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/icons/logo.svg";
import { ThemeProvider } from "styled-components";
import { palette } from "./styles/_variables";

function App() {
  return (
    <ThemeProvider theme={palette}>
      <div className="App">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <Routes>
          <Route path="/interns/:id" exact element={<EditIntern />} />
          <Route path="/" element={<InternList />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
