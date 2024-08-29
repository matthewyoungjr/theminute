"use client";
import { useState } from "react";
import { Select } from "@/components/ui/select";
import { Key } from "react-aria";

interface Props {
  onSelectItem: (item: Key) => void;
}

const countries = [
  { sh: "us", name: "United States" },
  { sh: "gb", name: "United Kingdom" },
  { sh: "fr", name: "France" },
  { sh: "ng", name: "Nigeria" },
];

const NewsFilter = ({ onSelectItem }: Props) => {
  const [value, setValue] = useState<Key>("");

  return (
    <>
      <div className="mt-5 ml-7 w-5/6 md:w-2/5 lg:w-80">
        <Select
          label="Country"
          placeholder="Select a country"
          onSelectionChange={(slc) => onSelectItem(slc)}
        >
          <Select.Trigger />
          <Select.List items={countries}>
            {(country) => (
              <Select.Option id={country.sh} textValue={country.name}>
                {country.name}
              </Select.Option>
            )}
          </Select.List>
        </Select>
      </div>
    </>
  );
};

export default NewsFilter;
