import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./App.css";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer
        style={{
          textAlign: "center",
          marginTop: "-1rem",
          paddingBottom: "1rem",
        }}
      >
        {" "}
        {"Copyright © Fangfang "}
        {new Date().getFullYear()}
      </footer>
    </Router>
  );
}

export default App;
