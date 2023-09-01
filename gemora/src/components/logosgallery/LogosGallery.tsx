import React from "react";
import Logo1 from "../../assets/brand-logos/kingscrown.jpg";
import Logo2 from "../../assets/brand-logos/crown.jpg";
import Logo3 from "../../assets/brand-logos/berlians.jpg";
import Logo4 from "../../assets/brand-logos/luxury.jpg";
import Logo5 from "../../assets/brand-logos/wonder.jpg";
import './LogosGallery.css';

const LogosGallery = () => {
    return (
        <>
            <div className="logos-container">
                <img src={Logo1} alt="logo" className="scale-element logo-image"/>
                <img src={Logo2} alt="logo" className="scale-element logo-image"/>
                <img src={Logo3} alt="logo" className="scale-element logo-image"/>
                <img src={Logo4} alt="logo" className="scale-element logo-image"/>
                <img src={Logo5} alt="logo" className="scale-element logo-image"/>
            </div>
        </>
    );
};

export default LogosGallery;