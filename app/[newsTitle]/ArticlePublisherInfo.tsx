import { Heading } from "@/components/ui/heading";
import React from "react";

const ArticlePublisherInfo = ({
  source,
  publishedAt,
}: {
  source: string;
  publishedAt: string;
}) => {
  return (
    <Heading
      level={4}
      tracking="wider"
      className="text-gray-500 text-left text-pretty mx-2 px-4 mt-3 max-w-2xl md:mx-auto md:text-xl"
    >
      {source} • {publishedAt}
    </Heading>
  );
};

export default ArticlePublisherInfo;
