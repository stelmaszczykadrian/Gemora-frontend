import React from "react";
import {Link} from "react-router-dom";

export interface Category {
    name: string;
    path: string;
    image: string;
}

const FeaturedCategory: React.FC<Category> = ({ name, path, image }) => (
    <div className="featured-category">
        <Link onClick={() => window.scrollTo(0, 0)} to={path}>
            <div className="category-overlay"></div>
            <img className="category-img" src={image} alt={name} />
            <p className="category-description">{name}</p>
        </Link>
    </div>
);

export default FeaturedCategory;