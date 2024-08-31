"use client";

import { Description } from "@/components/ui/field";
import { SearchField } from "@/components/ui/search-field";
import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState<string>("");
  const handleSearch = (term: string) => {
    setValue(term);
  };

  return (
    <>
      <SearchField
        value={value}
        onChange={handleSearch}
        className="mt-5 mx-5 mb-2"
        label="Search"
      />
      <Description className="mt-2 block mx-5 [&>strong]:text-fg">
        You have typed: <strong>{value ?? "-"}</strong>
      </Description>
    </>
  );
};

export default Search;
