import React from "react";
import './FeatureBoxes.css'

interface FeatureBoxProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({icon, title, description}) => {
    return (
        <div>
            <img className="feature-box-img" src={icon} alt={`${title} Icon SVG`}/>
            <h3 className="feature-box-h3">{title}</h3>
            <p className="feature-box-p">{description}</p>
        </div>
    );
};

export default FeatureBox;