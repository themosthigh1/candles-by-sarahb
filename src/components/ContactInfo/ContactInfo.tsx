import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex justify-around mt-20">
      <div className="flex flex-col mb-5">
        <h1 className="text-xl mb-5">Candles By Sarah B.</h1>
        <p>10919 Cherry Grove Rd</p>
        <p> Reidsville, NC 27320</p>
      </div>
      <div className="flex">
        <h1 className="text-xl">Map</h1>
      </div>
    </div>
  );
};

export default ContactInfo;
