import React from 'react';

const ContactPlace = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-8 gap-4 md:space-y-0 p-8">
      {/* Google Map Embed */}
      <div className="flex-1">
        <iframe
          className="w-full h-96 rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.282343301032!2d36.81724421469592!3d-1.292065399073986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7f29e523b%3A0x0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1618597152150!5m2!1sen!2ske"
          allowFullScreen=""
          loading="lazy"
          title="Goldstein Safaris Location"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="flex-1 space-y-6">
        <div>
          <h2 className="text-3xl text-primary_yellow font-semibold uppercase">Schedule a Free Safari Consultation</h2>
          <p className="text-lg text-gray-800">
            We'd love to help you plan your next adventure. Get in touch and let's start designing your dream safari experience.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-xl text-primary_yellow">Our Office</h3>
          <p>Nairobi, Kenya</p>
          <p>Email: <span className="text-blue-700">info@goldsteinsafaris.com</span> </p>
          <p>Phone: <a href="tel:+254716621762" className="text-blue-700">+254 716 621 762</a></p>
          <p>Hours: Mon - Fri: 9 AM – 6 PM (EAT)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPlace;
