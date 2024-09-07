"use client";
import NewsCard from "./compnents/NewsCard";
import NewsGrid from "./compnents/NewsGrid";
import { useTopHeadlines } from "./hooks/useTopHeadlines";
import { Loader } from "@/components/ui/loader";
import NewsFilter from "./compnents/NewsFilter";
import { Heading } from "@/components/ui/heading";
import { useState } from "react";
import type { Key } from "react-aria";

export default function Home() {
  const [country, setCountry] = useState<Key>("fr");

  const { data, isLoading, error } = useTopHeadlines({ country });

  const handleChange = (name: Key) => setCountry(name);

  return (
    <>
      <Heading
        level={1}
        className="text-4xl md:text-6xl mt-10 ml-5 text-center"
      >
        Top Headlines
      </Heading>
      <NewsFilter onSelectItem={(item) => handleChange(item)} />
      {isLoading && <Loader size="medium" />}
      {error && <p className="text-red-500">{error.message}</p>}
      <NewsGrid>
        {data?.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            author={article.author}
            url={article.url}
          />
        ))}
      </NewsGrid>
    </>
  );
}
