import React, { FormEvent, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_c5y2o5m",
        "template_bs2mccp",
        currentForm,
        "35F4ZZi9RYQVnTlws"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="container contact__container">
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
