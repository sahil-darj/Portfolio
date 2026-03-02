import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ isModal = false }) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Send to Database
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    fetch("http://localhost/portfolio/backend/api.php?action=send_message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(err => console.error("Database save error:", err));

    // Send via EmailJS
    emailjs
      .sendForm(
        "service_eloq0p8",
        "template_g9u7nr3",
        form.current,
        "kK9XlVwZzwONRwPoX"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  const content = (
    <div className={`${isModal ? "" : "mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700"}`}>
      {!isModal && (
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-4 flex flex-col space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          required
          className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-white font-bold rounded-xl hover:opacity-90 shadow-[0_0_15px_rgba(130,69,236,0.4)] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );

  if (isModal) return content;

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase tracking-wider">Contact</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>
      {content}
    </section>
  );
};

export default Contact;
