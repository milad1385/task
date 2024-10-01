import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ options, field }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = async (e) => {
    if (e.target.value) {
      searchParams.set(field, e.target.value);
      setSearchParams(searchParams);
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    } else {
      searchParams.delete(field);
      setSearchParams(searchParams);
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  };
  return (
    <select
      value={searchParams.get(field) || ""}
      onChange={handleChange}
      className="w-full md:w-[200px] p-2 rounded-md bg-white"
    >
      <option value="">Choose {field} ...</option>
      {options.map((item) => (
        <option value={item} key={item}>
          {field === "price" && "less than "}
          {item}
        </option>
      ))}
    </select>
  );
}

export default Filter;
