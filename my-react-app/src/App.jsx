import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects.jsx";
import Navbar from "./components/NavBar.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
