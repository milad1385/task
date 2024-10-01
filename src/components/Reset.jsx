import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Reset({productCount}) {
  const [searchParams] = useSearchParams();

  const category = searchParams?.get("category");
  const brand = searchParams?.get("brand");
  const price = searchParams?.get("price");
  const search = searchParams?.get("q");

  const isExsitFilter = category || brand || price || search;
  if (!isExsitFilter) return null;
  return (
    <>
      <Link
        to="/"
        className="bg-red-600 text-white py-2 px-4 cursor-pointer flex items-center justify-center rounded-md"
      >
        Reset Filtering
      </Link>
      <span className="bg-sky-500 text-white  py-2 px-4 cursor-pointer flex items-center justify-center rounded-md">{productCount > 0 ? `${productCount} Product found 🔔` :`Product not found`}</span>
    </>
  );
}

export default Reset;
