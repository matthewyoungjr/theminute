import { useSingle } from "../hooks/useSingle";
import { newsTitleProps } from "../types/newsType";
import ArticleImage from "./ArticleImage";
import ArticlePublisherInfo from "./ArticlePublisherInfo";
import ArticleTitle from "./ArticleTitle";
import ContentArea from "./ContentArea";
import apiClient from "../services/api-client";

type Props = {
  searchParams: {
    q: string;
  };
};

const ContentPage = ({ searchParams: { q } }: Props) => {
  return (
    <>
      <h1>{q}</h1>
    </>
  );
};

export default ContentPage;
