import { getGame } from "@/libs/apis";

const GameDetailsServer: any = async (props: { slug: string }) => {
  const { slug } = props;

  const gameDetails = await getGame(slug);

  return (
    <>
      <h2 className={classNames.name}>{gameDetails.name}</h2>
      <p className={classNames.price}>{gameDetails.price} $</p>
      <h2 className={classNames.description}>{gameDetails.description}</h2>
    </>
  );
};

export default GameDetailsServer;

const classNames = {
  description: "text-lg text-black mb-2",
  name: "text-4xl pt-5 text-black mb-2",
  price: "text-2xl text-blackblack",
};
