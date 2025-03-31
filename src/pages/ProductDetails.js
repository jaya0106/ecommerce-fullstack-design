import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"; // Custom styles

const productsData = [
  { id: 1, name: "Product 1", price: "$99.99", image: "https://via.placeholder.com/400", description: "This is an amazing product." },
  { id: 2, name: "Product 2", price: "$79.99", image: "https://via.placeholder.com/400", description: "This product is worth buying." },
  { id: 3, name: "Product 3", price: "$49.99", image: "https://via.placeholder.com/400", description: "High quality and durable." },
  { id: 4, name: "Product 4", price: "$89.99", image: "https://via.placeholder.com/400", description: "You will love this product." },
  { id: 5, name: "Product 5", price: "$59.99", image: "https://via.placeholder.com/400", description: "Best in the market." },
  { id: 6, name: "Product 6", price: "$109.99", image: "https://via.placeholder.com/400", description: "Highly recommended!" },
  { id: 7, name: "Product 7", price: "$99.99", image: "https://via.placeholder.com/400", description: "This is an amazing product." },
  { id: 8, name: "Product 8", price: "$79.99", image: "https://via.placeholder.com/400", description: "This product is worth buying." },
  { id: 9, name: "Product 9", price: "$49.99", image: "https://via.placeholder.com/400", description: "High quality and durable." },
  { id: 10, name: "Product 10", price: "$89.99", image: "https://via.placeholder.com/400", description: "You will love this product." },
  { id: 11, name: "Product 11", price: "$59.99", image: "https://via.placeholder.com/400", description: "Best in the market." },
  { id: 12, name: "Product 12", price: "$109.99", image: "https://via.placeholder.com/400", description: "Highly recommended!" },
];

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid product-image" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
