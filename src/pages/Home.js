import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Custom styling
import banner from "../assets/images/banner.jpg";


function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover the Best Deals</h1>
          <p>Shop your favorite products at the best prices</p>
          <Link to="/products" className="btn btn-dark">Shop Now</Link>
        </div>
      </section>
      return <img src={banner} alt="Homepage Banner" className="banner-img" />;
      return <h1 style={{ color: "var(--primary-color)" }}>Welcome to Our Store</h1>;


      {/* Featured Products */}
      <div className="container mt-5">
        <h2 className="text-center">Featured Products</h2>
        <div className="row">
          {[1, 2, 3].map((id) => (
            <div key={id} className="col-md-4">
              <div className="card product-card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product" />
                <div className="card-body">
                  <h5 className="card-title">Product {id}</h5>
                  <p className="card-text">$99.99</p>
                  <Link to={`/products/${id}`} className="btn btn-dark">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
