"use client";

import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";
import SimilarProductCard from "@/components/SimilarProductCard/SimilarProductCard";
import { getGames } from "@/libs/apis";
import Link from "next/link";
import Image from "next/image";

const GameItem = async (props: { params: { slug: string } }) => {
  const games = await getGames();
  const isFeaturedGame = games?.filter((game) => game.isFeatured);

  const {
    params: { slug },
  } = props;

  return (
    <>
      <GameDetailsClient slug={slug}>
        <GameDetailsServer slug={slug} />
      </GameDetailsClient>
      {isFeaturedGame && (
        <div className="flex gap-8 flex-wrap">
        {isFeaturedGame.map((game) => (
          <SimilarProductCard
            key={game._id}
            productName={game.name}
            imageUrl={game.images[0].url}
            slug={game.slug.current}
            price={game.price}
            buyLink={game.buyLink} 
          />
        ))}
      </div>
      )}      
    </>
  );
};

export default GameItem;