import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_56ggli9",
        "template_ca4jkpf", 
        form.current,
        "YuBHWAPCGImFY30Rj" 
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            showConfirmButton: false,
            timer: 2000,
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again.",
          });
        }
      );
  };

  return (
    <div className="max-w-full mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side: Contact Info */}
        <div className="md:w-1/2  bg-white text-center -pt-5  p-6 rounded-lg space-y-4">
          <div>
            <p className="font-semibold">📧 Email:</p>
            <p>jahidul110j@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">📞 Phone:</p>
            <p>+8801714224123</p>
          </div>
          <div>
            <p className="font-semibold">💬 WhatsApp:</p>
            <p>+8801714224123</p>
          </div>
        </div>

        {/* Right side: Email Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* To Email (Hidden) */}
            <input
              type="hidden"
              name="to_email"
              value="jahidul110j@gmail.com"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              required
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

