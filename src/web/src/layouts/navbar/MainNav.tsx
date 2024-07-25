import { NavLink } from "react-router-dom";
import ModalSearch from "./ModalSearch";

const MainNav: React.FC = () => {
    return (
        <nav className="navbar-desktop">
            <div className="left">
                <NavLink to="/" className="logo">
                    <img src="/src/assets/Admin/Images/logo.png" alt="Royate" />
                </NavLink>
            </div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="menu">Menu</NavLink></li>
                <li><NavLink to="gallery">Gallery</NavLink></li>
                <li><NavLink to="shop">Shop</NavLink></li>
                <li><NavLink to="blog">Blog</NavLink></li>
                <li><NavLink to="about-us">About Us</NavLink></li>
                <li><NavLink to="contact-us">Contact Us</NavLink></li>
            </ul>
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
                    <ModalSearch />
                </div>
            </div>
        </nav>
    )
}

export default MainNav;