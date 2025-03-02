import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(""); // State for validation errors
  const [successMessage, setSuccessMessage] = useState(""); // Success message

  // Function to handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to validate email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Regular expression for email validation
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email before sending
    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear errors if email is valid

    // Send email using EmailJS
    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "your_public_key"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setSuccessMessage("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("Failed to send message. Try again later.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <p className="mt-2 text-center text-gray-600">
          Fill out the form below to get in touch.
        </p>
        <form className="mt-6 flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md mb-3 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md mb-3 w-full"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}{" "}
          {/* Show email error */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md mb-3 w-full h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
        {successMessage && (
          <p className="text-green-500 text-center mt-3">{successMessage}</p>
        )}{" "}
        {/* Show success message */}
        {/* Contact Information */}
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-semibold">Feel free to reach out:</p>
          <div className="flex justify-center items-center mt-2 space-x-4">
            {}
            <a
              href="tel:+919545193719"
              className="flex items-center space-x-2 text-gray-700"
            >
              <Phone size={20} /> {/* Phone Icon */}
              <span>+91 95451 93719</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
