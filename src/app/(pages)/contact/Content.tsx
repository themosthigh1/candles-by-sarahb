"use client";
import Image from "next/image";
import ContactForm from "./ContactForm";
import PageTitle from "@/components/PageTitle/PageTitle";

const Content = () => {
  return (
    <div>
      <PageTitle title={"Contact Us"} />
      <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto text-black mb-10">
        <h1 className="mb-5">
          We would love to hear from you! If you have any questions, inquiries,
          or would like to request further information, please feel free to get
          in touch with us using the contact form below or the provided contact
          information.
        </h1>
        <div>
          <ContactForm />
        </div>
        <div className="flex justify-center">
          <Image
            src="/candles-by-sarahb/public/images/candelsbysarahb.png"
            alt={"Candles By Sarah B Logo"}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
