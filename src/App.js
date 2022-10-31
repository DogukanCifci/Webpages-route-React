import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import HTML from "./pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Logo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<Css />} />
          <Route path="/logo" element={<Logo />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
