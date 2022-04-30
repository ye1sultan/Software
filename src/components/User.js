import React from "react";

const User = ({name, role, avatar}) => {
    return (
        <div className = "flex flex-row mt-16 mb-5">
            <img className = "rounded-full w-16 mr-5" src = {avatar} alt = "Profile" />
            <div className = "flex flex-col justify-center">
                <h3 className = "text-lg text-[#222222]">
                    {name} 
                </h3>
                <h4 className = "text-sm text-[#828282]">
                    {role}
                </h4>   
            </div>
        </div>
    );
};

export default User;