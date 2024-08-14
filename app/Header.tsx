import React from "react";
import { Noto_Serif_JP } from "next/font/google";

const noto = Noto_Serif_JP({ weight: "500", subsets: ["latin"] });

const Header = ({ title }: { title: string }) => {
  return (
    <h1
      className={`flex justify-center items-center mt-5 text-center text-2xl md:text-3xl tracking-wide ${noto.className}`}
    >
      {title}
    </h1>
  );
};

export default Header;
