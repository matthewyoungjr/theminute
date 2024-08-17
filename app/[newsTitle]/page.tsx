import { newsTitleProps } from "../types/newsType";
import ArticleImage from "./ArticleImage";

const ArticleContent = ({ params: { newsTitle } }: newsTitleProps) => {
  return (
    <div>
      <ArticleImage />
    </div>
  );
};

export default ArticleContent;
