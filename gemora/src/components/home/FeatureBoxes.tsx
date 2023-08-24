import React from "react";
import './FeatureBoxes.css'
import rocket from "../../assets/svg/rocket.svg";
import headphones from "../../assets/svg/headphones.svg";
import piggyBank from "../../assets/svg/piggy.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureBoxes = () => {
    return (
        <>
            <div className="container">
                <div className="feature-boxes-container">
                    <div className="feature-boxes">
                        <div className="feature-box">
                            <img src={rocket} alt="Rocket Icon SVG"/>
                            <h3>Free Shipping world</h3>
                            <p>
                                Order Above $50.
                            </p>
                        </div>

                        <div className="feature-box">
                            <img src={headphones} alt="Headphones Icon SVG"/>
                            <h3>Best Online support</h3>
                            <p>
                                Hours: 8AM - 8PM
                            </p>
                        </div>

                        <div className="feature-box">
                            <img src={piggyBank} alt="Piggy Bank icon SVG"/>
                            <h3>Money Guarantee</h3>
                            <p>
                                Guaarante 30 days!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FeatureBoxes;