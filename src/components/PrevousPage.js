import React from "react";
import { useNavigate } from 'react-router-dom';

const PrevPage = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className = "fixed bottom-10">
            <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4998 26.5L14.9998 30L-0.000230472 15L14.9998 4.1858e-06L18.4998 3.5L6.99977 15L18.4998 26.5Z" fill="#05C46B"/>
            </svg>
        </button>
    );
};

export default PrevPage;