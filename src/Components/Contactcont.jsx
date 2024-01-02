import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Spinnerload from "./Spinnerload";
import { message } from "antd";
const Contactcont = () => {
  const [spinload, setspinload] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [details, setdetails] = useState({
    name: "",
    email: "",
    message:""
  })
  const handleChange = (value, name)=>{
    setdetails(()=>{
      return {...details,[name]:value}
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your actual Email.js Service ID, Template ID, and User ID
    const serviceId = "service_ggmk7rm";
    const templateId = "template_eo2o20b";
    const publicKey = "OEQyLCUNcuPZ_XvH8";
    
    setspinload(true)
    // Send email using Email.js
    emailjs.send(serviceId, templateId, details, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        messageApi.open({
          type: 'success',
          content: 'Mail sent successfully',
        });
        setTimeout(()=>{
          setspinload(false)
        }, 1500)
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        messageApi.open({
          type: 'error',
          content: 'Error sending mail',
        });
      });
  };
  return (
    <div className="contactcont">
    {contextHolder}
      <h1>Contact</h1>
      <div className="contactpage">
        <div className="contactbox">
          <div className="contactcont_1">
            <form className="contactform" netlify >
              <div>
                <label for="name">Name </label>
                <br />
                <input  value={details.name} onChange={(e)=>handleChange(e.target.value,"name")} type="text" id="name" name="name" required />
                <br />
              </div>
              <div>
                <label for="email">Email </label>
                <br />
                <input  value={details.email} onChange={(e=>handleChange(e.target.value,"email"))} type="email" id="email" name="email" />
                <br />
              </div>
              <div>
                <label for="message">Message </label>
                <br></br>
                <br></br>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  cols="40"
                  value={details.message}
                     onChange={(e=>handleChange(e.target.value,"message"))}
                ></textarea>
                <br />
              </div>
            </form>
          </div>
          
          <button type="submit" onClick={handleSubmit}>Send</button>
        </div>

        <div className="myinfo">
          <div>
            <img className="pfp" src="./Assets/IMG_5398 (2).JPG"></img>
          </div>
          <p>
            Hire me for my unwavering dedication to crafting exceptional user
            experiences through innovative web development and design.
          </p>
          <div className="myinfologo">
         
             
              <Link to="https://www.instagram.com/_satyartha_/"><img id="mylogo" src="./Assets/instagram-logo.png"></img></Link>
         
           
              <Link to="https://www.linkedin.com/in/satyartha-banerjee-b3095417b/"><img id="mylogo" src="./Assets/linkedin (1).png"></img></Link>
           
              <Link to="https://www.facebook.com/satyartha.banerjee.3"><img id="mylogo" src="./Assets/facebook-app-symbol.png"></img></Link>
            
          </div>
        </div>
      </div>
      {spinload?<Spinnerload />:""}
    </div>
  );
};

export default Contactcont;
