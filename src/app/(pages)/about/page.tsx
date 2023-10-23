import Image from "next/image";
import Logo from "../../../../public/images/Logo-Big.png";
import PageTitle from "@/components/PageTitle/PageTitle";

const page = () => {
  return (
    <div>
      <PageTitle title={"About Us"} />
      <div className={pageClassNames.pageContainer}>
        <p>
          Unlike those familiar, over scented, “assembly line” produced candles,
          Candles by Sarah B takes pride in each and every individual candle
          created. With humble beginnings in a small in-home work studio in
          rural North Carolina, it would take more than three years to perfect
          the look, charm, and overall appeal of our products. As with any
          luxury brand, Sarah B cultivates each individual product by hand from
          beginning to end. The precise imperfections with our lines adds to its
          exclusivity but with a high standard of guaranteed satisfaction. We
          guarantee that each product from the vessel, to flavor recipe, to the
          packaging will only pass through one pair of hands!
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
