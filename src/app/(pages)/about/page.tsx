import Image from "next/image";
import Logo from "../../../../public/images/Logo-Big.png";
import PageTitle from "@/components/PageTitle/PageTitle";

const page = () => {
  return (
    <div>
      <PageTitle title={"About Us"} />
      <div className={pageClassNames.pageContainer}>
        <p>
          Unlike those familiar, heavily scented, mass-produced candles, Candles
          by Sarah B takes great pride in every single candle it creates. With
          humble beginnings in a small, in-home work studio in rural North
          Carolina, it took over three years to perfect the appearance, charm,
          and overall appeal of our products. Like any luxury brand, Sarah B
          personally crafts each product from start to finish. The precise
          imperfections in our lines add to their exclusivity while maintaining
          a high standard of guaranteed satisfaction. We assure you that each
          product, from the vessel and flavor recipe to the packaging, passes
          through the hands of a single artisan!
        </p>
        <div className="flex justify-center">
          <Image
            src={Logo}
            alt={"Candles By Sarah B Logo"}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default page;

const pageClassNames = {
  pageSection: "text-white",
  pageContainer: "px-6 sm:px-12 md:px-20 lg:px-36 mx-auto text-black mb-10",
};
