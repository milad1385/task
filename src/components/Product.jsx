import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

function Product({
  title,
  price,
  description,
  category,
  image,
  rating,
  brand,
  off,
}) {
  return (
    <div className="bg-white shadow-sm p-2.5 rounded-lg select-none hover:-translate-y-[0.6rem] transition-all cursor-pointer">
      {/* start header */}
      <div className="flex items-center justify-between">
        {off > 0 ? (
          <div className="bg-red-200 font-bold text-red-500 text-sm p-2 rounded-lg font-DanaDemiBold">
            {off}%
          </div>
        ) : (
          <div className="bg-red-200 font-bold text-red-500 text-sm p-2 rounded-lg font-DanaDemiBold">
            Best seller
          </div>
        )}
        <div className="bg-black p-2 rounded-md text-white">{category}</div>
      </div>
      {/* start body */}
      <div className="mt-1.5">
        <a>
          <img
            src={`${image}`}
            alt="product-image6.jpg"
            className="w-[180px] h-[180px] object-contain mx-auto"
          />
        </a>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="font-DanaDemiBold text-sm md:text-base  line-clamp-1">
              {title}
            </h3>
            <div className="flex flex-row-reverse gap-x-2">
              {Array(Math.floor(rating.rate))
                .fill(0)
                .map((score, index) => (
                  <div className="flex" key={index}>
                    <FaStar className="text-yellow-500" />
                  </div>
                ))}
              {Array(5 - Math.floor(rating.rate))
                .fill(0)
                .map((score, index) => (
                  <div className="flex" key={index}>
                    <FaRegStar className="text-yellow-500" />
                  </div>
                ))}
            </div>
          </div>
          <h5 className="text-sm text-gray-400 font-DanaMedium mt-1.5 line-clamp-1">
            {description}
          </h5>
        </div>

        <div className="mt-2 flex items-center justify-between bg-gray-100 p-2 rounded-lg">
          <div className="flex flex-col justify-center font-DanaDemiBold text-sm h-[53px]">
            <span className="font-bold">
              $
              {off
                ? (price - (price * off) / 100).toLocaleString("en-US")
                : price.toLocaleString("en-US")}
              <span className="tracking-tighter mr-1"></span>
            </span>
            {off !== 0 && (
              <span className="mt-2.5 line-through text-gray-400">
                $ {price.toLocaleString("en-US")}
              </span>
            )}
          </div>

          <button className="bg-blue-600 flex items-center justify-center gap-x-1 text-white shadow-blue p-2 rounded-md">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
