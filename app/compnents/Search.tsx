"use client";

import { Description } from "@/components/ui/field";
import { SearchField } from "@/components/ui/search-field";
import useEverything from "../hooks/useEverything";
import { useQueryState } from 'nuqs';

interface SearchProps {
  onSearch: (term: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [search, setSearch] = useQueryState('q', { defaultValue: ''})
  const handleSearch = (term: string) => {
    setSearch(term)
    onSearch(term)
  };
 

  return (
    <>
      <SearchField
        value={search}
        onChange={handleSearch}
        className="mt-5 mx-5 mb-2 md:w-2/4 md:mx-auto"
        label="Search"
      />
      <Description className="mt-2 md:text-center block mx-5 [&>strong]:text-fg">
        You have typed: <strong>{search ?? "-"}</strong>
      </Description>
    </>
  );
};

export default Search;
