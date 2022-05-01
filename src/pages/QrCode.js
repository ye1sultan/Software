import { React } from "react";
import { useLocation } from 'react-router-dom';
import PrevPage from '../components/PrevousPage';
import PageTitle from "../components/PageTitle";
import Scanner from "../components/Scanner";

const QrCode = () => {
    if(!localStorage.hasOwnProperty('token')) {
        localStorage.removeItem("token");
        window.location = '/login';
    }

    const location = useLocation();
    const state = location.state;

    return (
        <div className="w-full flex flex-col items-center font-press-start">
            <div className="w-80">
                <PageTitle title={"QR-Code"}/>
                <Scanner state={state}/>
                <PrevPage />
            </div>
        </div>
    );
};

export default QrCode;