import { careSteps } from "@/components/CandleCare/careSteps";
import PageTitle from "@/components/PageTitle/PageTitle";

const CandleCarePage = () => {
  return (
    <div>
      <PageTitle title={"Candle Care"} />
      <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto text-black mb-10">
        <h2 className="mb-10 font-medium text-lg">
          We want your Candles to give you joy and light while filling your
          space with beautiful aromatic notes that inspire love, creativity and
          relaxation. For the most effective way to do this, please follow our
          candle care tips below.
        </h2>
        <ol>
          {careSteps.map((step, i) => (
            <li key={i} className="mb-6">
              {step.text}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CandleCarePage;
