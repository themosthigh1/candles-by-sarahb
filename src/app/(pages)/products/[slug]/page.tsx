"use client";

import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";
import SimilarProductCard from "@/components/SimilarProductCard/SimilarProductCard";
import { getGames } from "@/libs/apis";
import Link from "next/link";
import Image from "next/image";

const GameItem = async (props: { params: { slug: string } }) => {
  const games = await getGames();
  const isFeaturedGame = games?.find((game) => game.isFeatured);

  const {
    params: { slug },
  } = props;

  return (
    <>
      <GameDetailsClient slug={slug}>
        <GameDetailsServer slug={slug} />
      </GameDetailsClient>
      {isFeaturedGame && (
        <div className="mb-6">
          <h3 className="text-2xl max-w-3xl text-center mx-auto text-primary-dark pt-12 sm:pt-28 pb-8 sm:pb-16 leading-[125%] sm:leading-[187%]">
          SimilarProducts
          </h3>
          <SimilarProductCard 
            key={isFeaturedGame._id} 
            productName={isFeaturedGame.name} 
            imageUrl={isFeaturedGame.images[0].url} 
            slug={isFeaturedGame.slug.current} 
            price={isFeaturedGame.price} 
            buyLink={isFeaturedGame.buyLink}
          />
        </div>
      )}      
    </>
  );
};

export default GameItem;