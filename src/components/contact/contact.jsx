import React from "react";
import "../contact/contact.css";
import LeftSideContact from "./leftsidecontact";
import RightSideContact from "./rightsidecontact";
import ContactOneSection from "./contactonesection";


let Contact = () =>{
    return (
        <>
        <ContactOneSection/>
        <div className="Sides">
        <LeftSideContact/>
        <RightSideContact/>
        </div>
        </>
    )
}

export default Contact