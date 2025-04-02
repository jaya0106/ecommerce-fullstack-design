// src/pages/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Stock: {product.stock}</p>
        </div>
        // Example Modification in src/pages/Cart.js

// In the return statement where the table is.
<div className="container mt-4">
  <h2>Your Cart</h2>
  <div className="table-responsive">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* ... */}
      </tbody>
      <tfoot>
        {/* ... */}
      </tfoot>
    </table>
  </div>
</div>
      </div>
    </div>
  );
}

export default ProductDetails;