import NewsList from "./compnents/NewsList";
import SingleNewsArticle from "./compnents/SingleNewsArticle";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header title="Latest News" />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 items-start">
        <SingleNewsArticle />
        <NewsList />
      </div>
    </>
  );
}
