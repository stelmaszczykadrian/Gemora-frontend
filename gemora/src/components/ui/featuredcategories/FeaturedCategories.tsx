import React from "react";
import './FeaturedCategories.css'

import engagementRing from "../../../assets/categories/engagement-rings.jpg";
import bracelets from "../../../assets/categories/bracelets.jpg";
import pendants from "../../../assets/categories/pendants.jpg";
import rings from "../../../assets/categories/rings.jpg";
import earrings from "../../../assets/categories/earrings.jpg";
import gemstones from "../../../assets/categories/gemstones.jpg";
import FeaturedCategory, {Category} from "./FeaturedCategory";

const categories: Category[] = [
    {
        name: "Engagements",
        path: "/products/engagements",
        image: engagementRing,
    },
    {
        name: "Earrings",
        path: "/products/earrings",
        image: earrings,
    },
    {
        name: "Pendants",
        path: "/products/pendants",
        image: pendants,
    },
    {
        name: "Rings",
        path: "/products/rings",
        image: rings,
    },
    {
        name: "Bracelets",
        path: "/products/bracelets",
        image: bracelets,
    },
    {
        name: "Gemstones",
        path: "/products/gemstones",
        image: gemstones,
    },
];


const FeaturedCategories = () => {
    return (
        <div>
            <div className="container">
                <div className="grid-container">
                    {categories.map((category, index) => (
                        <FeaturedCategory
                            key={index}
                            name={category.name}
                            path={category.path}
                            image={category.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategories;