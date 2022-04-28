import React from "react";
import PrevPage from '../components/PrevousPage';
import PageTitle from "../components/PageTitle";
import Input from "../components/Input";

const ForgotPassword = ({}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80">
                <PageTitle title={"Forgot password"}/>
                <form className = "flex flex-col justify-center items-center mt-16">
                    <p className = " h-4 text-sm mb-10 font-medium" >Please, enter your email address. You'll receive a link to  create a new password  via email.</p>
                    <Input name={"email"} type={"email"} placeholder={"Email"} />
                    <input className = "w-full self-start mt-10 mb-16 cursor-pointer h-10 bg-[#05C46B] text-white rounded-md text-base" type = "submit" value = "SEND"/>
                </form>
                <PrevPage />
            </div>
        </div>
    );
};

export default ForgotPassword;