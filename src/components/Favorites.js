import { useState, useEffect } from "react";
import Title from "./ui/Title";
import Products from "../api/products.json";
import ProductItem from "./ui/ProductItem";

export default function Favorites() {
  // usestate için
  const [products, setProducts] = useState([]);

  // useeffect için
  useEffect(() => {
    setProducts(Products);
  }, []);
  return (
    <div >
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-1 gap-0.1 rounded-lg overflow-hidden">
        {products.length &&
          products.map((product) => (
            <ProductItem  key={product.id} product={product} />
          ))}
          {/* products.map((product) => {
            if (product.id > 5 || product.id === 1  ) {
        
                return <ProductItem  key={product.id} product={product} />
            }
          })} */}
      </div>
    </div>
  );
}
