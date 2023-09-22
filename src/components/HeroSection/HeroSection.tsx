import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Backgroud from '../../../public/images/headerBackground.png'

import heroClassNames from "./heroClassNames";

const heroText = '"The Redolence of Country Life."'
const HeroSection: FC<{ showLink?: boolean }> = (props) => {
  const { showLink } = props;

  return (
    
    <div
    className="h-screen flex"
    style={{
      backgroundImage: `url('/images/headerBackground.png')`, // Replace with your image source
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '610px',
    }}
  >
    <div className="text-white container mx-auto px-10 my-auto">
      <h1 className="text-3xl lg:text-5xl mb-4 ">
        Candles By Sarah B.
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 text-yellow-300">
        {heroText}
      </p>
      <button className="bg-black flex  hover:bg-yellow-300 text-white hover:text-black py-2 px-4
      transition-all duration-200">
      <Link href={`/products`}>Products</Link>
			</button>

    </div>
  </div>
  );
};

export default HeroSection;
