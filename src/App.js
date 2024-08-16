import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const loc = window.location.pathname
  return (
    <div>
   {loc !== "/" && loc !== "/home" && <Header/>}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
   {loc !== "/" && loc !== "/home" && <Footer/>}
  
    </div>
  );
}

export default App;
