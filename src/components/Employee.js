import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/Avatar.jpg';
import '../assets/scrollbar.css';

const Employee = () => {
    let userInfo = {
        fullName: "Ismagambetova Dinara",
        position: "Admin",
        avatarSrc: Avatar,
    };

    return (
        <div className = "flex flex-row items-center border-black/5 border-b py-2 relative">
            <img className = "rounded-full w-16 mr-5" src = {userInfo.avatarSrc} alt = "Profile" />
            <div className = "flex flex-col justify-center">
                <h3 className = "text-lg text-[#222222]">
                    {userInfo.fullName}
                </h3>
                <h4 className = "text-sm text-[#828282]">
                    {userInfo.position}
                </h4>   
            </div>
            <Link to="/user-information" className = "absolute right-3 text-[#828282]">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                </svg>
            </Link>
        </div>
    );
};

export default Employee;