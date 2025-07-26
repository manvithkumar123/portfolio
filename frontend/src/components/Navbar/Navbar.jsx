import React, { useState } from 'react'
import "./navbar.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
    <div className="navbar_desktop">
        <div className="line">
        <div className="name_container" style={{width:"270px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                <h3 style={{position:"absolute",left:'50px',bottom:"0",color:"white"}}>HOME</h3>
            <div className="white_boxes" >
                <a href="/">
                <div className="blue_boxes"></div>
                </a>
            </div>
            </div>
            <div className="name_container" style={{width:"270px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                <h3 style={{position:"absolute",left:'10px',bottom:"0",color:"white"}}>ABOUT ME</h3>
            <div className="white_boxes" >
                <a href="/about">
                <div className="blue_boxes"></div>
                </a>
            </div>
            </div>
            <div className="name_container" style={{width:"270px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                <h3 style={{position:"absolute",left:'10px',bottom:"0",color:"white"}}>MY SKILLS</h3>
            <div className="white_boxes">
                <a href="/skills">
                <div className="blue_boxes"></div>
                </a>
            </div>
            </div>
            <div className="name_container" style={{width:"270px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                <h3 style={{position:"absolute",left:'10px',bottom:"0",color:"white"}}>PROJECTS</h3>
            <div className="white_boxes">
            <a href="/projects">
                <div className="blue_boxes"></div>
                </a>
            </div>
            </div>
            <div className="name_container" style={{width:"310px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                <h3 style={{position:"absolute",left:'10px',bottom:"0",color:"white"}}>CERTIFICATE</h3>
            <div className="white_boxes">
            <a href="/certificates">
                <div className="blue_boxes"></div>
                </a>
            </div>
            </div>
            <div className="name_container" style={{width:"270px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                <h3 style={{position:"absolute",left:'20px',bottom:"0",color:"white"}}>CONNECT</h3>
            <div className="white_boxes">
            <a href="/Connect">
                <div className="blue_boxes"></div>
                </a>
            </div>
            </div>
            <div className="name_container" style={{width:"270px",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
                <h3 style={{position:"absolute",left:'20px',bottom:"0",color:"white"}}>CONTACT</h3>
            <div className="white_boxes">
            <a href="/Contact">
                <div className="blue_boxes"></div>
                </a>
            </div>
            </div>
        </div>      
    </div>
    <div className="navbar_phone" style={{ height: "max-content", width: "100vw", backgroundColor: "black", padding: "10px", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "white" }}>
        <h3 style={{ margin: 0 }}>Portfolio</h3>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: "none", border: "none", color: "white", fontSize: "24px",marginLeft:"auto",width:"40px" }}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "10px", color: "white" }}>
          <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
          <li><a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
          <li><a href="/certificates" style={{ color: "white", textDecoration: "none" }}>Certificates</a></li>
          <li><a href="/skills" style={{ color: "white", textDecoration: "none" }}>Skills</a></li>
          <li><a href="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</a></li>
          <li><a href="/Connect" style={{ color: "white", textDecoration: "none" }}>Connect</a></li>
          <li><a href="/Contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
        </ul>
      )}
    </div>
    </div>

  )
}

export default Navbar
