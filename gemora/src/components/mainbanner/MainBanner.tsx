import mainBannerLarge from '../../assets/images/banner.jpg';
import mainBannerSmall from '../../assets/images/mainBannerSmall.jpg';
import './MainBanner.css';


import {useEffect, useState} from "react";

const MainBanner = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const bannerSrc = windowWidth <= 768 ? mainBannerSmall : mainBannerLarge;

    return (
        <div className="main-banner">
            <img src={bannerSrc} alt="Main banner" className="banner-image" />
        </div>
    );
}

export default MainBanner;





