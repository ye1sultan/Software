import React, { useState } from "react";




const QrCode = () => {
    return (

    <div className="w-full flex flex-col items-center">
        <div className="w-80">
            <h1 className = "text-4xl self-start mt-24 mb-16 ">
                QR-Code
            </h1>
            <form className = "flex flex-col justify-center items-center ">
            <p className = "cursor-pointer h-4 text-xl mb-10 font-medium" >SCAN QR-CODE</p>
            </form>
            <button className = "fixed bottom-5">
                    <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4998 26.5L14.9998 30L-0.000230472 15L14.9998 4.1858e-06L18.4998 3.5L6.99977 15L18.4998 26.5Z" fill="#05C46B"/>
                    </svg>
                </button>
        
        </div>
    </div>
    );
};

export default QrCode;