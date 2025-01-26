
import React  from "react";

function Ourservices() {
   
    return (
    
    <div className=" flex flex-col items-center justify-center lg:my-16 m-5">
      <div className="mt-5">
        <h3 className="text-center font-bold text-[#04a7ee] lg:text-lg md:text-base text-base mb-2">
          What We DO
        </h3>
        <h1 className="text-center lg:text-4xl md:text-3xl text-3xl font-bold text-[#0c3a85] mb-6">
          Our Services
        </h1>
        <p className="mb-10 lg:mb-16 md:mb-10 md:max-w-xl lg:max-w-3xl text-center text-[#707087] md:text-center">
          As expected of a prominent recruitment firm, our professional services
          are continuously expanding and adapting to meet the needs of our team
          changing times .
        </p>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-10">
        <div className="w-[300px] h-[400px] md:w-[240px]  md:h-[300px] lg:w-[270px] lg:h-[370px]  md:p-5 lg:p-7  p-10  flex flex-col items-center justify-center  bg-transparent border border-[#04a7ee]  border-dashed   mt-5 group ">
          <div className="w-20 h-20 lg:w-20 lg:h-20 md:w-14 md:h-14 rounded-full border border-[#04a7ee]  border-dashed  flex items-center justify-center  mb-5">
            <img
              src="/images/man.png"
              alt=""
              className="size-10 lg:size-10 md:size-7"
            />
          </div>

          <h2 className="font-semibold lg:text-2xl md:text-xl text-2xl text-center text-[#0c3a85]  mb-2 ">
            Permanent Staffing
          </h2>
          <p className=" text-center text-base lg:text-base md:text-xs text-[#707087]  mb-5">
          Prius IT Services permanent staffing solutions give you direct access to top-rated ...
         
          </p>
          <button   className="px-6 py-3 text-base bg-[#04a7ee] text-white group-hover:bg-[#0c3a85] transition duration-500 ">
            Learn More
          </button>
        </div>
        <div className="w-[300px] h-[400px] md:w-[240px] md:h-[300px] lg:w-[270px] lg:h-[370px] md:p-5 lg:p-7  p-10  flex flex-col items-center justify-center  bg-transparent border border-[#04a7ee]  border-dashed  duration-700  group mt-5">
          <div className="w-20 h-20 lg:w-20 lg:h-20 md:w-14 md:h-14 rounded-full border border-[#04a7ee]  border-dashed  flex items-center justify-center  mb-5">
            <img
              src="/images/man.png"
              alt=""
              className="size-10 lg:size-10 md:size-7"
            />
          </div>

          <h2 className="font-semibold lg:text-2xl md:text-xl text-2xl text-center text-[#0c3a85]  mb-3">
            Contract Staffing
          </h2>
          <p className=" text-center text-base lg:text-base md:text-xs text-[#707087]  mb-5">
          Prius IT Services all companies require contractors to add flexibility at one time...
          </p>
          <button className="px-6 py-3 text-base bg-[#04a7ee] text-white group-hover:bg-[#0c3a85] transition duration-500 ">
            Learn More
          </button>
        </div>
        <div className="w-[300px] h-[400px] md:w-[240px] md:h-[300px] lg:w-[270px] lg:h-[370px] md:p-5 lg:p-7  p-10  flex flex-col items-center justify-center bg-transparent border border-[#04a7ee]  border-dashed  duration-700 mt-5 group">
          <div className="w-20 h-20 lg:w-20 lg:h-20 md:w-14 md:h-14 rounded-full border border-[#04a7ee]  border-dashed  flex items-center justify-center group  mb-5">
            <img
              src="/images/Contact.png"
              alt=""
              className="size-10 lg:size-10 md:size-7"
            />
          </div>

          <h2 className="font-semibold lg:text-2xl md:text-xl text-2xl text-center text-[#0c3a85]  mb-2">
           Recruitment Process Sourcing
          </h2>
          <p className=" text-center text-base lg:text-base md:text-xs text-[#707087]  mb-5">
          We are specialists in bespoke Recruitment Process...
          </p>
          <button className="px-6 py-3 text-base bg-[#04a7ee] text-white group-hover:bg-[#0c3a85] transition duration-500 ">
            Learn More
          </button>
        </div>
        <div className="w-[300px] h-[400px] md:w-[240px] md:h-[300px] lg:w-[270px] lg:h-[370px] md:p-5 lg:p-7  p-10  flex flex-col items-center justify-center  bg-transparent border border-[#04a7ee]  border-dashed  duration-700 group  mt-5">
          <div className="w-20 h-20 lg:w-20 lg:h-20 md:w-14 md:h-14 rounded-full border border-[#04a7ee]  border-dashed  flex items-center justify-center mb-8">
            <img
              src="/images/services.png"
              alt=""
              className="size-10 lg:size-10 md:size-7"
            />
          </div>

          <h2 className="font-semibold lg:text-2xl md:text-xl text-2xl text-center text-[#0c3a85]  mb-5">
            
            HR Oursourcing
          </h2>
          <p className=" text-center text-base lg:text-base md:text-xs text-[#707087]  mb-5">
          HR outsourcing is the contracting of core or non-core HR (Human Resource)...
          </p>
          <button className="px-6 py-3 text-base bg-[#04a7ee] text-white group-hover:bg-[#0c3a85] transition duration-500 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;





