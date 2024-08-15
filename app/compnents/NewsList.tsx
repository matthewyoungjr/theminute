import { IconChevronLgRight } from "justd-icons";
import React from "react";
import NewsItem from "./NewsItem";

const NewsList = ({ category }: { category: string }) => {
  return (
    <section className="container space-y-3">
      <div className="flex justify-between items-center">
        <span>Politics</span>
        <IconChevronLgRight />
      </div>

      <div className="border border-gray-300 rounded divide-y-2 px-2">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </section>
  );
};

export default NewsList;
