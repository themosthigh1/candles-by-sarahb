import { getGame } from "@/libs/apis";
import Link from "next/link";

const GameDetailsServer: any = async (props: { slug: string }) => {
  const { slug } = props;

  const gameDetails = await getGame(slug);

  return (
    <>
      <h2 className={classNames.name}>{gameDetails.name}</h2>
      <p className={classNames.price}>{gameDetails.price} $</p>
      <h2 className={classNames.description}>{gameDetails.description}</h2>
      <Link href={gameDetails.buyLink}>
        <button className="text-white mr-4 hover:bg-yellow-300 hover:text-black bg-black py-2 px-4 mt-5">
          Buy Now
        </button>
      </Link>
    </>
  );
};

export default GameDetailsServer;

const classNames = {
  description: "text-lg text-black mb-2",
  name: "text-4xl text-black mb-2",
  price: "text-2xl text-blackblack my-5",
};
