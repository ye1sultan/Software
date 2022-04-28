import React from "react";
import Avatar from '../assets/Avatar.jpg';
import {Link} from 'react-router-dom';
import PageTitle from "../components/PageTitle";

const UserProfile = () => {
    return (
        <div className = "w-full flex flex-col items-center font-press-start">
            <div className = "w-80">
            <PageTitle title={"User Profile"}/>
                <div className = "flex flex-row mt-6 mb-5">
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
                <div className = "flex flex-col ">
                    <div className = "flex flex-row justify-between items-center border-black/5 border-y h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                My information
                            </div>
                            <div className = "text-xs text-[#828282]">
                                All infromation about me
                            </div>
                        </div>
                        <Link to="/my-information" className = "text-[#828282] ">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                            </svg>
                        </Link>
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
                        <Link to="/gate-records" className = "text-[#828282] ">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                            </svg>
                        </Link>
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
                        <Link to="/settings" className = "text-[#828282] ">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <Link to="/qr-code" className = "fixed bottom-10 cursor-pointer py-2.5 px-28 bg-[#05C46B] text-white rounded-md text-base ">
                    SCAN QR-CODE
                </Link>
            </div>
        </div>
    );
};

export default UserProfile;