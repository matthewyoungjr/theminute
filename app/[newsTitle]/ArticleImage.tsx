import React from "react";
import Image from "next/image";
import luffy from "@/public/FCpdqKlWYAU4-hB.jpeg";

const ArticleImage = ({ imgSrc }: { imgSrc?: string }) => {
  return (
    <div className="mt-20 mx-5 rounded-md overflow-hidden md:mx-auto max-w-2xl">
      <Image
        src={luffy}
        alt="An image of luffy"
        width={700}
        height={500}
        layout="responsive"
      />
    </div>
  );
};

export default ArticleImage;
