import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Landing />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
