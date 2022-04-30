import { React } from "react";
import { useLocation } from 'react-router-dom';
import PrevPage from '../components/PrevousPage';
import PageTitle from "../components/PageTitle";

const UserInformation = () => {
    if(!localStorage.hasOwnProperty('token')) {
        localStorage.removeItem("token");
        window.location = '/login';
    }

    const location = useLocation();
    const state = location.state;
    const data = state;

    const changeDateFormat = (date) => {
        const monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

        return date.slice(-2) + ' ' + monthNames[parseInt(date.slice(5, 7)) - 1] + ' ' + date.slice(0, 4)
    };
    
    return (
        <div className="w-full flex flex-col items-center font-press-start">
            <div className="w-80">
                <PageTitle title={"Information"}/>
                <div className = "flex flex-col justify-center items-center mt-6 mb-4">
                    <div className = "w-full w-28">
                        <img className = "rounded-full mb-3" src={data.image} alt="Profile" />
                    </div>
                </div>
                <div className = "flex flex-col">
                    <div className = "flex flex-row justify-between items-center border-black/5 border-y h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Full name
                            </div>
                        </div>
                        <div className = "text-base text-[#777777]">
                            {data.name} 
                        </div>
                    </div>
                    <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Role
                            </div>
                        </div>
                        <div className = "text-base text-[#777777]">
                            Painter 
                        </div>
                    </div>
                    <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Born
                            </div>
                        </div>
                        <div className = "text-base text-[#777777]">
                            {changeDateFormat(data.born)} 
                        </div>
                    </div>
                    <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Email
                            </div>
                        </div>
                        <div className = "text-base text-[#777777] ">
                            {data.email} 
                        </div>
                    </div>
                    <div className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                Job entry date 
                            </div>
                        </div>
                        <div className = "text-base text-[#777777]">
                            {changeDateFormat(data.job_entry)} 
                        </div>
                    </div>
                </div>
                <PrevPage />
            </div>
        </div>
    );
};

export default UserInformation;