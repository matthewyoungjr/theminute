"use client";
import { Heading } from "@/components/ui/heading";
import Search from "../compnents/Search";
import NewsGrid from "../compnents/NewsGrid";
import useEverything from "../hooks/useEverything";
import { useState } from "react";
import NewsCard from "../compnents/NewsCard";

const Everything = () => {
	const [search, setSearch] = useState<string>("");
	const { data, error } = useEverything({ search });
	const handleOnSearch = (term: string) => setSearch(term);
	return (
		<>
			<Heading
				level={1}
				className="text-center text-4xl md:text-6xl mt-10 ml-5"
			>
				Search
			</Heading>
			<Search onSearch={handleOnSearch} />
			{error && <p className="text-red-500">{error.message}</p>}
			<NewsGrid>
				{data?.map((article) => (
					<NewsCard
						key={article.article_id}
						title={article.title}
						author={article.creator}
						url={article.link}
						date={article.pubDate}
					/>
				))}
			</NewsGrid>
		</>
	);
};

export default Everything;
