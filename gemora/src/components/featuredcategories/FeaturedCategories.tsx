import React from "react";
import {Link} from "react-router-dom";
import './FeaturedCategories.css'

import engagementRing from "../../assets/categories/engagement-rings.jpg";
import bracelets from "../../assets/categories/bracelets.jpg";
import pendants from "../../assets/categories/pendants.jpg";
import rings from "../../assets/categories/rings.jpg";
import earrings from "../../assets/categories/earrings.jpg";
import gemstones from "../../assets/categories/gemstones.jpg";

const FeaturedCategories = () => {
    return (
        <>
            <div>
                <div className="container">
                    <div className="grid-container">
                        <div className="featured-category">
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to="/products/engagements">
                                <div id="rings" className="category-overlay"></div>
                                <img className="category-img" src={engagementRing} alt="Engagement rings"/>
                                <p className="category-description">Engagements</p>
                            </Link>
                        </div>
                        <div className="featured-category">
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to="/products/earrings">
                                <div id="rings" className="category-overlay"></div>
                                <img className="category-img" src={earrings} alt="Earrings"/>
                                <p className="category-description">Earrings</p>
                            </Link>
                        </div>
                        <div className="featured-category">
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to="/products/pendants">
                                <div id="rings" className="category-overlay"></div>
                                <img className="category-img" src={pendants} alt="Pendants"/>
                                <p className="category-description">Pendants</p>
                            </Link>
                        </div>
                        <div className="featured-category">
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to="/products/rings">
                                <div id="rings" className="category-overlay"></div>
                                <img className="category-img" src={rings} alt="Rings"/>
                                <p className="category-description">Rings</p>
                            </Link>
                        </div>
                        <div className="featured-category">
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to="/products/bracelets">
                                <div id="rings" className="category-overlay"></div>
                                <img className="category-img" src={bracelets} alt="Bracelets"/>
                                <p className="category-description">Bracelets</p>
                            </Link>
                        </div>
                        <div className="featured-category">
                            <Link
                                onClick={() => window.scrollTo(0, 0)}
                                to="/products/gemstones">
                                <div id="rings" className="category-overlay"></div>
                                <img className="category-img" src={gemstones} alt="Gemstones"/>
                                <p className="category-description">Gemstones</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedCategories;