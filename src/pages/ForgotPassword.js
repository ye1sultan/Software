import React, { useState } from "react";

const ForgotPassword = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80">
                <h1 className = "text-4xl self-start mt-24 mb-16">
                    Forgot Password
                </h1>

                <form className = "flex flex-col justify-center items-center">
                    <p className = "cursor-pointer h-4 text-sm mb-10 font-medium" >Please, enter your email address. You'll receive a link to  create a new password  via email.</p>
                    <input className = "w-full outline-0 h-16 mb-2.5 bg-[#f2f2f2] rounded-md pl-5" name = "email"type = "email" placeholder = "Email" />
                    <input className = "w-full self-start mt-10 mb-16 cursor-pointer h-10 bg-[#05C46B] text-white rounded-md text-base" type = "submit" value = "SEND"/>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;