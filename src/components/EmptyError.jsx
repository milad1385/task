import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function EmptyError({ msg }) {
  return (
    <div className="bg-red-600 text-sm md:text-2xl rounded-md text-white flex items-center justify-center gap-x-3 py-10">
      <span>{msg}</span>
      <FaMagnifyingGlass />
    </div>
  );
}

export default EmptyError;
