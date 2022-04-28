import React from "react";
import Avatar from '../assets/Avatar.jpg'
import PrevPage from '../components/PrevousPage';
import PageTitle from "../components/PageTitle";

const UserInformation = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80">
            <PageTitle title={"My Information"}/>
                <div className = "flex flex-row mb-5 mt-16">
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
                <PrevPage />
            </div>
        </div>
    );
};

export default UserInformation;