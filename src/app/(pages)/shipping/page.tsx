import PageTitle from "@/components/PageTitle/PageTitle";

const ShippingPage = () => {
  return (
    <div>
      <PageTitle title={"Shipping"} />
      <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto text-black mb-10">
        <h2 className="text-xl">
          Please allow 5-10 business days of processing time before leaving our
          shipping facilities.
        </h2>
        <p className="text-lg font-medium mt-8 mb-2">Ground shipping</p>
        <p>
          A physical street address is required for delivery. We currently offer
          a flat rate for Ground shipping of $9.99 on any order in the
          continental U.S. through USPS
        </p>
        <p className="text-lg font-medium mt-8 mb-2">
          What if I place my order on a holiday or weekend?
        </p>
        <p>
          All orders placed over the weekend are received the following Monday.
          Please allow 1-2 additional days for order confirmation.
        </p>
        <p>
          Candles by Sarah B. shipping department will be closed on certain
          holidays. Orders submitted on these days will not be processed until
          the next open business day.
        </p>
        <h3 className="text-lg font-medium mt-8 mb-2">Holiday closures</h3>
        <ul className="list-disc pl-8">
          {holidays.map((holiday) => (
            <li key={holiday}>{holiday}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShippingPage;

const holidays = [
  "New Years Day",
  "Martin Luther King Day",
  "Memorial Day",
  "Independence Day",
  "Labor Day",
  "Thanksgiving Day",
  "The day after Thanksgiving",
  "Christmas Eve",
  "Christmas Day",
  "New Years Eve",
];
