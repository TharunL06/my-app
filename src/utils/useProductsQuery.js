import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => {
  return useQuery("products", async () => {
    const response = await fetch("https://dummyjson.com/products");
    console.log("Response:", response);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Network response was not ok: ${text}`);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new Error("Failed to parse response as JSON");
    }
  });
};
