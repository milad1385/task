import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
function Pagination({ items, itemsCount, setItems }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get("page") || 1;

  useEffect(() => {
    let endIndex = itemsCount * page || 1;
    let startIndex = endIndex - itemsCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setItems(paginatedItems);
  }, [page , items]);

  const handlePagination = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  let paginationNumber = Math.ceil(items.length / itemsCount);
  return (
    <>
      <div className="mt-10">
        <ul className="flex items-center justify-center gap-3">
          {Array(paginationNumber)
            .fill(0)
            .map((pagination, index) => (
              <li
                className={`w-10 h-10 rounded-md shadow cursor-pointer  ${
                  index + 1 === +page ? "!bg-blue-600 text-white" : "bg-white"
                }`}
                key={index}
              >
                <div
                  className="w-full h-full flex items-center justify-center text-sm md:text-base"
                  onClick={() => handlePagination(index + 1)}
                >
                  {index + 1}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Pagination;
