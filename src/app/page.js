import React from "react";
import ProductTable from "../components/ProductTable";
import { useProductsQuery } from "../utils/useProductsQuery";

export default function HomePage() {
  const { data: products, isLoading, error } = useProductsQuery();

  return (
    <div>
      <h1>Products</h1>
      <ProductTable products={products} isLoading={isLoading} error={error} />
    </div>
  );
}
