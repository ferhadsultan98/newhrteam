import React from "react";
import "../contact/contact.css";
import ContactBackImage from '../../assets/contactback.jpg'


let ContactOneSection = () =>{
    return (
        <div className="ContactBackImage">
      <img src={ContactBackImage} alt="" />
      <div className="ContactContent">
        <h1>Autsorsinq həlləri ilə əməliyyatları gücləndirin</h1>
      </div>
    </div>
    )
}

export default ContactOneSection