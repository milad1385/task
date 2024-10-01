import React from "react";
import { brands, categories, price } from "../constant";
import useGetProducts from "../hooks/useGetProducts";
import EmptyError from "./EmptyError";
import Filter from "./Filter";
import Loading from "./Loading";
import Pagination from "./Pagination";
import Product from "./Product";
import Reset from "./Reset";
import Search from "./Search";

function ProductList() {
  const { filtredProduct, isLoading, shownProducts, setShownProducts } =
    useGetProducts();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="px-8">
      <div className="flex gap-y-5 flex-col-reverse md:flex-row items-center justify-between mb-10">
        <div className="flex w-full flex-col justify-center md:justify-start md:flex-row items-center gap-5">
          <Filter options={brands} field="brand" />
          <Filter options={categories} field="category" />
          <Filter options={price} field="price" />
          <Reset productCount={shownProducts.length} />
        </div>
        <Search />
      </div>
      {shownProducts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {shownProducts.map((product) => (
            <Product {...product} key={product.id} />
          ))}
        </div>
      ) : (
        <EmptyError msg="Products not found Please try again" />
      )}
      {shownProducts && (
        <Pagination
          items={filtredProduct}
          itemsCount={10}
          setItems={setShownProducts}
        />
      )}
    </div>
  );
}

export default ProductList;
