import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimatedList from './animations/Animationlist';
import './skills.css'

const Skilldetail = () => {
  const [items, setItems] = useState([]);
  const [description, setdescription] = useState("");
  const [logo, setlogo] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("/api/skills")
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          setItems(res.data.map(skill => skill.skillname));
          setSkills(res.data);
        } else {
          setItems(["No skills available"]);
          setdescription("No descriptions found");
        }
      })
      .catch(err => {
        console.error(err);
        setItems(["Error fetching skills"]);
        setdescription("Try again later");
      });
  }, []);


  return (
    <div  id='skillpage' style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      display: "flex",
      alignItems: 'center',
      justifyContent: "center"
    }}>
      <AnimatedList
        items={items}
        onItemSelect={(item, index) => {
          const selectedSkill = skills[index];
          setdescription(selectedSkill ? selectedSkill.skillDescription : "No description available");
          setlogo(selectedSkill ? selectedSkill.skilllogo : "No logo available");
        }}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={false}
      />
       
       <div className="description" style={{backgroundColor:"#232323",height:"500px",width:"400px",color:"white",borderRadius:"10px"}}>
       <img src={logo} alt=" " style={{height:'40px',width:"40px",border:"none"}} /> 
        <p style={{marginTop:"20px",marginLeft:"30px"}}>{description}</p>
      </div>
    </div>

  );
}

export default Skilldetail;