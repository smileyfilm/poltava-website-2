import React from 'react';
import loadingGif from "../images/gif/Spinner-1s-200px.gif";
export default function Loading() {
    return (
        <div className="loading">
            <h4>Members Data Loading...</h4>
                <img src={loadingGif} alt="" />

        </div>



    );
}