// LandingPage.js

import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to ABC Pharmacy</h1>
        <p>Your trusted pharmacy for all your healthcare needs.</p>
      </header>
      <section className="cta-section">
        <h2>Manage Items and Create Invoices</h2>
        <p>
          Effortlessly manage your inventory and create invoices with ABC
          Pharmacy.
        </p>
        <Link to="/invoices" className="cta-button">
          Get Started
        </Link>
      </section>
      {/* Additional sections for About, Features, etc. can be added here */}
      <footer>
        <p>&copy; 2023 ABC Pharmacy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
