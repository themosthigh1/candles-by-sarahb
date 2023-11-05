import { getGame } from "@/libs/apis";
import Link from "next/link";
import GameCategoryCard from "../GameCategoryCard/GameCategoryCard";
import CandleCare from "../CandleCare/CandleCare";

const GameDetailsServer: any = async (props: { slug: string }) => {
  const { slug } = props;

  const gameDetails = await getGame(slug);

  return (
    <>
      <h2 className={classNames.name}>{gameDetails.name}</h2>
      <div className="flex justify-center items-baseline mb-5">
        <p className={classNames.price}>$ {gameDetails.price}</p>
        <p className={classNames.shipping}> + 9.99 Shipping/Handling</p>
      </div>
      <h2 className={classNames.description}>{gameDetails.description}</h2>
      <div className="flex justify-center items-baseline">
        <h2 className={classNames.text}>Size:</h2>
        <h2 className={classNames.dimension}>
          {gameDetails.dimension.weightPerVessel}
        </h2>
      </div>
      <Link href={gameDetails.buyLink}>
        <button className="text-white mr-4 hover:bg-gray-700 bg-black py-2 px-4 my-5">
          Buy Now
        </button>
      </Link>
      <div className="my-10">
        <CandleCare />
      </div>
      <Link href={gameDetails.buyLink}>
        <button className="text-black mr-4 hover:bg-yellow-400 bg-yellow-300 py-2 px-4">
          Candle Care
        </button>
      </Link>
    </>
  );
};

export default GameDetailsServer;

const classNames = {
  description: "text-lg text-black my-10",
  dimension: "text-lg text-black mb-2 font-medium",
  name: "text-4xl text-black my-5",
  price: "text-2xl text-black mr-2",
  text: "text-lg text-black mb-2 mr-2",
  shipping: "text-xs text-black",
};
