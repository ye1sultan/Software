import React from "react";
import Avatar from '../assets/Avatar.jpg'

const MyInformation = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80">
                <h1 className = "text-4xl self-start mt-24 mb-16">
                    Information
                </h1>
                <div className = "flex flex-row mb-5">
                    <img className = "rounded-full w-16 mr-5" src = {Avatar} alt = "Profile" />
                    <div className = "flex flex-col justify-center">
                        <h3 className = "text-lg text-[#222222]">
                            Ismagambetova Dinara 
                        </h3>
                        <h4 className = "text-sm text-[#828282]">
                            Designer
                        </h4>   
                    </div>
                </div>
                <div className = "flex flex-col mb-60">
                    <div className = "flex flex-row justify-between items-center border-black/5 border-y h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Born
                            </div>
                        </div>
                        <div className = "text-base text-[#777777] ">
                            18 November 2001
                        </div>
                    </div>
                    <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                ID
                            </div>
                        </div>
                        <div className = "text-base text-[#777777]">
                            190103266
                        </div>
                    </div>
                    <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Email
                            </div>
                        </div>
                        <div className = "text-base ">
                            ismagambetova161@gmail.com
                        </div>
                    </div>
                    <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Job entry date 
                            </div>
                        </div>
                        <div className = "text-base ">
                            22 Jule 2020
                        </div>
                    </div>
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

export default MyInformation;