import React from "react";
import { useCart } from "../../context/CartContext";

interface ProductDetailsProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 });
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", maxWidth: "300px" }}>
      <img src={image} alt={name} style={{ width: "100%" }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>${price.toFixed(2)}</h3>
      <button
        onClick={handleAddToCart}
        style={{ background: "green", color: "white", padding: "10px 20px" }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
