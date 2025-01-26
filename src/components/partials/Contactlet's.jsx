import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sgujous", 
        "template_zm5n4e3", 
        {
          from_name: formData.fullName,
          to_name: "Lavanya", 
          message: formData.message,
          subject: formData.subject,
          contact_number: formData.contactNumber,
          from_email: formData.email,
        },
        "9JvmcV1BOldUs0fJ0" 
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          console.log(result.text);
       
          
        },
        (error) => {
          toast.error("An error occurred, please try again.");
          console.log(error.text);
        
        }
      );

    setFormData({
      fullName: "",
      email: "",
      contactNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl lg:my-10 md:my-10 my-5 md:w-full bg-white lg:p-8 md:p-8 p-6 rounded-lg shadow-lg">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center text-[#0c3a85] mb-8">
          Let's Talk To You
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Business Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Business Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-600 font-medium mb-2">
              Description
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Please Provide details"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            By Submitting This Form You Are Agreeing To Our Privacy Policy.
          </p>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-[#0c3a85] transition duration-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;



