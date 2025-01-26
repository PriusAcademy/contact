import React from "react";

function Contactheader() {
  return (
    <div className="lg:mt-24 md:mt-20 mt-16 relative">
      <div
        className="bg-cover bg-center md:bg-cover  lg:w-full md:w-full w-full  h-[250px] md:h-[350px] lg:h-[600px]"
        style={{
          backgroundImage: "url('/images/background1.jpg')",
        }}
      >
        <div className="absolute lg:top-2/3 top-28 md:top-2/4  md:left-12 left-5 lg:left-24">
          <h2 className="font-bold text-base lg:text-3xl  md:text-2xl bg-[#2f2e2f] p-2 text-amber-400 lg:max-w-52 md:max-w-44 max-w-32 tracking-wide">
            Get In Touch
          </h2>
          <h2 className="font-semibold lg:text-xl text-xs md:text-base md:max-w-fit max-w-48 text-white bg-[#2f2e2f] lg:mt-6 mt-3 p-2">
            We'd love to hear from you. Here's how you can reach us.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contactheader;
