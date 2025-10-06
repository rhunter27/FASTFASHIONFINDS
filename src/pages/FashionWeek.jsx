import React from "react";
import "../global.css"; // Ensure global styles are imported

const FashionWeek = () => {
  return (
    <div className="fashionweek-container">
      {/* Title Section */}
      <h1 className="fashionweek-title">Fashion Week Highlights</h1>
      <p className="fashionweek-description">
        Discover the latest trends and collections from top designers around the world.
      </p>

      {/* Featured Events Section */}
      <div className="fashionweek-events">
        <div className="event-card">
          <h3>New York Fashion Week</h3>
          <p>Experience the best of American fashion with top designers and brands.</p>
        </div>
        <div className="event-card">
          <h3>Paris Fashion Week</h3>
          <p>The epitome of elegance and haute couture from the fashion capital of the world.</p>
        </div>
        <div className="event-card">
          <h3>Milan Fashion Week</h3>
          <p>Explore the latest in Italian luxury and cutting-edge designs.</p>
        </div>
      </div>
    </div>
  );
};

export default FashionWeek;