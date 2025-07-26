import React, { useState } from 'react'
import axios from 'axios'
import "./contact.css"
import ProfileCard from './Animations/ProfileCard'
  

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', message: '', contact: '' });
    } catch (error) {
      alert('Failed to send message.');
      console.log(error)
    }
  };

  return (
    <div className='mainpage'  style={{height:"100vh",width:"100vw",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className='contact_page' style={{display:"flex",height:"max-content",width:"90%",alignItems:"center",paddingLeft:"100px",marginTop:"30px"}}>
      <ProfileCard
  name="Manvith Kumar"
  title="Web Developer"
  handle="Manvith"
  status="Online"
  contactText="Contact Me"
  contactTextStyle={{ color: "black" }}
  avatarUrl="/profilephoto.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  onContactClick={() => window.location.href = "tel:7993625522"}
/>
    <div className="contact_section" style={{backgroundColor:"#232323",height:"70%",width:"400px",marginLeft:"100px",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"20px",padding:'10px'}}>
        <h2 style={{color:"white"}}>Contact Me</h2>
        <form className="input_container" style={{display:"flex",flexDirection:"column",marginTop:"70px",justifyContent:"center",alignItems:"center"}} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} />
        <textarea name="message" id="message" placeholder='Your Message' style={{height:"150px",marginTop:"10px",width:"300px"}} value={formData.message} onChange={handleChange}></textarea>
        <input type="text" name="contact" placeholder='Your Contact Detail' value={formData.contact} onChange={handleChange} />
        <button type="submit" style={{backgroundColor:"#d9d9d9",height:'40px',width:"200px",marginTop:"30px",border:'none',borderRadius:"10px"}}>Submit</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Contact
