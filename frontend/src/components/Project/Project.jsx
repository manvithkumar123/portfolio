import React, { useEffect, useState } from 'react'
import ChromaGrid from './Animation/Grid'
import axios from 'axios';


const Project = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/project")
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          const updatedItems = res.data.map(project => {
            const imageSrc = project.projectimage && project.projectimage.length > 0
              ? `http://localhost:5050/Images/Projects/${project.projectimage[0]}`
              : '';
            console.log("Image URL:", imageSrc);

            return {
              image: imageSrc,
              title: project.projectname,
              subtitle: project.projectsubtitle,
              handle: project.toolsuse,
              borderColor: project.gradientcolor,
              gradient: project.bordercolour,
              url: project.giturl
            };
          });
          setItems(updatedItems);
        }
      });
  }, []);
  
  return (
    <div style={{height:"max-content",minHeight:"100vh",width:"100vw",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h1>Projects</h1>
<div style={{ height: 'max-content', width:"",position: 'relative' }}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>
    </div>
  )
}

export default Project
