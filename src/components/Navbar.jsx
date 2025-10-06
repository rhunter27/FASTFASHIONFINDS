import React, { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci'; // Import the menu icon
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav style={{
                padding: '1rem',
                backgroundColor: '#333',
                color: '#fff',
                position: 'relative',
                zIndex: 1100
            }}>
                <ul style={{
                    display: 'flex',
                    alignItems: 'center',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0
                }}>
                    {/* Menu Icon */}
                    <li
                        style={{
                            marginRight: '1rem',
                            cursor: 'pointer',
                            zIndex: 1101
                        }}
                        onClick={toggleSidebar}
                    >
                        <CiMenuKebab size={24} color="#fff" />
                    </li>
                </ul>

                {/* Message Ticker */}
                <div style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    marginTop: '1rem',
                    color: '#fff',
                    fontSize: '1rem',
                    fontFamily: 'Arial, sans-serif',
                    position: 'relative',
                    height: '1.5rem'
                }}>
                    <p style={{
                        display: 'inline-block',
                        animation: 'scrollText 10s linear infinite',
                        whiteSpace: 'nowrap'
                    }}>
                        Discover the latest trends in fashion! ✨ | Explore Menswear, Womenswear, and Streetwear! 👗 | Stay stylish with Fast Fashion Finds! 🛍️
                    </p>
                </div>
            </nav>

            {/* Sidebar */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: isSidebarOpen ? 0 : '-250px', // Slide in/out
                width: '250px',
                height: '100%',
                backgroundColor: '#333',
                color: '#fff',
                boxShadow: isSidebarOpen ? '2px 0 5px rgba(0, 0, 0, 0.5)' : 'none',
                transition: 'left 0.3s ease, box-shadow 0.3s ease',
                padding: '1rem',
                zIndex: 1000
            }}>
                <button
                    onClick={toggleSidebar}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        marginBottom: '1rem'
                    }}
                >
                    Close
                </button>
                <ul style ={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                            Home
                        </Link>
                    </li>
                </ul>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <Link to="/menswear" style={{ color: '#fff', textDecoration: 'none' }}>
                            Menswear
                        </Link>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <Link to="/womenswear" style={{ color: '#fff', textDecoration: 'none' }}>
                            Womenswear
                        </Link>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <Link to="/streetwear" style={{ color: '#fff', textDecoration: 'none' }}>
                            Streetwear
                        </Link>
                    </li>

                </ul>
                    

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <Link to="/luxury-brands" style={{ color: '#fff', textDecoration: 'none' }}>
                            Luxury Brands
                        </Link>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <Link to="/fashionweek" style={{ color: '#fff', textDecoration: 'none' }}>
                            Fashion Week
                        </Link>
                    </li>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <Link to="/fashionboard" style={{ color: '#fff', textDecoration: 'none' }}>
                            FashionBoard
                        </Link>
                    </li>
                </ul>
                    <li style={{ marginBottom: '1rem' }}>
                        <Link to="/homegoods" style={{ color: '#fff', textDecoration: 'none' }}>
                            HomeGoods
                        </Link>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <Link to="/moodboard" style={{ color: '#fff', textDecoration: 'none' }}>
                            MoodBoard
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;