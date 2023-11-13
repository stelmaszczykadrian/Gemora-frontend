import React from "react";
import kingsCrownLogo from "../../../assets/brand-logos/kingscrown.jpg";
import crownLogo from "../../../assets/brand-logos/crown.jpg";
import berliansLogo from "../../../assets/brand-logos/berlians.jpg";
import luxuryLogo from "../../../assets/brand-logos/luxury.jpg";
import wonderLogo from "../../../assets/brand-logos/wonder.jpg";
import './LogosGallery.css';

const logoData = [
    { src: kingsCrownLogo, alt: "Kings Crown" },
    { src: crownLogo, alt: "Crown" },
    { src: berliansLogo, alt: "Berlians" },
    { src: luxuryLogo, alt: "Luxury" },
    { src: wonderLogo, alt: "Wonder" },
];

const LogosGallery = () => {
    return (
        <>
            <div className="logos-container">
                {logoData.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} className="scale-element logo-image" />
                ))}
            </div>
        </>
    );
};

export default LogosGallery;