"use client";

import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";
import SimilarProductCard from "@/components/SimilarProductCard/SimilarProductCard";
import { getGames } from "@/libs/apis";
import Link from "next/link";
import Image from "next/image";

const GameItem = async (props: { params: { slug: string } }) => {
  const games = await getGames();
  const isFeaturedGame = games?.filter((game) => game.isFeatured );

  const {params: { slug },} = props;

  return (
    <>
      <GameDetailsClient slug={slug}>
        <GameDetailsServer slug={slug} />
      </GameDetailsClient>
      <div className="my-24 flex flex-col">
        <h2 className="text-3xl mb-12 text-center">Similar Products</h2>
        {isFeaturedGame && (
          <div className="flex space-x-4 justify-center">
            {isFeaturedGame.map((game) => (
              <SimilarProductCard
                key={game.name}
                productName={game.name}
                imageUrl={game.images[0].url}
                slug={game.slug.current}
                price={game.price}
                buyLink={game.buyLink} 
              />
            ))}
          </div>
        )}
      </div>      
    </>
  );
};

export default GameItem;