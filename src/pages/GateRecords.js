import React from "react";
import Avatar from '../assets/Avatar.jpg';
import PrevPage from '../components/PrevousPage';
import GateRecord from '../components/GateRecord';
import PageTitle from "../components/PageTitle";

const GateRecords = () => {
    return (
        <div className = "w-full flex flex-col items-center font-press-start">
            <div className = "w-80">
            <PageTitle  title={"Gate Records"}/>
                <div className = "flex flex-row mb-5 mt-16">
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
                <div className = "h-96 flex flex-col overflow-y-scroll ">
                    <div className = "flex flex-row justify-between items-center border-black/5 border-y h-12 gap-4 py-4">
                        <div className = "text-base mr-7">
                            Date
                        </div>
                        <div className="flex flex-row justify-end w-full mr-6">
                            <div className = "text-base mr-3">
                                Entry time
                            </div>
                            <div className = "text-base">
                                Exit time
                            </div>
                        </div>
                    </div>
                    <GateRecord />
                    <GateRecord />
                    <GateRecord />
                </div>
                <PrevPage />
            </div>
        </div>
    );
};

export default GateRecords;