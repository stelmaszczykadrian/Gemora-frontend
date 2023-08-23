import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

interface BannerProps {
    title: string;
    text: string;
    img: string;
    reverse?: boolean;
}

function Banner({ title, text, img, reverse  }: BannerProps) {

    const containerClass = reverse ? "banner-container-reverse" : "banner-container";

    return (
        <div className="banner">
            <div className="container">
                <div className={containerClass}>
                    <div className="text-side">
                        <div className="text">
                            <h2 className="banner-title">{title}</h2>
                            <p className="banner-text">{text}</p>
                            <Link onClick={() => window.scrollTo(0, 0)} to="/">
                                <button className="shop-button">Shop now</button>
                            </Link>
                        </div>
                    </div>
                    <div className="img-side">
                        <img src={img} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;