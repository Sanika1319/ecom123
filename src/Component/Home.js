// Home.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import { useContext } from "react"
import { ThemeContext } from "../Context/ThemeContext"

function Home() {
  const {theme :theme1} = useContext(ThemeContext);
 console.log(theme1);
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="hero-title">Welcome to <span>ProductHub</span></h1>
        <p className="hero-subtitle">Premium Products. Seamless Shopping. Just for You.</p>
        <button className="btn explore-btn mt-3">Explore Now</button>
      </section>

{/* Features Section */}
<section className="features-section px-3 py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold">Why Choose <span className="text-primary">ProductHub</span>?</h2>
      <p className="text-muted">Explore our core features designed to serve you better.</p>
    </div>
    <div className="row text-center justify-content-center">
      <div className="col-md-4 mb-4">
        <div className="feature-card-glass p-4 h-100">
          <div className="icon-wrapper bg-primary mb-3">
            <i className="bi bi-truck fs-2 text-white"></i>
          </div>
          <h5 className="fw-semibold">Fast Delivery</h5>
          <p className="text-muted">Lightning-fast delivery to your doorstep across the country.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="feature-card-glass p-4 h-100">
          <div className="icon-wrapper bg-danger mb-3">
            <i className="bi bi-gem fs-2 text-white"></i>
          </div>
          <h5 className="fw-semibold">Premium Quality</h5>
          <p className="text-muted">Only the finest products, verified and rated by our users.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="feature-card-glass p-4 h-100">
          <div className="icon-wrapper bg-success mb-3">
            <i className="bi bi-lock fs-2 text-white"></i>
          </div>
          <h5 className="fw-semibold">Secure Checkout</h5>
          <p className="text-muted">Encrypted payments and 24/7 fraud protection guaranteed.</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="cta-section text-center text-white py-5">
        <h2 className="mb-3">Join the ProductHub Community</h2>
        <p className="mb-4">Discover more. Save more. Shop smarter.</p>
        <button className="btn btn-light btn-lg rounded-pill">Get Started</button>
      </section>
    </div>
  );
}

export default Home;

// function Home(){
//   // const context = useContext(ThemeContext);
//   // console.log(context);
//   
//   return(<>
//     <p>Home Page</p>
//   </>)
// }
// export default Home ;