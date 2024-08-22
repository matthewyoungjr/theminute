import React from "react";
import { Heading } from "@/components/ui/heading";

const ArticleTitle = ({ title }: { title: string }) => {
  return (
    <Heading
      level={2}
      tracking="wider"
      className="text-wrap mx-2 px-4 mt-3 max-w-2xl md:mx-auto md:text-xl lg:text-2xl"
    >
      {title}
    </Heading>
  );
};

export default ArticleTitle;
