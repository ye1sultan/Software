import React from "react";
import Avatar from '../assets/Avatar.jpg'

const UserProfile = () => {
    return (
        <div className = "w-full flex flex-col items-center">
            <div className = "w-80">
                <h1 className = "text-4xl self-start mt-24 mb-6">
                    My Profile
                </h1>
                <div className = "flex flex-row mb-5">
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
                <div className = "flex flex-col mb-60">
                    <div className = "flex flex-row justify-between items-center border-black/5 border-y h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                My information
                            </div>
                            <div className = "text-xs text-[#828282]">
                                All infromation about me
                            </div>
                        </div>
                        <button className = "text-[#828282] ">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                            </svg>
                        </button>
                    </div>
                    <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Gate entry records
                            </div>
                            <div className = "text-xs text-[#828282]">
                                All the gate entry records
                            </div>
                        </div>
                        <button className = "text-[#828282] ">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                            </svg>
                        </button>
                    </div>
                    <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Settings
                            </div>
                            <div className = "text-xs text-[#828282]">
                                Change settings
                            </div>
                        </div>
                        <button className = "text-[#828282] ">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <button className = "w-full cursor-pointer h-10 bg-[#05C46B] text-white rounded-md text-base ">
                    SCAN QR-CODE
                </button>
            </div>
        </div>
    );
};

export default UserProfile;