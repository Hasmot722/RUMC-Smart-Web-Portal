import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Contact Us
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              General Inquiries
            </h3>
            <p className="mb-2">📍 Rajshahi University Campus, Rajshahi</p>
            <p className="mb-2">📞 Phone: 017XXXXXXXX</p>
            <p className="mb-2">✉️ Email: info@rumc.edu.bd</p>
            <p className="mb-2">🕒 Office Hours: Sat–Thu, 9 AM – 5 PM</p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-green-600 hover:text-green-800 font-medium"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Send Us a Message
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              className="w-full mb-4 p-3 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
