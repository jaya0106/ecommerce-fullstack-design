// src/pages/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching data
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="container mt-4">Product not found.</div>;
  }

  return (
    <div className="container mt-4">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {product && product.name}
        </li>
      </ol>
    </nav>
    <h2>{product && product.name}</h2>
    {/* ... (product details) ... */}
  </div>
);
}

export default ProductDetails;