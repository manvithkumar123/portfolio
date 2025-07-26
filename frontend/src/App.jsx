import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom"; 
import Homepage from "./components/homepage/Homepage.jsx";
import About from "./components/About page/About.jsx";
import Skills from "./components/Skills page/Skills.jsx";
import Skilldetails from "./components/Skills page/Skilldetail.jsx";
import Certificate from "./components/Certificate/Certificate.jsx";
import Project from "./components/Project/Project.jsx";
import Connect from "./components/connect/Connect.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />}  />
        <Route path="/skills" element={<Skills />} />
        <Route path="/skills/detail" element={<Skilldetails/>} />
        <Route path="/certificates" element={<Certificate/>} />
        <Route path="/projects" element={<Project/>}/>
        <Route path="/Connect" element={<Connect/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;