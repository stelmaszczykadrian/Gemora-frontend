import FeaturedCategories from "../components/featuredcategories/FeaturedCategories";
import Banner from "../components/banner/Banner";
import engagementRingImage from '../assets/images/engagement-ring.jpg'
import necklaceImage from '../assets/images/necklace.jpg'
import giftImage from '../assets/images/gift.jpg'

import LogosGallery from "../components/logosgallery/LogosGallery";
import RecommendedSlider from "../components/product/recommendedslider/RecommendedSlider";
import HeadingWithLines from "../components/headingwithlines/HeadingWithLines";
import React from "react";
import ProudProducts from "../components/product/proudproducts/ProudProducts";
import MainBanner from "../components/mainbanner/MainBanner";


const firstBannerTitle = 'Timeless Elegance with Gemora';
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
        <Banner reverse={isReversedBanner} img={engagementRingImage} text={firstBannerDescription} title={firstBannerTitle}/>
        <HeadingWithLines name="SPECIAL PRODUCTS"/>
        <ProudProducts/>
        <Banner reverse={isMainBanner} img={necklaceImage} text={secondBannerDescription} title={secondBannerTitle}/>
        <HeadingWithLines name="TOP PRODUCTS"/>
        <RecommendedSlider/>
        <Banner reverse={isReversedBanner} img={giftImage} text={thirdBannerDescription} title={thirdBannerTitle}/>
        <HeadingWithLines name="BRAND LOGOS"/>
        <LogosGallery/>
    </>;
};

export default Home;