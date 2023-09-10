import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import gameCardClassNames from "./gameCardClassNames";

interface GameCardProps {
  gameName: string;
  imageUrl: string;
  slug: string;
  price: number;
  buyLink: string
}

const GameCard: FC<GameCardProps> = (props) => {
  const { gameName, imageUrl, slug, price, buyLink } = props;
  return (
    <div className={gameCardClassNames.container}>
      <Link href={`/products/${slug}`}>
        <h3 className={gameCardClassNames.price}>{price} $</h3>

        <Image
          className={gameCardClassNames.image}
          src={imageUrl}
          alt={gameName}
          width={400}
          height={400}
        />
      </Link>
      <div className={gameCardClassNames.gameName}>{gameName}
      <Link href={buyLink}>
        <button className={gameCardClassNames.buyButton}>Buy</button>
      </Link>
      </div>
    </div>
  );
};

export default GameCard;
