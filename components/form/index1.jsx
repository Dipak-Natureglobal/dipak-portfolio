import React, { useState } from "react";
import { useTheme } from "../theme-provider/page";

const ContactWEB3Form = ({ title, description }) => {
  const {theme}=useTheme()
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateFields = (data) => {
    const newErrors = {};

    if (!data.name) newErrors.name = "First name is required.";
    if (!data.last_name) newErrors.last_name = "Last name is required.";
    if (!data.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!data.phone) {
        newErrors.phone = "Phone number is required.";
      } else if (!/^\d{10}$/.test(data.phone)) {
        newErrors.phone = "Phone number must be 10 digits.";
      }
    if (!data.message) newErrors.message = "Please enter your message.";

    return newErrors;
  };

  const handleInputChange = (field) => {
    setErrors((prevErrors) => {
      const { [field]: _, ...remainingErrors } = prevErrors;
      return remainingErrors;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value.trim(); // Trim spaces
    });

    const validationErrors = validateFields(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return; // Stop submission if there are errors
    }

    setResult("Please wait...");
    setIsSubmitted(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (response.status === 200) {
        setResult(json.message);
        setTimeout(() => {
          form.reset();
          setResult("");
          setIsSubmitted(false);
        }, 2000);
      } else {
        setResult(json.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong!");
    }
  };
  const handleReset = () => {
    setErrors({}); 
    setResult("");
  };

  return (
    <div className="dark:bg-[#27272c] bg-white p-5 rounded-lg shadow-sm">
      <div className="text-left m-7">
        <h1 className="my-3 text-3xl font-semibold dark:text-[#ADFF2F] text-[#22c55e]">{title}</h1>
        <marquee className="dark:text-white/60 text-black/70">{description}</marquee>
      </div>
      <div className="m-7">
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="hidden"
            name="access_key"
            value="97745d79-bd88-42c0-bd6d-fa51d2d1516e"
          />
          <input type="hidden" name="subject" value="New Contact Form Submission" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <div className="flex flex-col md:flex-row mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="first_name" className="block mb-2 text-sm dark:text-white text-black/70">
                First Name
              </label>
              <input
                type="text"
                name="name"
                id="first_name"
                className={`w-full px-3 py-1 dark:bg-primary bg-gray-100 border-2 rounded-md ${
                  errors.name ? "border-red-500" : "dark:border-primary border-gray-500"
                } focus:outline-none dark:focus:border-[#ADFF2F] focus:border-[#22c55e]`}
                onInput={() => handleInputChange("name")}
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="last_name" className="block mb-2 text-sm dark:text-white text-black/70">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className={`w-full px-3 py-1 dark:bg-primary bg-gray-100 border-2 rounded-md ${
                  errors.last_name ? "border-red-500" : "dark:border-primary border-gray-500"
                } focus:outline-none dark:focus:border-[#ADFF2F] focus:border-[#22c55e]`}
                onInput={() => handleInputChange("last_name")}
              />
              {errors.last_name && <div className="text-red-500 text-sm mt-1">{errors.last_name}</div>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block mb-2 text-sm dark:text-white text-black/70">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`w-full px-3 py-1 dark:bg-primary bg-gray-100 border-2 rounded-md ${
                  errors.email ? "border-red-500" : "dark:border-primary border-gray-500"
                } focus:outline-none dark:focus:border-[#ADFF2F] focus:border-[#22c55e]`}
                onInput={() => handleInputChange("email")}
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="phone" className="block mb-2 text-sm dark:text-white text-black/70">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className={`w-full px-3 py-1 dark:bg-primary bg-gray-100 border-2 rounded-md ${
                  errors.phone ? "border-red-500" : "dark:border-primary border-gray-500"
                } focus:outline-none dark:focus:border-[#ADFF2F] focus:border-[#22c55e]`}
                onInput={() => handleInputChange("phone")}
              />
              {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm dark:text-white text-black/70">
              Your Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              style={{ minHeight: "8rem" }}
              placeholder="Type your message here"
              className={`w-full px-3 resize-y py-1 dark:bg-primary bg-gray-100 border-2 rounded-md ${
                errors.message ? "border-red-500" : "dark:border-primary border-gray-500"
              } focus:outline-none dark:focus:border-[#ADFF2F] focus:border-[#22c55e]`}
              onInput={() => handleInputChange("message")}
            ></textarea>
            {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
          </div>

          <div className="mb-6 flex gap-4">
  <button
    type="submit"
    disabled={isSubmitted}
    className="w-32 flex items-center justify-center gap-2 rounded-full font-bold px-1 py-1 text-black/70 dark:bg-[#ADFF2F] bg-[#22c55e] dark:focus:bg-[#7dae34] focus:bg-[#22c55e] focus:outline-none"
  >
    Send
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
    </svg>
  </button>
  <button
    type="reset"
    disabled={isSubmitted}
    onClick={handleReset}
    className="w-32 flex items-center justify-center gap-2 font-bold px-2 py-2 text-black/70 dark:bg-[#ADFF2F] bg-[#22c55e] rounded-full dark:focus:bg-[#7dae34] focus:bg-[#22c55e] focus:outline-none"
  >
    Reset
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
    </svg>
  </button>
</div>

          
<p
      className={`text-base text-center ${
        result.includes("wrong") ? "text-red-500" : theme === "dark" ? "text-[#ADFF2F]" : "text-[#22c55e]"
      }`}
    >
            
            {result}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactWEB3Form;
