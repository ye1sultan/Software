import React from "react";
import Avatar from '../assets/Avatar.jpg'
import PrevPage from '../components/PrevousPage';
import PageTitle from "../components/PageTitle";

const Settings = () => {
    return (
        <div className = "w-full flex flex-col items-center font-press-start">
            <div className = "w-80 flex flex-col ">
            <PageTitle title={"Settings"}/>
                <div className = "flex flex-col justify-center items-center mt-6 mb-8">
                    <div className = "w-full w-28">
                        <img className = "rounded-full mb-3" src={Avatar} alt="Profile" />
                    </div>
                    <button className = "text-base underline font-semibold">
                        Change profile photo
                    </button>
                </div>
                <div className = "flex flex-col">
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
                <PrevPage />
            </div>
        </div>
    );
};

export default Settings;