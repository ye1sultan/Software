import React, { useState } from "react";
import {QrReader} from 'react-qr-reader';
import { useNavigate, useLocation } from "react-router-dom";
import adapter from 'webrtc-adapter';

const Scanner = () => {
    const url = process.env.REACT_APP_API_KEY + '/qr/';
    const token = localStorage.getItem('token');
    const contentType = 'Bearer ';

    const [response, setResponse] = useState("No response");
    const navigate = useNavigate();

    const location = useLocation();
    const state = location.state;

    const controller = new AbortController();
    const signal = controller.signal;
    
    const onScan = async (data) => {
        if(!!data) {
            try {
                console.log(response);
                if(response === "No response"){
                    let res = await fetch(url + data, {
                        method: 'GET',
                        headers: { 'Authorization': contentType + token },
                    });

                    let obj = await res.json();
                    
                    if(res.status === 200) {
                        console.log(obj);
                        setResponse("Success!")
                        navigate('/gate-records', {state: obj});
                    } else {
                        navigate('/user-profile', {state: state});
                    }
                }
                
            } catch (error) {
                console.log(error);
            }
        }
    }

    const shadow = {
        boxShadow: "rgb(5 196 107 / 50%) 0px 0px 0px 5px inset"
    }

    return (
        <div className=" flex flex-col justify-center items-center relative">
            <div className="flex justify-center h-4 text-xl font-medium mt-10 mb-6">{response}</div>
            <div className="absolute top-[120px] left-10 z-20 w-60 h-60 border-[50px] border-[#000000]/30 box-border" style={shadow}></div>
            <div className="absolute top-10 left-0 z-10 w-10 h-80 bg-white"></div>
            <div className="absolute top-10 right-0 z-10 w-10 h-80 bg-white"></div>

            <QrReader className="w-80 h-80"
                facingMode={"environment"}
                onResult={(result) => onScan(result)}
                constraints={{
                    facingMode: 'environment'
                }}
                scanDelay={500}
            />

        </div>
    );
};

export default Scanner;
