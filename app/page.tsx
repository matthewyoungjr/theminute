"use client";
import NewsCard from "./compnents/NewsCard";
import NewsGrid from "./compnents/NewsGrid";
import { useTopHeadlines } from "./hooks/useTopHeadlines";
import { Loader } from "@/components/ui/loader";
import NewsFilter from "./compnents/NewsFilter";
import { Heading } from "@/components/ui/heading";
import { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState<string>("fr");

  const { data, isLoading, error } = useTopHeadlines({ country });

  const handleChange = (name: string) => setCountry(name);

  return (
    <>
      <Heading level={1} className="text-6xl mt-10 ml-5 md:text-center">
        Top Headlines
      </Heading>
      {isLoading && <Loader size="medium" />}
      {error && <p>{error.message}</p>}
      <NewsFilter onSelectItem={(item) => handleChange(item)} />
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
