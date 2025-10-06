import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                style={{
                    position: "fixed",
                    top: "1rem",
                    left: "1rem",
                    background: "#333",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    zIndex: 1100,
                }}
            >
                {isSidebarOpen ? "Close" : "Menu"}
            </button>

            {/* Sidebar */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: isSidebarOpen ? 0 : "-250px", // Slide in/out
                    width: "250px",
                    height: "100%",
                    backgroundColor: "#333",
                    color: "#fff",
                    boxShadow: isSidebarOpen ? "2px 0 5px rgba(0, 0, 0, 0.5)" : "none",
                    transition: "left 0.3s ease",
                    padding: "1rem",
                    zIndex: 1000,
                }}
            >
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/fashionboard" style={{ color: "#fff", textDecoration: "none" }}>
                            FashionBoard
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/fashionweek" style={{ color: "#fff", textDecoration: "none" }}>
                            FashionWeek
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/homegoods" style={{ color: "#fff", textDecoration: "none" }}>
                            HomeGoods
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/moodboard" style={{ color: "#fff", textDecoration: "none" }}>
                            MoodBoard
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/runway" style={{ color: "#fff", textDecoration: "none" }}>
                            Runway
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/streetwear" style={{ color: "#fff", textDecoration: "none" }}>
                            Streetwear
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/menswear" style={{ color: "#fff", textDecoration: "none" }}>
                            Menswear
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/womenswear" style={{ color: "#fff", textDecoration: "none" }}>
                            Womenswear
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/shop-fall-finds" style={{ color: "#fff", textDecoration: "none" }}>
                            Shop Fall Finds
                        </Link>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <Link to="/luxury-brands" style={{ color: "#fff", textDecoration: "none" }}>
                            Luxury Brands
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;