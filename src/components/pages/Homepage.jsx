import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Homeheader from "../partials/Homeheader";
import Ourservices from "../partials/Homeservices";
import RecruitmentSection from "../partials/RecruitmentSection";


function Home(){
    return (
        <div>
           <Header/>
           <Homeheader/>
           <RecruitmentSection/>
           <Ourservices/>
           <Footer/>
      
     
        </div>
    );
}


export default Home;