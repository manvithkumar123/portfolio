import { useState, useEffect } from 'react';
import axios from 'axios';
import ScrambledText from './animations/Scramble';
import "./about.css"
const About = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios.get("/api/about")
      .then(res => {
        if (res.data && res.data.information) {
          setInfo(res.data.information);
        } else {
          setInfo("No info available.");
        }
      })
      .catch(err => {
        console.error(err);
        setInfo("Error fetching content.");
      });
  }, []);

  return (
    <div className="about_page" style={{ backgroundColor: "black",height:"100vh",width:"100vw"}}>
      <div className="about_container" style={{height:'600px'}}>
      <h1>ABOUT ME</h1>
      <div className="information_container">
        <img src="/Aboutintro.svg" alt="" />
           <ScrambledText style={{color:"white", fontSize:"20px", fontWeight:"light",width:"100%",margin:"0",marginLeft:'5px',marginRight:"5px"}}
                     className="scrambled-text-demo"
                     radius={30}
                     duration={1.2}
                     speed={0.5}
                     scrambleChars="1010101010"
                   >
<p id='about_me'>
  <p>• Hello! I'm Medipelly Manvith Kumar, born on November 21, 2006.</p>
  <p>• My foundational education includes completing 10th grade at Sage International High School (CBSE) and Intermediate at Narayana College in Habsiguda.</p>
  <p>• I'm currently pursuing my B.Tech at Siddhartha Institute of Technology and Science.</p>
  <p>• I am a strong communicator, proficient in English, Hindi, and Telugu.</p>
  <p>• Beyond academics, my hobbies include watching movies and listening to music.</p>
  <p>• My journey into web development began unexpectedly. While initially exploring DSA with Python, a random YouTube video introduced me to the dynamic world of web development, specifically UI design and component building.</p>
  <p>• This immediately captivated my interest. Since then, I've immersed myself in HTML, CSS, and JavaScript, progressing to React and frameworks like Bootstrap</p>
  <p>• I'm also adept with Git and GitHub for version control. My backend skills include Node.js, Express.js, and MongoDB for database management, alongside API handling with Postman.</p>
  <p>• I typically use VS Code or Cursor as my IDE and am comfortable working on both Mac and Windows platforms.</p>
  </p>
                   </ScrambledText>
    </div>
      </div>
      
    </div>
  );
};

export default About;
