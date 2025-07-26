import React, { useEffect, useState } from 'react'
import ChromaGrid from './Animation/Grid'
import axios from 'axios';

const BASE_URL = "https://portfolio-op45.onrender.com";

const Project = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/project`)
      .then(res => {
        console.log("API Response:", res.data); // ✅ LOG HERE

        if (res.data && Array.isArray(res.data)) {
          const updatedItems = res.data.map(project => {
            const imageSrc = project.projectimage && project.projectimage.length > 0
              ? `${BASE_URL}/Images/Projects/${project.projectimage[0]}`
              : '';
            console.log("Image URL:", imageSrc); // ✅ LOG HERE

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
      })
      .catch(error => {
        console.error("❌ Error fetching projects:", error); // ✅ ERROR LOG
      });
  }, []);
  
  return (
    <div style={{height:"max-content",minHeight:"100vh",width:"100vw",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h1>Projects</h1>
      {/* TEMPORARY fallback rendering for debugging */}
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} style={{ color: 'white', padding: '10px' }}>
            <img src={item.image} alt={item.title} style={{ width: '200px' }} />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <p>{item.handle}</p>
            <p>{item.url}</p>
          </div>
        ))
      ) : (
        <p style={{ color: 'white' }}>No projects found.</p>
      )}
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
