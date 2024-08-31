import { Heading } from "@/components/ui/heading";
import Search from "../compnents/Search";
import NewsGrid from "../compnents/NewsGrid";
import useEverything from "../hooks/useEverything";

const Everything = () => {
  return (
    <>
      <Heading
        level={1}
        className="text-center text-4xl md:text-6xl mt-10 ml-5"
      >
        Everything
      </Heading>
      <Search />
    </>
  );
};

export default Everything;
