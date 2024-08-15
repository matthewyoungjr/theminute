import React from "react";

interface NewsItemProps {
  category?: string;
  datePublished?: string;
  newsTitle?: string;
}

const NewsItem = ({ category, datePublished, newsTitle }: NewsItemProps) => {
  return (
    <>
      <article className="p-4 space-y-2">
        <span className="flex  justify-between items-center">
          <h5 className="font-extrabold text-gray-500">Politics</h5>
          <p className="text-gray-500 font-thin">20/02/2023</p>
        </span>

        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tempora
          eaque reiciendis odio sit aut?
        </h3>
      </article>
    </>
  );
};

export default NewsItem;
