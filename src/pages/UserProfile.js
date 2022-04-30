import { React } from "react";
import { Link, useLocation } from 'react-router-dom';
import PageTitle from "../components/PageTitle";
import User from "../components/User";

const UserProfile = () => {
    if(!localStorage.hasOwnProperty('token')) {
        localStorage.removeItem("token");
        window.location = '/login';
    }

    const location = useLocation();
    const state = location.state;
    const data = state;

    const logout = () => {
        localStorage.removeItem("token");
        window.location = '/login';
    };

    let adminState = false;
    if(data.role.name === 'Manager') adminState = true;

    let allEmployees = [];
    if(adminState) {
        allEmployees.push(
            <div key={1} className = "flex flex-row justify-between items-center border-black/5 border-b h-16">
                <div className = "flex flex-col items-start">
                    <div className = "text-base text-[#222222]">
                        Employees
                    </div>
                    <div className = "text-xs text-[#828282]">
                        All your employees
                    </div>
                </div>
                <Link to="/employees" className = "text-[#828282] ">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                    </svg>
                </Link>
            </div>
        );
    };

    return (
        <div className = "w-full flex flex-col items-center justify-center font-press-start">
            <div className = "w-80 relative">
                <PageTitle title={"Profile"}/>
                <button onClick={logout} className = "absolute top-12 right-1">
                    <svg height='20' fill='#F0463C' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"/>
                    </svg>
                </button>
                <User name={data.name} role={data.role.name} avatar={data.image}/>
                <div className = "flex flex-col">
                    <div className = "flex flex-row justify-between items-center border-black/5 border-y h-16">
                        <div className = "flex flex-col items-start">
                            <div className = "text-base text-[#222222]">
                                My information
                            </div>
                            <div className = "text-xs text-[#828282]">
                                All infromation about me
                            </div>
                        </div>
                        <Link to="/user-information" state={state} className = "text-[#828282] ">
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
                        <Link to="/gate-records" state={state} className = "text-[#828282] ">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                            </svg>
                        </Link>
                    </div>
                    {allEmployees}
                </div>
                <Link to="/qr-code" className = "fixed bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap cursor-pointer py-2.5 px-28 bg-[#05C46B] text-white rounded-md text-base ">
                    SCAN QR-CODE
                </Link>
            </div>
        </div>
    );
};

export default UserProfile;