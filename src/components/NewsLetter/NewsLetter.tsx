"use client";

import { SetStateAction, useState } from "react";
import { client } from "../../../sanity/lib/client";

const NewsLetter = () => {
  const [email, setEmail] = useState(""); // State to hold the email input value
  const [formData, setFormData] = useState(
    <div className={newsletterSectionClasses.cardLeft}>
      <h3 className={newsletterSectionClasses.cardHeading}>
        Sign Up for Our Newsletter
      </h3>
      <p className={newsletterSectionClasses.cardSubHeading}>
        Get the latest news and updates delivered straight to your inbox.
      </p>
    </div>
  ); // State to hold the email input value

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value); // Update the email state as the user types
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Send the email data to your Sanity backend using your Sanity client
      const response = await client.create({
        _type: "contact", // Replace with your Sanity document type
        email: email,
        // Add any other fields you want to save to Sanity
      });

      // Handle a successful submission
      console.log("Form data sent to Sanity:", response);
      setFormData(
        <div className={newsletterSectionClasses.cardLeft}>
          <h3 className={newsletterSectionClasses.cardHeading}>
            Thanks for Signing Up!
          </h3>
          <p className={newsletterSectionClasses.cardSubHeading}>
            Stay tuned for our latest news and updates delivered straight to
            your inbox.
          </p>
        </div>
      );
      // Clear the email input
      setEmail("");
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className={newsletterSectionClasses.container}>
      <h2 className={newsletterSectionClasses.heading}>Stay in the Loop</h2>
      <p className={newsletterSectionClasses.subHeading}>
        Subscribe to Our Newsletter for Exclusive Updates, Offers, and Tips.
      </p>
      <div className={newsletterSectionClasses.cardContainer}>
        {formData}
        <form
          className={newsletterSectionClasses.formContainer}
          onSubmit={handleSubmit}
        >
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className={newsletterSectionClasses.inputField}
            value={email} // Bind the input value to the email state
            onChange={handleEmailChange} // Handle input changes
          />
          <button type="submit" className={newsletterSectionClasses.button}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;

const newsletterSectionClasses = {
  container: "px-4 py-[80px] md:px-36 text-black",
  heading: "text-2xl md:text-4xl mb-3 md:mb-5",
  subHeading: "text-base md:text-lg mb-6 md:mb-10",
  cardContainer:
    "py-8 px-6 md:py-10 md:px-14 bg-black bg-opacity-75 mx-auto flex flex-col md:flex-row justify-between items-center",
  cardLeft: "flex-1 md:mr-8 mb-6 md:mb-0",
  cardHeading: "text-lg md:text-2xl mb-2 text-white",
  cardSubHeading: "text-sm md:text-base text-gray-300 mb-4",
  formContainer:
    "w-full md:w-1/2 flex flex-col md:flex-row items-center rounded-lg overflow-hidden",
  inputField:
    "w-full md:w-3/4 py-3 px-4 text-gray-700 rounded-t-lg md:rounded-l-lg md:rounded-t-none md:rounded-r-none",
  button:
    "bg-yellow-300 hover:bg-yellow-400 text-black py-3 px-8  transition-all duration-200 md:ml-4 mt-4 md:mt-0",
};
