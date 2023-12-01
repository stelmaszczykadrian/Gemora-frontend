import React from "react";
import loadingSVG from "../../../assets/loading.gif";
import './Loading.css';

export default function Loading() {
    return (
        <div className="container">
            <div className="not-found">
                <img src={loadingSVG} alt="Not Found" className="loading-items"/>
                <p>404 - Not Found</p>
            </div>
        </div>
    );
}
