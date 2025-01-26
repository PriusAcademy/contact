import React from "react";

const RecruitmentSection = () => {
  return (
    <section className="bg-blue-50 py-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 px-6">
          <p className="text-[#04a7ee] font-medium lg:text-left md:text-center text-center text-lg">
            Welcome to Prius IT Services
          </p>
          <h1 className="text-3xl lg:text-5xl lg:text-left md:text-center text-center font-bold text-[#0c3a85] mt-2">
            Best Quality Recruitment Staffing Agency
          </h1>
          <p className="text-[#707087] lg:text-left md:text-center text-center mt-4">
            Prius IT Services is one of the fastest growing service companies
            in India. It caters to corporate clients, providing them with
            efficient manpower for their manifold recruitment requirements.
            Human resource solutions is the reputed forte of Prius IT Services,
            and we do our best to supply myriad staffing assistance like:
          </p>
          <ul className="mt-4  space-y-2">
            {[
              "Permanent Staffing Services",
              "Contract Staffing Services",
              "Contract To Hire Staffing Services",
              "Recruitment Process Outsourcing Services",
              "HR Outsourcing Services",
              "Next-Gen Background Verification",
              "On-site recruitment Service",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-[#707087]">
                <span className="text-blue-600 text-xl mr-2"><ion-icon name="checkmark-done-outline"></ion-icon></span> {item}
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-[#04a7ee] text-white px-4 py-2  hover:bg-[#0c53a5]  transition duration-500">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 px-6 mt-8 lg:mt-0">
          <img
            src="/images/about.jpg"
            alt="Recruitment meeting"
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
