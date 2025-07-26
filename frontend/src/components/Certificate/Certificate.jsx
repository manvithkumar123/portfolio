import React, { useEffect, useState } from 'react'
import "./certificate.css"
import TiltedCard from './Animation/CircularGallery'
import axios from 'axios';

const BASE_URL = "https://portfolio-op45.onrender.com";
const Certificate = () => {
  const [items,setitems]= useState("")
   const [certificates,setcertificates]= useState([])
  const [cards, setCards] = useState([
  ]);

  // Function to add a new card from outside
  const addCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };
  useEffect(() => {
    axios.get(`${BASE_URL}/api/certificates`)
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          setitems(res.data.map(skill => skill.skillname));
          setcertificates(res.data);
        }
      });
  }, []);

  return (
    <div style={{ width: '100vw', height: 'max-content',minHeight:"100vh", overflow: 'auto', backgroundColor: 'black', display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
      <h1 style={{marginTop:"50px",textDecoration:"underline"}}>certificates</h1>
      <div className="certificate_container" style={{width:"90%",height:"max-content",display:"flex",flexWrap:"wrap",alignItems:'center',justifyContent:"center",marginTop:"50px"}}>
      {certificates && certificates.map((card, index) =>
        card.imageurl.map((img, i) => (
          <TiltedCard
            key={`${index}-${i}`}
            imageSrc={`${BASE_URL}/Images/Certificates/${img}`}
            captionText={card.hovertext[i] || ""}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            objectFit="contain"
            overlayContent={
              <div>
                <p className="tilted-card-demo-text" style={{ marginTop: "20px", marginLeft: "10px" }}>
                  {card.captiontext}
                </p>
                <a href={`/Images/Certificates/${img}`} download target="_blank" rel="noopener noreferrer">
                  <button style={{ marginTop: "10px", marginLeft: "10px", padding: "5px 10px", cursor: "pointer",position:"absolute",top:"250px" ,height:'30px',width:"30px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"transparent",border:"none"}}>
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </a>
              </div>
            }
          />
        ))
      )}
    </div>
    </div>
  )
}

export default Certificate;