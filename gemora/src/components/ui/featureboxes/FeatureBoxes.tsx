import React from "react";
import './FeatureBoxes.css'
import rocketLogo from "../../../assets/svg/rocket.svg";
import headphonesLogo from "../../../assets/svg/headphones.svg";
import piggyBankLogo from "../../../assets/svg/piggy.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureBox from "./FeatureBox";

interface Feature {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const featureData: Feature[] = [
    {
        id: 1,
        icon: rocketLogo,
        title: "Free Shipping world",
        description: "Order Above $50."
    },
    {
        id: 2,
        icon: headphonesLogo,
        title: "Best Online support",
        description: "Hours: 8AM - 8PM"
    },
    {
        id: 3,
        icon: piggyBankLogo,
        title: "Money Guarantee",
        description: "Guarantee 30 days!"
    },
];

const FeatureBoxes = () => {
    return (
        <>
            <div className="container">
                <div className="feature-boxes-container">
                    <div className="feature-boxes">
                    {featureData.map((featureBox, index) => (
                        <div className="feature-box" key={featureBox.id}>
                            <FeatureBox key={index} title={featureBox.title} description={featureBox.description} icon={featureBox.icon} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default FeatureBoxes;