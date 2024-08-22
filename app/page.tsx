"use client";
import Link from "next/link";
import NewsCard from "./compnents/NewsCard";
import NewsGrid from "./compnents/NewsGrid";
import { useTopHeadlines } from "./hooks/useTopHeadlines";
import { Loader } from "@/components/ui/loader";

export default function Home() {
  const { data, isLoading, error } = useTopHeadlines();

  return (
    <>
      {isLoading && <Loader size="medium" />}
      {error && <p>{error.message}</p>}
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
