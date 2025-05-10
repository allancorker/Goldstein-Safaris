import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedIn: "",
    dob: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({ message: "", isSuccess: null });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      interestedIn: formData.interestedIn,
      dob: formData.dob,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setFeedback({
            message: "Safari inquiry submitted successfully!",
            isSuccess: true,
          });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            interestedIn: "",
            dob: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          setFeedback({
            message: "Oops! Something went wrong. Please try again.",
            isSuccess: false,
          });
          alert("Failed to send inquiry.Please message us direct ...😊")
        }
      );

    setTimeout(() => {
      setFeedback({ message: "", isSuccess: null });
    }, 5000);
  };

  return (
    <div className="py-8 bg-primary_yellow flex justify-center">
      <div className="max-w-6xl text-white flex flex-col gap-4 md:flex-row items-center justify-center px-6 py-10">
        {/* Left Content */}
        <div className="md:w-1/2 border-l-2 border-dotted pl-2 mx-auto text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight">
            Explore. Discover. Relax.
          </h1>
          <p className="text-lg md:text-xl max-w-md">
            Goldstein Safaris crafts unforgettable travel experiences across Kenya.
            Whether you're chasing sunsets in the Mara or relaxing at a coastal retreat, we’ve got you covered.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="border border-white hover:bg-white hover:text-primary_yellow hover:scale-105 transition-all duration-300 px-6 py-2 rounded-full font-semibold">
              <Link to="/contact">Start Your Journey</Link>
            </button>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-80 md:w-1/2 mt-10 md:mt-0 p-8 rounded-2xl shadow-xl space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-4 text-black text-center">
            Safari Inquiry & Booking Form
          </h2>

          <div className="flex gap-4">
            <input
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              placeholder="First Name*"
              className="w-1/2 p-2 rounded bg-white text-black outline-none"
              onChange={handleChange}
            />
            <input
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              placeholder="Last Name*"
              className="w-1/2 p-2 rounded bg-white text-black outline-none"
              onChange={handleChange}
            />
          </div>

          <input
            name="email"
            type="email"
            required
            value={formData.email}
            placeholder="Email*"
            className="w-full p-2 rounded bg-white text-black outline-none"
            onChange={handleChange}
          />
          <input
            name="phone"
            type="tel"
            required
            value={formData.phone}
            placeholder="Phone Number*"
            className="w-full p-2 rounded bg-white text-black outline-none"
            onChange={handleChange}
          />
          <input
            name="dob"
            type="date"
            value={formData.dob}
            className="w-full p-2 rounded bg-white text-black outline-none"
            onChange={handleChange}
          />

          <select
            name="interestedIn"
            required
            value={formData.interestedIn}
            className="w-full p-2 rounded bg-white text-black outline-none"
            onChange={handleChange}
          >
            <option value="">Select a safari package...</option>
            <option value="Maasai Mara Safari">Maasai Mara Safari</option>
            <option value="Amboseli Elephant Experience">Amboseli Elephant Experience</option>
            <option value="Coastal Beach Escape">Coastal Beach Escape</option>
            <option value="Mount Kenya Trek">Mount Kenya Trek</option>
            <option value="Custom Safari Package">Custom Safari Package</option>
          </select>

          <textarea
            name="message"
            rows={3}
            value={formData.message}
            placeholder="Tell us more about your travel plans..."
            className="w-full p-2 rounded bg-white text-black outline-none"
            onChange={handleChange}
          ></textarea>

          {/* Feedback */}
          {feedback.message && (
            <div
              className={`text-center py-2 px-4 rounded font-semibold ${
                feedback.isSuccess
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {feedback.message}
            </div>
          )}

          <button
            type="submit"
            className="bg-primary_yellow text-white w-full py-2 rounded-full font-semibold hover:bg-yellow-600 hover:scale-105 transition-all duration-300"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
