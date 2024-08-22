import React, { ReactNode } from "react";
import { Article } from "../types/newsType";
import { openSans } from "../layout";

const ContentArea = ({ content }: { content: string }) => {
  console.log("i");

  return (
    <article className="container mx-auto mt-6 lg:max-w-3xl">
      <p
        className={`font-normal text-lg text-left text-balance leading-8 tracking-normal ${openSans.className}`}
      >
        {content}
      </p>
    </article>
  );
};

export default ContentArea;
