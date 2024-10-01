import React, { useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import { brands, categories, price } from "../constant";
import Reset from "./Reset";
import { useSearchParams } from "react-router-dom";

function Filtering({ productLength }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");
  return (
    <div className="flex gap-y-5 flex-col-reverse md:flex-row items-center justify-between mb-10">
      <div className="flex w-full flex-col justify-center md:justify-start md:flex-row items-center gap-5">
        <Filter options={brands} field="brand" />
        <Filter options={categories} field="category" />
        <Filter options={price} field="price" />
        <Reset onSearch={setSearchValue} productCount={productLength} />
      </div>
      <Search searchValue={searchValue} onSearch={setSearchValue} />
    </div>
  );
}

export default Filtering;
