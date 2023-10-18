"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { client } from "../../../../sanity/lib/client";

interface Contact {
  firstName: string;
  lastName: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [contact, setContact] = useState<Contact>({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Save the contact data to Sanity
      const result = await client.create({
        _type: "contacts", // Specify the Sanity document type
        firstName: contact.firstName,
        lastName: contact.lastName,
        message: contact.message,
      });

      console.log("Contact saved, added to the database", result);

      // Reset the form after successful submission
    } catch (error) {
      console.error("Error saving contact:", error);
      // Handle the error as needed (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col my-16">
        <label htmlFor="firstName" className={inputClassNames.label}>
          First Name
        </label>
        <input
          className={inputClassNames.inputfield}
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName" className={inputClassNames.label}>
          Last Name
        </label>
        <input
          className={inputClassNames.inputfield}
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="message" className={inputClassNames.label}>
          Message
        </label>
        <textarea
          className={inputClassNames.messageField}
          name="message"
          value={contact.message}
          onChange={handleChange}
          required
        />
        <div>
          <button
            className="bg-black hover:bg-gray-700 text-white py-2 px-4 transition-all duration-200"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

const inputClassNames = {
  inputfield: "border border-black h-10 px-3 py-2 mb-8",
  messageField: "border border-black px-3 py-2 mb-8 h-40",
  label: "block text-sm font-semibold text-gray-700 mb-2",
};
