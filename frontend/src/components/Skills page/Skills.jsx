import React,{useState} from 'react'
import "./skills.css"
import Folder from './animations/Folder'
import { useNavigate } from 'react-router-dom'; // ✅ FIXED


const Skills = () => {
    const[options,setoptions]=useState(true);
    const[folder,setfolder]=useState(false);
    const[detailway,setdetailway]=useState(false);
    const[finder,setfinder]=useState(false);
    const[frontend,setFrontend]=useState(true);
    const navigate = useNavigate();

  return (
    <div className='skillpage1' style={{height:'100vh',width:'100vw',backgroundColor:'black',display:"flex",alignItems:'center'}}>
    {options?
    <div  style={{height:'100vh',width:'100vw',display:"flex",alignItems:'center',justifyContent:"center"}}>
    <div className="container1" style={{display:"flex",width:"max-content",height:"300px",flexDirection:"column",}}>
    <h2 style={{color:'white',textAlign:"center"}} id='knowtext'>DO YOU WANT TO KNOW ABOUT MY SKILLS</h2>
    <div className="options_container1" style={{marginTop:'15px'}}>
      <button id='folderbtn'  onClick={()=>{setoptions(false),setfolder(true)}}>Yes Show in breif <br /> (Folder way)</button>
      <button  onClick={()=>navigate("/skills/detail")}> Yes Show in detail <br /> (Information way)</button>
      </div>
    </div> 
    </div>: null}
    {folder ?
    <div style={{display:"flex"}}>
    <div className="finder-text" style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
    <img src="/finder.png" alt="" style={{height:'70px',width:"70px",marginLeft:'70px',cursor:"pointer"}} onClick={()=>setfinder(true)}/>
    <h3 style={{color:"white",marginLeft:"70px",marginTop:"5px"}}>Finder</h3>
    </div>
    {finder ?
    <div className="finder" style={{height:"480px",width:"850px",backgroundColor:"#232323",marginLeft:"100px",borderRadius:"10px",display:"flex",}}>
        <div className="finder_sidebar" style={{height:"100%",width:"130px",backgroundColor:"#2c2c2c",display:'flex',flexDirection:"coloum",paddingTop:'10px'}}>
            <div className="operators" style={{display:"flex",height:"15px",width:"70px",paddingTop:'2px',paddingBottom:"2px",marginLeft:"10px"}}>
                <div className="options" style={{backgroundColor:"red",fontSize:"8px",cursor:"pointer"}} onClick={()=>{setfinder(false)}}>X</div>
                <div className="options"  style={{backgroundColor:"yellow",fontSize:"10px"}}>~</div>
                <div className="options"  style={{backgroundColor:"lightgreen",fontSize:"7px",fontWeight:"bolder"}}>「」</div>
            </div>
            <div className="files" style={{paddingTop:"70px",display:"flex",flexDirection:"column",paddingLeft:"10px"}}>
                <p style={{opacity:"50%",color:"white",fontSize:"13px"}}>Favourites</p>
                <div className="section"  style={{display:"flex",marginTop:'7px',width:'100px'}}  onClick={()=>setFrontend(false)} >
                <div className="homeicon" style={{height:"20px"}}><svg xmlns="http://www.w3.org/2000/svg" height="19px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></div>
                <p style={{marginTop:"2px",color:"white",fontSize:"15px"}}>Home</p>
                </div>
                <p style={{opacity:"50%",color:"white",marginTop:"20px",fontSize:"13px"}}>My Skills</p>
                <div className="section" style={{display:"flex",marginTop:'7px'}} onClick={()=>setFrontend(true)}>
                <div className="homeicon" style={{height:"20px"}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#5985E1"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/></svg></div>
                <p style={{marginTop:"3px",color:"white",fontSize:"15px",marginLeft:'5px'}}>Skills</p>
                </div>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className="finder_nav" style={{width:"750px",height:"50px",display:'flex'}}>
          <h3 style={{color:"white",marginTop:'15px',marginLeft:"15px"}}>Skills</h3>
          <img src="/findermenu.png" style={{height:'100%',justifySelf:'flex-end',alignSelf:'flex-end',marginLeft:"auto",marginRight:'50px'}} alt="" /> 
        </div>
        {frontend ?
        <div className="finderbody"style={{height:"100%",width:"95%",display:"flex",paddingTop:"50px",paddingLeft:"30px",}}>
        <div style={{ height: '30px', position: 'relative', marginRight: '30px' }}>
  <Folder size={0.8} color="#5227FF" className="custom-folder" items={[ <i style={{color:"red",fontSize:"50px"}} className='fa-brands fa-html5'></i>, <i className="fa-brands fa-css3-alt" style={{color:"blue",fontSize:"50px"}}></i>, <i className="fa-brands fa-js" style={{color:"yellowgreen",fontSize:"50px"}}></i>]} />
   </div>
   <div style={{ height: '30px', position: 'relative', marginRight: '30px' }}>
  <Folder size={0.8} color="#5227FF" className="custom-folder" items={[<i style={{color:"blue",fontSize:"50px"}} className="fa-brands fa-react"></i>,<i className="fa-brands fa-figma" style={{color:"violet",fontSize:"50px"}}></i> ,<i style={{color:"gray",fontSize:"50px"}} className="fa-brands fa-bootstrap"></i>]} />
   </div>
   <div style={{ height: '30px', position: 'relative', marginRight: '30px' }}>
  <Folder size={0.8} color="#5227FF" className="custom-folder" items={[<i className="fa-brands fa-github" style={{color:"black",fontSize:"50px"}}></i>, <i className="fa-brands fa-python"  style={{color:"blue",fontSize:"50px"}}></i>,<i className="fa-brands fa-git" style={{color:"red",fontSize:"50px"}}></i>]} />
   </div>
   <div style={{ height: '30px', position: 'relative', marginRight: '30px' }}>
  <Folder size={0.8} color="#5227FF" className="custom-folder" items={[ <i style={{color:"green",fontSize:"50px"}} className='fa-brands fa-node-js'></i>, <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#EA3323"><path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z"/></svg>,<svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#48752C"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/></svg>]} />
   </div>
        </div>:
        <div className="finderbody" style={{height:"100%",width:"100%",display:"flex",paddingTop:"50px",paddingLeft:"50px",marginLeft:"0px"}}>
          <h1>heol</h1>
          </div>
        }
        </div>
    </div>
    : null}
    </div>:null}
    </div>
  )
}

export default Skills
