import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNav.css'; // Import your CSS file for styling

const MobileNav: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [activeLevel, setActiveLevel] = useState<number>(0);
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (navRef.current) {
            const transformValue = activeLevel * 100; // Adjust level spacing
            navRef.current.style.transform = `translateX(-${transformValue}px)`;
        }
    }, [activeLevel]);

    const toggleNav = () => {
        setIsNavOpen(prevState => !prevState);
        if (!isNavOpen) setActiveLevel(0); // Reset level when opening menu
    };

    const closeNav = () => {
        setIsNavOpen(false);
        setActiveLevel(0); // Reset level on close
    };

    const openSubLevel = (level: number) => {
        setActiveLevel(level);
    };

    return (
        <nav className={`navbar-mobile ${isNavOpen ? 'nav-open' : ''}`}>
            <div className="container">
                <div className="heading">
                    <div className="left">
                        <div className="navbar-mobile__toggler" onClick={toggleNav}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <a href="index.html" className="logo">
                        <img src="/src/assets/images/logo.png" alt="Royate" />
                    </a>
                    <div className="right">
                        <div className="action">
                            <div className="notify">
                                <img src="/src/assets/images/notify.png" alt="Notification" />
                                <span className="notify-amount">0</span>
                                <div className="widget woocommerce widget_shopping_cart">
                                    <div className="widget_shopping_cart_content">
                                        <ul className="woocommerce-mini-cart cart_list product_list_widget">
                                            <li className="woocommerce-mini-cart-item mini_cart_item clearfix">
                                                <a href="#" className="remove remove_from_cart_button" aria-label="Remove this item">
                                                    <span className="lnr lnr-cross-circle" />
                                                </a>
                                                <a href="#" className="image-holder">
                                                    <img src="/src/assets/images/widget-cart-thumb-1.jpg" className="attachment-shop_thumbnail" alt="Best Brownies" />
                                                    <span className="product-name">Best Brownies</span>
                                                </a>
                                                <span className="quantity">
                                                    <span className="woocommerce-Price-amount amount">$18</span> x1
                                                </span>
                                            </li>
                                            <li className="woocommerce-mini-cart-item mini_cart_item clearfix">
                                                <a href="#" className="remove remove_from_cart_button" aria-label="Remove this item">
                                                    <span className="lnr lnr-cross-circle" />
                                                </a>
                                                <a href="#" className="image-holder">
                                                    <img src="/src/assets/images/widget-cart-thumb-2.jpg" className="attachment-shop_thumbnail" alt="Angela's Awesome" />
                                                    <span className="product-name">Angela's Awesome</span>
                                                </a>
                                                <span className="quantity">
                                                    <span className="woocommerce-Price-amount amount">$28</span> x3
                                                </span>
                                            </li>
                                        </ul>
                                        <p className="woocommerce-mini-cart__total total">
                                            <strong>Subtotal:</strong>
                                            <span className="woocommerce-Price-amount amount">$102</span>
                                        </p>
                                        <p className="woocommerce-mini-cart__total total">
                                            <strong>Total:</strong>
                                            <span className="woocommerce-Price-amount amount color-cdaa7c">$102</span>
                                        </p>
                                        <p className="woocommerce-mini-cart__buttons buttons">
                                            <a href="#" className="button wc-forward view-cart">View cart</a>
                                            <a href="#" className="button checkout wc-forward">Checkout</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <span className="lnr lnr-magnifier search-icon" data-toggle="modal" data-target="#modalSearch" />
                        </div>
                    </div>
                </div>
            </div>
            <nav id="main-nav" ref={navRef}>
                <ul>
                    <li><NavLink to="/menu">Home</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                </ul>
            </nav>
        </nav>
    );
};

export default MobileNav;