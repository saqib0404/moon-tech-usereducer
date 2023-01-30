import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const { state: { loading, products, error, msg } } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading.......</p>
  }

  if (error) {
    content = <p>{msg}</p>
  }

  if (!loading && !error && products.data?.length === 0) {
    content = <p>No Products available!!</p>
  }

  if (products.data?.length > 0) {
    content = products.data.filter(product => product.rating > 3).map((product,idx) => <ProductCard key={idx} product={product}></ProductCard>)
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default TopRated;
