import React from "react";
import {Link} from "react-router-dom";
import './FeaturedCategories.css'

import engagementRingImage from "../../assets/images/engagement-ring.jpg";
import earringsImage from "../../assets/images/earrings.jpg";
import necklaceImage from "../../assets/images/necklace.jpg";
import goldenRingImage from "../../assets/images/golden-ring.jpg";

const FeaturedCategories = () => {
    return (
        <>
            <div>
                <div className="container">
                    <div className="grid-container">
                        <div className="featured-category engagement">
                            <Link to="categories/engagement">
                                <div id="engagement-ring" className="category-overlay"></div>
                                <img className="category-img" src={engagementRingImage} alt="Engagement Ring"/>
                                <p className="category-description">Engagement</p>
                            </Link>
                        </div>
                        <div className="featured-category earrings">
                            <Link to="categories/earrings">
                                <div id="earrings" className="category-overlay"></div>
                                <img className="category-img-earrings" src={earringsImage} alt="Earrings"/>
                                <p className="category-description">Earrings</p>
                            </Link>
                        </div>
                        <div className="featured-category necklaces">
                            <Link to="categories/necklaces">
                                <div id="necklaces" className="category-overlay"></div>
                                <img className="category-img" src={necklaceImage} alt="Necklace"/>
                                <p className="category-description">Necklaces</p>
                            </Link>
                        </div>
                        <div className="featured-category rings">
                            <Link to="categories/rings">
                                <div id="rings" className="category-overlay"></div>
                                <img className="category-img" src={goldenRingImage} alt="Golden Ring"/>
                                <p className="category-description">Rings</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedCategories;