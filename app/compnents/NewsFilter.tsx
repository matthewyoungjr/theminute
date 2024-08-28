import React from "react";
import { Select } from "@/components/ui/select";

interface CountryProp {
  id: number;
  name: string;
}

const countries: CountryProp[] = [
  { id: 1, name: "United States" },
  { id: 2, name: "United Kingdom" },
  { id: 3, name: "France" },
  { id: 4, name: "Nigeria" },
];

const NewsFilter = () => {
  return (
    <>
      <div className="mt-5 ml-7 w-5/6 md:w-2/5 lg:w-80">
        <Select label="Country">
          <Select.Trigger />
          <Select.List items={countries}>
            {(country) => (
              <Select.Option id={country.id} textValue={country.name}>
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
