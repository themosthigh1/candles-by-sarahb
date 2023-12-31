import GameCard from "@/components/GameCard/GameCard";
import HeroSection from "@/components/HeroSection/HeroSection";

import { getGames } from "@/libs/apis";

const Games = async (props: {}) => {
  const games = await getGames();

  return (
    <div>
      <HeroSection />

      <section className={classNames.section}>
        <h2 className={classNames.heading}> Games</h2>
        <p className={classNames.subHeading}>
          Checkout our latest products
        </p>

        <div className="flex rounded gap-8 flex-wrap py-10">
          {games.map((game) => (
            <GameCard
              key={game._id}
              gameName={game.name}
              imageUrl={game.images[0].url}
              price={game.price}
              slug={game.slug.current}
              buyLink={game.buyLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Games;

const classNames = {
  section: "lg:pb-36 px-4 lg:px-36 text-white",
  heading: "text-3xl lg:text-4xl font-bold mb-3",
  subHeading: "text-2xl md:text-4xl mb-3 md:mb-5 text-black",
};
