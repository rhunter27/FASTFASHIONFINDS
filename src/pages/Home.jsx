import React from "react";
import "../global.css"; // Ensure global styles are imported
import { FcSearch } from "react-icons/fc"; // Import the search icon

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="home-title zodiak-thin">Welcome to Fast Fashion Finds!</h1>
        <p className="home-subtitle zodiak-thin">
          Discover the latest trends and elevate your style.
        </p>
      </section>

      {/* Search Bar Section */}
      <section className="search-bar-section">
        <div className="search-bar">
          <FcSearch size={24} style={{ marginRight: "0.5rem" }} />
          <input
            type="text"
            placeholder="Search for fashion..."
            className="search-input"
          />
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="featured-categories">
        <h2 className="categories-title">Featured Categories</h2>
        <div className="categories-container">
          <div className="featured-category">
            <h3>Menswear</h3>
            <p>Explore the latest in men's fashion.</p>
          </div>
          <div className="featured-category">
            <h3>Womenswear</h3>
            <p>Discover the latest trends for women.</p>
          </div>
          <div className="featured-category">
            <h3>Streetwear</h3>
            <p>Stay trendy with the latest streetwear.</p>
          </div>
          <div className="featured-category">
            <h3>Fashion Week</h3>
            <p>Get inspired by runway looks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;