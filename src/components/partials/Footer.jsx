import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002054] text-white  pb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:gap-4 gap-6 md:gap-2 md:px-5 md:py-8 p-10 lg:p-16">
   
        <div className="flex flex-col items-center  md:items-start ">
          <img
            src="/images/logo1.png"
            alt="Prius IT Services Logo"
            className="mb-4 md:w-96 w-64 "
          />
          <p className="text-center lg:text-left md:text-center lg:text-base md:text-sm text-sm">
            Prius IT Services is one of the fastest growing service companies in
            India. It caters to corporate clients, providing them with
            efficient manpower for their manifold recruitment requirements.
          </p>
         
          <div className="flex mt-4 cursor-pointer space-x-4">
 
            <div className="group flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 transition-all duration-500 ease-in-out hover:bg-[#04a7ee] hover:translate-y-[-4px]">
              <a href="#" className="flex items-center justify-center text-[#0c3a85] text-xl transition-all duration-300 ease-in-out group-hover:text-white">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </div>

          
            <div className="group flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 transition-all duration-500 ease-in-out hover:bg-[#04a7ee] hover:translate-y-[-4px]">
              <a href="#" className="flex items-center justify-center text-[#0c3a85] text-xl transition-all duration-300 ease-in-out group-hover:text-white">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </div>

          
            <div className="group flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 transition-all duration-500 ease-in-out hover:bg-[#04a7ee] hover:translate-y-[-4px]">
              <a href="#" className="flex items-center justify-center text-[#0c3a85] text-xl transition-all duration-300 ease-in-out group-hover:text-white">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>

          
            <div className="group flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 transition-all duration-500 ease-in-out hover:bg-[#04a7ee] hover:translate-y-[-4px]">
              <a href="#" className="flex items-center justify-center text-[#0c3a85] text-xl transition-all duration-300 ease-in-out group-hover:text-white">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>

        </div>

        <div className="lg:ml-14  md:ml-6" >
         
          <h4 className="font-bold lg:text-2xl md:text-lg text-xl mb-4">For Employers</h4>
          <div className="h-[3px] w-24 bg-white mb-4"></div>
       
          <ul className="space-y-2">
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-smt transition duration-500 hover:text-[#04a7ee]">
                Sectors Catered
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Why Us
              </a>
            </li>
          </ul>
          
          <h4 className="font-bold lg:text-2xl md:text-lg text-xl mt-6 mb-4">For Job Seekers</h4>
          <div className="h-[3px] w-24 bg-white mb-4"></div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Current Openings
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Post Your Resume
              </a>
            </li>
          </ul>
        </div>

 
        <div className=" md:ml-4 lg:ml-0">
          <h4 className="font-bold lg:text-2xl md:text-lg text-xl mb-4">Quick Menus</h4>
          <div className="h-[3px] w-24 bg-white mb-4"></div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm  transition duration-500 hover:text-[#04a7ee]">
                Company Profile
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Certifications
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Search Methodology
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Our Vision, Mission & Core Values
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Strategy
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Our People
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-sm md:text-xs text-sm transition duration-500 hover:text-[#04a7ee]">
                Contact
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-bold lg:text-2xl md:text-lg text-xl mb-4">Contact Us</h4>
          <div className="h-[3px] w-24 bg-white mb-4"></div>
        
          <p className="lg:text-sm md:text-xs text-sm flex flex-col items-start">
            <a href="tel:+918610773303" className="flex items-center">
              <img
                src="/images/phone-blue.png" 
                alt="Phone Icon"
                className="w-4 h-4 mr-2 mt-1"
              />
              <span className="font-bold">Phone:</span>
            </a>
            <span className="ml-7 ">
              <a href="tel:+918610773303" className="hover:text-[#04a7ee] transition duration-500 ">
                +91 86107 73303
              </a>
              <br />
              <a href="tel:+917904099692" className="hover:text-[#04a7ee] transition duration-500 ">
                +91 79040 99692
              </a>
            </span>
          </p>
          <p className="lg:text-sm md:text-xs text-sm mt-4 flex flex-col items-start">
            <a href="mailto:info@priusitservices.com" className="flex items-center">
              <img
                src="/images/email-blue.png"
                alt="Email Icon"
                className="w-4 h-4 mr-2 mt-1"
              />
              <span className="font-bold">Email:</span>
            </a>
            <a
              href="mailto:info@priusitservices.com"
              className="hover:text-[#04a7ee] ml-7 transition duration-500"
            >
              info@priusitservices.com
            </a>
          </p>

        
          <p className="lg:text-sm md:text-xs text-sm mt-4 flex flex-col items-start">
            <a
              href="https://www.google.com/maps?q=22/1,+SMP+Nagar,+Kallankattupudur,+Kinathukadavu,+Coimbatore,+Tamil+Nadu,+India+-+642109"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="/images/pin-blue.png" 
                alt="Location Icon"
                className="w-4 h-4 mr-2 mt-1"
              />
              <span className="font-bold">Location:</span>
            </a>
            <a
              href="https://www.google.com/maps?q=22/1,+SMP+Nagar,+Kallankattupudur,+Kinathukadavu,+Coimbatore,+Tamil+Nadu,+India+-+642109"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#04a7ee] ml-7 transition duration-500"
            >
              22/1, SMP Nagar, Kallankattupudur, Kinathukadavu, Coimbatore, Tamil Nadu, India - 642 109.
            </a>
          </p>

        </div>
      </div>
      <div className="bg-[#03143b] text-center p-4  text-sm">
        Prius IT Services © Copyright {new Date().getFullYear()}. Designed by Virtual Softech.
      </div>

    </footer>
  );
};

export default Footer;
