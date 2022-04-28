import React, { useState } from "react";
import {Link} from 'react-router-dom';
import PageTitle from "../components/PageTitle";
import Input from "../components/Input";

const Login = () => {
    const [loginData, setLoginData] = useState({
        id: 0,
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(loginData.id, loginData.password);
    };

    const handleInput = (e) => {
        const copy = { ...loginData };
        copy[e.target.name] = e.target.value;
        setLoginData(copy);
    };

    return (
        <div className = "w-full flex flex-col items-center font-press-start">
            <div className = "w-80">
                <PageTitle title={"Login"}/>
                <form onSubmit={(e) => handleSubmit(e)} className = "flex flex-col justify-center items-center mt-16">
                    <Input onChange={handleInput} value={loginData.id} name={"id"} type={"number"} placeholder={"ID"} />
                    <Input onChange={handleInput} value={loginData.password} name={"password"} type={"password"} placeholder={"Password"} />
                    <Link to="/forgot-password" className = "self-end cursor-pointer h-5 text-sm mb-9 font-semibold ">
                        <div className = "flex flex-row justify-center items-center">
                            <div className = "mr-3">
                                Forgot your password?
                            </div>
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.01 3.00008H1C0.45 3.00008 0 3.45008 0 4.00008C0 4.55008 0.45 5.00008 1 5.00008H12.01V6.79008C12.01 7.24008 12.55 7.46008 12.86 7.14008L15.64 4.35008C15.83 4.15008 15.83 3.84008 15.64 3.64008L12.86 0.850078C12.55 0.530078 12.01 0.760078 12.01 1.20008V3.00008V3.00008Z" fill="#05C46B"/>
                            </svg>
                        </div>
                    </Link>
                    
                    <input className = "w-full cursor-pointer h-10 bg-[#05C46B] text-white rounded-md text-base" type = "submit" value = "LOGIN"/>
                </form>
            </div>
        </div>
    );
};

export default Login;