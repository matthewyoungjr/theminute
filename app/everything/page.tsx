import { Heading } from "@/components/ui/heading";
import NewsFilter from "../compnents/NewsFilter";
import Search from "../compnents/Search";

const Everything = () => {
  return (
    <>
      <Heading level={1} className="text-6xl mt-10 ml-5 md:text-center">
        Everything
      </Heading>
      <Search />
    </>
  );
};

export default Everything;
