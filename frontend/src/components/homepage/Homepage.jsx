import React, { useState, useEffect, useRef } from 'react'
import "./homepage.css"
import { useNavigate } from 'react-router-dom';

  





const Homepage = () => {
  const [happyemoji,sethappyemoiji] = useState(false);
  const [sademoji,setsademoji] = useState(false);
  const [showCircle2, setShowCircle2] = useState(true);
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(1);
  const navigate = useNavigate();

  const videoRef = useRef(null);

  useEffect(() => {
    if (loading && percentage < 100) {
      const timer = setTimeout(() => {
        setPercentage(prev => prev + 1);
      }, 20);
      return () => clearTimeout(timer);
    } else if (percentage >= 100) {
      setLoading(false);
    }
  }, [loading, percentage]);

  useEffect(() => {
    if (happyemoji && videoRef.current) {
      const timeout = setTimeout(() => {
        videoRef.current.pause();
        navigate("/about");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [happyemoji]);

  return (
    <div style={{width:'100vw', height:'100vh', position: 'relative', overflow: 'hidden'}}>
      <div className="loadingscreen" style={{width:'100vw', height:'100vh',backgroundColor:'black', display:'flex', flexDirection:"column",justifyContent:'center', alignItems:'center', overflow:'hidden', position: 'absolute', top: 0, left: 0, transition: 'transform 0.5s ease', transform: loading ? 'translateY(0)' : 'translateY(-100%)', zIndex: 2}}>
        <div style={{fontSize: '5rem', color: 'white'}}>
          {percentage}%
        </div>
        <h1 style={{color:'white'}}>Welcome To My Portfolio</h1>
      </div>

      <div className="homepage-wrapper" style={{width:'100vw', height:'100vh', backgroundColor:'black',paddingTop:'50px'}}>

        <div className="homepage-content" style={{width:'100vw' , height:'100vh',backgroundColor:'black',display:"flex",alignItems:'center',flexDirection:'column'}}>
          {showCircle2 && <div className="circle2" style={{height:"270px",width:"270px",backgroundColor:"white",marginTop:'70px',marginLeft:"10px",borderRadius:"50%"}}></div>}

          {happyemoji ?
                      <div className="circle1" style={{height:"270px",width:"270px",backgroundColor:"",marginTop:'70px',borderRadius:"50%",display:"flex"}}>
                      <video
                        ref={videoRef}
                        src="/avatar.mov"
                        autoPlay
                        muted
                        style={{height:"300px",width:"300px"}}
                      ></video>
                    </div>
                :
                null
                }
            
            {sademoji ?
                      <div className="circle1" style={{height:"270px",width:"270px",backgroundColor:"",marginTop:'70px',borderRadius:"50%",display:"flex"}}>
                    </div>
                :null
                }
            
          <div className="container" style={{display:"flex",width:"max-content",height:"300px",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <h2 style={{color:'white',textAlign:"center"}} id='knowtext'>DO YOU WANT TO KNOW ABOUT ME</h2>
          <div className="options_container" style={{marginTop:'15px'}}>
            <button>No, but you can't escape</button>
            <button onClick={()=>{sethappyemoiji(true); setsademoji(false); setShowCircle2(false)}}>Yes, let's go ahead</button>
            </div>
            <a href="/resume.png" download style={{ color: "white", textDecoration: "none", padding: "10px", borderRadius: "5px" }}>
              DOWNLOAD RESUME
            </a>
          </div>

          
        </div>
        
      </div>
    </div>
  )
}

export default Homepage
