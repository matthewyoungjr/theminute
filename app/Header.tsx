import React from "react";
import { Playfair_Display_SC } from "next/font/google";

const playfair_sc = Playfair_Display_SC({ weight: "700", subsets: ["latin"] });

const Header = ({ title }: { title: string }) => {
  return (
    <h1
      className={`flex justify-center items-center mt-5 text-center text-2xl md:text-3xl tracking-wide ${playfair_sc.className}`}
    >
      {title}
    </h1>
  );
};

export default Header;
