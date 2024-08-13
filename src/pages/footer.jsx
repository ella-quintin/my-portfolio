import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_17nehl9',  // replace with your service ID from EmailJS
        'template_57o6dbr', // replace with your template ID from EmailJS
        formData,
        '2llwXpQ_rOmsoKxsl'      // replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          alert('Message sent! I will get back to you shortly.');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('There was an error sending your message. Please try again.');
        }
      );
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-teal-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">To contact Me,</h3>
            <p className="text-gray-300">
              Kindly send a message to my email.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full md:w-2/3 flex flex-col space-y-4"
          >
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full md:w-1/2 bg-gray-800 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full md:w-1/2 bg-gray-800 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white p-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-500 text-white py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              Send
            </button>
          </form>
        </div>
        <div className="text-center text-gray-300">
          &copy; {new Date().getFullYear()} Miss Quintin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
