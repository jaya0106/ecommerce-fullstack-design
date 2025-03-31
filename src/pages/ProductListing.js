import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductListing.css"; // Custom styles
import product1 from "../assets/images/product1.jpg";


const productsData = [
  { id: 1, name: "Product 1", price: "$99.99", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Product 2", price: "$79.99", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Product 3", price: "$49.99", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Product 4", price: "$89.99", image: "https://via.placeholder.com/300" },
  { id: 5, name: "Product 5", price: "$59.99", image: "https://via.placeholder.com/300" },
  { id: 6, name: "Product 6", price: "$109.99", image: "https://via.placeholder.com/300" },
  { id: 7, name: "Product 7", price: "$99.99", image: "https://via.placeholder.com/300" },
  { id: 8, name: "Product 8", price: "$79.99", image: "https://via.placeholder.com/300" },
  { id: 9, name: "Product 9", price: "$49.99", image: "https://via.placeholder.com/300" },
  { id: 10, name: "Product 10", price: "$89.99", image: "https://via.placeholder.com/300" },
  { id: 11, name: "Product 11", price: "$59.99", image: "https://via.placeholder.com/300" },
  { id: 12, name: "Product 12", price: "$109.99", image: "https://via.placeholder.com/300" },
];
const products = [
    { id: 1, name: "Product 1", price: "$99", image: product1 },
  ];
function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setProducts(productsData);
    }, 500);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">All Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card product-card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-dark">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {products.map((product) => (
        <img key={product.id} src={product.image} alt={product.name} /> ))}
    </div>
  );
}

export default ProductListing;
