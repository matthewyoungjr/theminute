import Image from "next/image";
import React from "react";
import img from "@/public/FCpdqKlWYAU4-hB.jpeg";
import { Avatar } from "@/components/ui/avatar";

const SingleNewsArticle = () => {
  return (
    <>
      <article className="p-3">
        <figure>
          <Image
            className="rounded-md"
            src={img}
            alt="just a test"
            placeholder="blur"
            priority={false}
          />
          <div className="flex justify-between pt-4 text-gray-400">
            <span className="font-bold">Politics</span>
            <time dateTime="2023-02-20" className="font-thin">
              20/02/2023
            </time>
          </div>
          <figcaption className="pt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            aperiam doloremque vel voluptates quam sed aut qui distinctio
            repellat maiores!
          </figcaption>
        </figure>
        <span className="flex items-center space-x-3 pt-4">
          <Avatar size="large" src="https://github.com/irsyadadl.png" />
          <p>BBC</p>
        </span>
      </article>
    </>
  );
};

export default SingleNewsArticle;
