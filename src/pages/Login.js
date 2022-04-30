import { React, useState } from "react";
import PageTitle from "../components/PageTitle";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const url = process.env.REACT_APP_API_KEY + '/users/login';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    "email": email, 
                    "password": password,
                }),
            });

            let data = await res.json();
            if(res.status === 200) {
                console.log('Success!!!');

                const token = data.token;
                localStorage.setItem('token', token);
                navigate('/user-profile', {state: data.info})
            } else {
                console.log('Some error occured');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className = "w-full flex flex-col items-center font-press-start">
            <div className = "w-80">
                <PageTitle title={"Login"}/>
                <form onSubmit={handleSubmit} className = "flex flex-col justify-center items-center mt-16">
                    <input onChange={(e) => setEmail(e.target.value)} className = "w-full outline-0 h-16 mb-2.5 bg-[#fcfcfc] rounded-md pl-5 text-sm drop-shadow-sm focus:drop-shadow-md transition-shadow" name = "email" type = "email" placeholder = "Email" required/>
                    <input onChange={(e) => setPassword(e.target.value)} className = "w-full outline-0 h-16 mb-16 bg-[#fcfcfc] rounded-md pl-5 text-sm drop-shadow-sm focus:drop-shadow-md transition-shadow" name = "password" type = "password" placeholder = "Password" required/>
                    <input className = "w-full cursor-pointer h-10 bg-[#05C46B] text-white rounded-md text-base" type = "submit" value = "LOGIN"/>
                </form>
            </div>
        </div>
    );
};

export default Login;