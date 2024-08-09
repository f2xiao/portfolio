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
    </Router>
  );
}

export default App;
