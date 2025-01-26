
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  let Links = [
    { id: 1, name: "HOME", link: "/" },
    {
      id: 2,
      name: "ABOUT US",
      link: "",
      dropdown: [
        { id: 1, name: "Company Profile", link: "" },
        { id: 2, name: "Certifications", link: "" },
        { id: 3, name: "Search Methodology", link: "" },
        { id: 4, name: "Our Vision Mission & Core Values", link: "" },
        { id: 5, name: "Strategy", link: "" },
        { id: 6, name: "Our People", link: "" },
        { id: 7, name: "Testimonial", link: "" },
      ],
    },
    {
      id: 3,
      name: "EMPLOYERS",
      link: "",
      dropdown: [
        { id: 1, name: "Our Services", link: "" },
        { id: 2, name: "Sectors Catered", link: "" },
        { id: 3, name: "Why Us", link: "" },
      ],
    },
    {
      id: 4,
      name: "JOB SEEKERS",
      link: "",
      dropdown: [
        { id: 1, name: "Current  Openings", link: "" },
        { id: 2, name: "Post Your Resume", link: "" },
      ],
    },
    { id: 5, name: "CONTACT US", link: "/contact-us" },
  ];

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (id) => {
    if (window.innerWidth < 768) {
      setDropdownOpen(dropdownOpen === id ? null : id);
    }
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-center lg:bg-white md:bg-white bg-[#002054] lg:py-1 md:py-4 lg:px-10 md:px-2 p-3">
     
        <div className="cursor-pointer">
          <Link to="/">
          
            <img
              src="/images/logo.png"
              alt="Large Logo"
              className="hidden lg:block w-56"
            />
          
            <img
              src="/images/logo.png"
              alt="Medium Logo"
              className="hidden md:block lg:hidden w-36"
            />
       
            <img
              src="/images/logo1.png"
              alt="Small Logo"
              className="block md:hidden w-36"
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-4xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

       
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 pl-9 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open ? "top-24 opacity-100" : "top-[-490px]"
          } ${open ? "p-8":''} md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li
              key={link.id}
              className="relative group md:ml-2 lg:ml-6 my-7 md:my-0 lg:text-xl md:text-xs text-base"
            >
              <div
                onClick={() => toggleDropdown(link.id)}
                className="flex items-center group justify-between cursor-pointer"
              >
                <Link
                  to={link.link}
                  className="text-[#0c3a85] group-hover:text-[#04a7ee] lg:text-sm md:text-xs font-bold transition duration-500"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <ion-icon
                    name="chevron-down-outline"
                    style={{
                      fontSize: "15px",
                      color: "#0c3a85",
                      fontWeight: "900",
                      marginLeft: "2px",
                      marginTop: "3px",
                    }}
                    className="md:ml-0 group-hover:text-[#04a7ee]"
                  />
                  
                )}
              </div>

              {link.dropdown && (
                <div
                  className={`${
                    dropdownOpen === link.id ? "block" : "hidden"
                  } md:hidden bg-[#0c3a85] shadow-md rounded-lg p-5 mt-4 w-75`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.id}
                        to={item.link}
                        className="block text-sm text-white hover:text-[#04a7ee] transition duration-500 font-semibold"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {link.dropdown && (
                <div className="hidden md:block absolute left-0 w-60 bg-[#0c3a85] opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-300 ease-in shadow-md rounded-sm top-full mt-2 invisible group-hover:visible">
                  <div className="grid grid-cols-1 gap-4 p-5">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.id}
                        to={item.link}
                        className="block text-base text-white transiton duration-500 hover:text-[#04a7ee] font-semibold"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
          <Button />
        </ul>
      </div>
    </div>
  );
}

export default Header;
