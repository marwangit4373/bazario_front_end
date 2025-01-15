import React from "react";
import ProductDetails from "./ProductDetails";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductList: React.FC = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "Laptop",
      price: 999.99,
      description: "A high-performance laptop for all your needs.",
      image: "https://via.placeholder.com/300",
    },
    {
      id: "2",
      name: "Headphones",
      price: 199.99,
      description: "Noise-cancelling headphones for immersive sound.",
      image: "https://via.placeholder.com/300",
    },
  ];

  const handleAddToCart = (id: string) => {
    console.log(`Product with id ${id} added to cart.`);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {products.map((product) => (
        <ProductDetails
          key={product.id}
          {...product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
