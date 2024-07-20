import "./App.css";
import Navbar from "./components/Navbar/navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginSignUp from "./pages/LoginSignUp.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
