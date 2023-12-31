import { FC } from "react";
import Link from "next/link"; 
import Image from "next/image";

interface SimilarProductCardProps {
    productName: string;
    imageUrl: string;
    slug: string;
    price: number;
    buyLink: string;
  }

const SimilarProductCard:FC<SimilarProductCardProps> = (props) => { 
   const {productName, imageUrl, slug, price, buyLink, } = props

  return (
    <div className={gameCardClassNames.container} >
        <Link href={`/products/${slug}`} className="flex justify-center">
            <Image
                className={gameCardClassNames.image}
                src={imageUrl}
                alt={productName}
                width={90}
                height={90}
            />
        </Link>
        <div className="my-5">
            <p className="text-xs text-center">{productName}</p>
        </div>
    </div>
  )
}

export default SimilarProductCard

const gameCardClassNames = {
    container: "flex flex-col px-5",
    image: "w-90 h-90 object-cover",
    price:
      "absolute rounded-bl-2xl top-0 right-0 bg-black bg-opacity-75 p-3 text-lg text-white z-10",
    gameName:
      "absolute bottom-0 left-0 right-0 py-3 px-4 text-white text-lg bg-black bg-opacity-75 flex justify-between",
    buyButton: "bg-yellow-300 hover:bg-yellow-700 text-black px-2 font-medium "
  };