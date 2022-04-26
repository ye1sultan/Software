import React from "react";
import Avatar from '../assets/Avatar.jpg';
import '../assets/scrollbar.css';

const Settings = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80">
                <h1 className = "text-4xl self-start mt-24 mb-16 ">
                    Employees
                </h1>
                
                <div className = "h-96 flex flex-col overflow-y-auto ">
                    <div className = "flex flex-row items-center border-black/5 border-y py-2">
                        <img className = "rounded-full w-16 mr-5" src = {Avatar} alt = "Profile" />
                        <div className = "flex flex-col justify-center">
                            <h3 className = "text-lg text-[#222222]">
                                Ismagambetova Dinara 
                            </h3>
                            <h4 className = "text-sm text-[#828282]">
                                Admin
                            </h4>   
                        </div>
                    </div>
                    <div className = "flex flex-row items-center border-black/5 border-b py-2">
                        <img className = "rounded-full w-16 mr-5" src = {Avatar} alt = "Profile" />
                        <div className = "flex flex-col justify-center">
                            <h3 className = "text-lg text-[#222222]">
                                Ismagambetova Dinara 
                            </h3>
                            <h4 className = "text-sm text-[#828282]">
                                Admin
                            </h4>   
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

export default Settings;