import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

function Search({ searchValue, onSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = useDebouncedCallback((value) => {
    if (value.trim()) {
      searchParams.set("q", value.trim());
      searchParams.set("page", 1);
    } else {
      searchParams.delete("q");
    }
    setSearchParams(searchParams);
  }, 300);

  return (
    <div className="flex items-center justify-between bg-white py-2 px-4 w-full md:w-[400px] rounded-md">
      <input
        value={searchValue}
        placeholder="Search Product by Title or description"
        className="bg-transparent placeholder:text-black outline-none border-none w-full text-sm md:text-base"
        onChange={(e) => {
          onSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <FaMagnifyingGlass />
    </div>
  );
}

export default Search;
