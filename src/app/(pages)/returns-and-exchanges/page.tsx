import PagePlaceHolder from "@/components/PagePlaceHolder/PagePlaceHolder";
import PageTitle from "@/components/PageTitle/PageTitle";

const ReturnsPage = () => {
  return (
    <div>
      <PageTitle title={"Returns"} />
      <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto text-black mb-10">
        <p>
          All of our products are carefully inspected before they are shipped.
          We will replace or refund products damaged during shipment if
          photographic proof of damage is submitted to Candle by Sarah B within
          7 days of delivery. You may also exchange your product for another
          candle of the same size and price within 10 days of purchase. The
          buyer is responsible for shipping cost on all return items.
        </p>
        <p>
          In the event the package is damaged during shipping you may return
          your unused candle(s) for a full refund of your purchase price, less
          shipping and handling within 10 days of delivery. Please contact us at
          support@candlesbysarahb.com for further details.
        </p>
      </div>
    </div>
  );
};

export default ReturnsPage;
