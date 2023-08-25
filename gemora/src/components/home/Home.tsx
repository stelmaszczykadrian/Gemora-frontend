import FeaturedCategories from "./FeaturedCategories";
import Banner from "./Banner";
import img1 from '../../assets/images/img5.jpg'
import img2 from '../../assets/images/img4.jpg'
import img3 from '../../assets/images/img88.jpg'


import LogosGallery from "./LogosGallery";
import RecommendedSlider from "../recommended/RecommendedSlider";
import HeadingWithLines from "./HeadingWithLines";
import React from "react";
import ProudProducts from "./ProudProducts";
import MainBanner from "./MainBanner";


const firstBannerTitle = 'Discover Timeless Elegance with Gemora';
const firstBannerDescription = 'Experience the fusion of artistry and comfort with Gemora\'s meticulously crafted products. Elevate your everyday moments with our exquisite range. Discover enduring style today!'

const secondBannerTitle = "Embrace Harmony with Gemora";
const secondBannerDescription = "Our Gemora products are crafted in standardized sizes, granting you the freedom to mix and match as you please, crafting a style that's distinctly your own.";

const thirdBannerTitle = "Perfect Gifts for Every Occasion";
const thirdBannerDescription = "Gemora offers a range of products perfect for gifting. Each item combines elegance with comfort, making them ideal for special occasions or thoughtful presents. Discover Gemora, where every product is crafted to bring joy and sophistication to everyday life."



const isMainBanner = false;
const isReversedBanner = true;





const Home = () => {
    return <>
        <MainBanner/>
        <HeadingWithLines name="CATEGORIES"/>
        <FeaturedCategories/>
        <Banner reverse={isReversedBanner} img={img1} text={firstBannerDescription} title={firstBannerTitle}/>
        <HeadingWithLines name="SPECIAL PRODUCTS"/>
        <ProudProducts/>
        <Banner reverse={isMainBanner} img={img2} text={secondBannerDescription} title={secondBannerTitle}/>
        <HeadingWithLines name="TOP PRODUCTS"/>
        <RecommendedSlider/>
        <Banner reverse={isReversedBanner} img={img3} text={thirdBannerDescription} title={thirdBannerTitle}/>
        <HeadingWithLines name="BRAND LOGOS"/>
        <LogosGallery/>
    </>;
};

export default Home;