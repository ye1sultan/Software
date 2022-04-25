import React from "react";
import Avatar from '../assets/Dii.jpg'

const Settings = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80">
                <h1 className = "text-4xl self-start mt-24 mb-16 ">
                    Settings
                </h1>
            <div className = " flex flex-row mb-5 justify-center">
            <img className = " rounded-full w-28 mr-5  " src = {Avatar} alt = "Profile" />        
        </div>
        <button className = " underline font-semibold w-full flex flex-col items-center text-base mr-4">
                Change profile photo
        </button>
        <div className = "flex flex-col mb-60">
            <div className = "flex flex-row justify-between items-center border-black/5 border-y h-16">
                <div className = "flex flex-col items-start">
                    <div className = "font-semibold text-base text-[#222222]">
                                Name
                    </div>         
                </div>
                <div className = "text-base text-[#777777] ">
                    Dinara
                </div>
            </div>
            <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                <div className = "flex flex-col items-start">
                    <div className = "font-semibold text-base text-[#222222]">
                        Surname
                    </div>
                </div>
                <div className = "text-base text-[#777777]">
                    Ismagambetova
                </div>
            </div>
            <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                <div className = "flex flex-col items-start">
                    <div className = "font-semibold text-base text-[#222222]">
                        Email
                    </div>
                </div>
                <div className = "text-base ">
                    ismagambetova161@gmail.com
                </div>
            </div>
            <button className = "flex flex-row justify-between items-center border-black/5 border-b h-24 font-semibold ">
                    Change password
            </button>
    </div>
    <button className = "fixed bottom-5">
                    <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4998 26.5L14.9998 30L-0.000230472 15L14.9998 4.1858e-06L18.4998 3.5L6.99977 15L18.4998 26.5Z" fill="#05C46B"/>
                    </svg>
    </button>

        
            </div>
        </div>
    );
};
export default Settings;