import React from "react";
import Header from "../partials/Header";
import GetInTouch from "../partials/GetInTouch";
import ContactForm from "../partials/Contactlet's";
import Footer from "../partials/Footer";
import Contactheader from "../partials/Contactheader";


function Contact(){

    return (
        <div>
            <Header/> 
            <Contactheader/>
            <GetInTouch/>
            <ContactForm/>
            <Footer/>          
        </div>
    );
}


export default Contact;