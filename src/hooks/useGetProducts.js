import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../constant";

function useGetProducts() {
  const [products, setProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);
  const [filtredProduct, setFiltredProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams?.get("category");
  const brand = searchParams?.get("brand");
  const price = searchParams?.get("price");
  const search = searchParams?.get("q");

  useEffect(() => {
    const getAllProducts = async () => {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/products`);
      const result = await res.json();
      setIsLoading(false);
      setProducts(result);

      applyFilter(result);
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    applyFilter(products);
  }, [category, brand, price , search, products]);

  const applyFilter = (productsToFilter) => {
    let filtered = productsToFilter;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (brand) {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    if (price) {
      filtered = filtered.filter((product) => product.price < +price);
    }

    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltredProduct(filtered);
    setShownProducts(filtered);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return {
    filtredProduct,
    shownProducts,
    setShownProducts,
    isLoading,
  };
}

export default useGetProducts;
