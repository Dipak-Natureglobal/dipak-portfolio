import React, { useState,useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const ContactForm=({title, description})=>
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    
  
    // Error states
    const [errors, setErrors] = useState({ firstName: "", lastName: "", email: "", phone: "" ,services: ""});
  
    const handleReset = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSelectedService("");
      setErrors({ firstName: "", lastName: "", email: "", phone: "" ,services: ""});
      setSuccessMessage("");
    };
  
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://smtpjs.com/v3/smtp.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
    const handleInputChange = (e, field) => {
      const { value } = e.target;
      if (field === "firstName") {
        setFirstName(value);
        setErrors((prev) => ({ ...prev, firstName: "" }));
      } else if (field === "lastName") {
        setLastName(value);
        setErrors((prev) => ({ ...prev, lastName: "" }));
      } else if (field === "email") {
        setEmail(value);
        setErrors((prev) => ({ ...prev, email: "" }));
      } else if (field === "phone") {
        setPhone(value);
        setErrors((prev) => ({ ...prev, phone: "" }));
      } else if (field === "selectedService") {
        setSelectedService(value);
        setErrors((prev) => ({ ...prev, services: "" }));
      }
    };
  
    const validateForm = () => {
      const newErrors = {
        firstName: firstName ? "" : "First name is required.",
        lastName: lastName ? "" : "Last name is required.",
        email: email ? (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email) ? "" : "Invalid email address." : "Email is required.",
        phone: phone ? (/^\d{10}$/).test(phone) ? "" : "Phone number must be 10 digits." : "Phone number is required.",
        services: selectedService ? "" : "Please select services"
      };
      setErrors(newErrors);
      return !Object.values(newErrors).some((error) => error);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!validateForm()) {
        return;
      }
      console.log("dipak",window.Email); 
  
      const emailBody = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${selectedService}\nMessage: ${message}`;
  
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dipakmourya2000@gmail.com",
        Password: "B415005B13E04323A79A112E582986DF3580",
        To: "dipakmourya2000@gmail.com",
        From: "dipakmourya2000@gmail.com",
        Subject: "New Contact Form Submission",
        Body: emailBody,
      }).then((message) => {
        if (message === "OK") {
          setSuccessMessage("Message sent successfully!");
        } else {
          console.error("Email failed to send:", response);
          setSuccessMessage("Failed to send message. Please try again.");
        }
       
      });
    };
    useEffect(() => {
      if (successMessage) {
        const timer = setTimeout(() => {
          setSuccessMessage("");
           handleReset();
  
        }, 3000); 
    
        return () => clearTimeout(timer);
      }
    }, [successMessage]);
  
        return(
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                <h3 className="xl:text-4xl text-[24px] text-[#ADFF2F]">{title}</h3>
                <p className="text-white/60">
                 {description}
                </p>
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 ">
                  <div className="flex flex-col">
                    <Input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => handleInputChange(e, "firstName")}
                    />
                    {errors.firstName && <span className="text-red-500 ml-2">{errors.firstName}</span>}
                  </div>
                  <div className="flex flex-col">
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => handleInputChange(e, "lastName")}
                  />
                  {errors.lastName && <span className="text-red-500 ml-2">{errors.lastName}</span>}
                  </div>
                  <div className="flex flex-col">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => handleInputChange(e, "email")}
                    />
                    {errors.email && <span className="text-red-500 ml-2">{errors.email}</span>}
                  </div>
                  <div className="flex flex-col">
                    <Input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => handleInputChange(e, "phone")}
                    />
                    {errors.phone && <span className="text-red-500 ml-2">{errors.phone}</span>}
                  </div>
                </div>
                <div className="flex flex-col">
                <Select value={selectedService} onValueChange={(value) => handleInputChange({ target: { value } }, "selectedService")}>
                  <SelectTrigger className="w-full font-semibold">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web-Development">Web Development</SelectItem>
                      <SelectItem value="UI-UX">UI/UX Development</SelectItem>
                      <SelectItem value="Frontend-Development">Frontend Development</SelectItem>
                      <SelectItem value="Backend-Development">Backend Development</SelectItem>
                      <SelectItem value="Logo-Design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                 {errors.services && <span className="text-red-500 ml-2">{errors.services}</span>}
                </div>
               
                <Textarea
                  className="h-[200px] font-semibold"
                  placeholder="Type your message here."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="flex flex-row ">
                  <Button type="submit" className="bg-[#ADFF2F] hover:bg-[#ADFF2F] font-bold gap-2 w-32">
                    <span className="hover:pr-3 duration-500 flex">Send</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                    </svg>
                  </Button>
                  <Button type="button" onClick={handleReset} className="bg-[#ADFF2F] ml-3 hover:bg-[#ADFF2F] font-bold gap-2 w-32">
                    <span className="hover:pr-3 duration-500 flex">Reset</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                    </svg>
                  </Button>
                </div>
                {successMessage && (
                  <div className="bg-primary text-[#ADFF2F] p-4 my-2 rounded-md min-h-[40px] xl:w-[50%] w-[100%]">
                    <p className="font-semibold">{successMessage}</p>
                  </div>)
                }
              </form>
        );
} 
export default ContactForm;