import React from "react";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <h1 className="text-center text-2xl md:text-3xl py-10 font-bold">Milad Shop</h1>
      <ProductList />
    </div>
  );
}

export default App;
