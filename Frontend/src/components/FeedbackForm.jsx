import { useState, useEffect } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    let { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formdata;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill all the required fields!");
      return;
    }
    await axios.post("http://localhost:3000/user/form", formdata);
    console.log("Submitted the form", formdata);
    setformdata({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handlesubmit}
      className="gradient-glass shadow-xl rounded-xl p-6 space-y-4 border border-white/20 backdrop-blur"
    >
      <div>
        <label className="block text-sm font-semibold text-white mb-1">
          Name
        </label>
        <input
        name="name"
        value={formdata.name}
          onChange={handlechange}
          type="text"
          className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-1">
          Email
        </label>
        <input
        name="email"
        value={formdata.email}
          onChange={handlechange}
          type="email"
          className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-1">
          Message
        </label>
        <textarea
        name="message"
          value={formdata.message}
          onChange={handlechange}
          rows="4"
          className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Your feedback"
        ></textarea>
      </div>

      <button 
        type="submit"
        className="w-full  cursor-pointer bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition duration-200"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
