import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Footer />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
