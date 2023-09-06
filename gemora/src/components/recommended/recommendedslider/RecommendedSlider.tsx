import "./RecommendedSlider.css";
import RecommendedItem from "../recommendeditem/RecommendedItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function RecommendedSlider() {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        if (slider !== null) {
            slider.scrollLeft = slider.scrollLeft - 235;
        }
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        if (slider !== null) {
            slider.scrollLeft = slider.scrollLeft + 235;
        }
    };

    return (
        <div className="recommended-slider-container">
            <div className="container">
                <div className="buttons-header">
                    <div className="slider-buttons">
                        <button title="scroll left" onClick={slideLeft}>
                            <i><FontAwesomeIcon icon={faArrowLeft}/></i>
                        </button>
                        <button title="scroll right" onClick={slideRight}>
                            <i><FontAwesomeIcon icon={faArrowRight}/></i>
                        </button>
                    </div>
                </div>
                <div className="row-container" id="slider">
                    <RecommendedItem />
                </div>
            </div>
        </div>
    );
}

export default RecommendedSlider;
