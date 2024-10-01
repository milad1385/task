import React from "react";
import useGetProducts from "../hooks/useGetProducts";
import EmptyError from "./EmptyError";
import Filtering from "./Filtering";
import Loading from "./Loading";
import Pagination from "./Pagination";
import Product from "./Product";

function ProductList() {
  const { filtredProduct, isLoading, shownProducts, setShownProducts } =
    useGetProducts();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="px-8">
      <Filtering productLength={filtredProduct.length} />
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
