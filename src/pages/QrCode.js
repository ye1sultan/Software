import React from "react";
import PrevPage from '../components/PrevousPage';
import PageTitle from "../components/PageTitle";

const QrCode = () => {
    return (
        <div className="w-full flex flex-col items-center font-press-start">
            <div className="w-80">
            <PageTitle title={"QR-Code"}/>
                <div className = "flex justify-center h-4 text-xl mb-10 font-medium mt-16" >
                    SCAN QR-CODE
                </div>
                <PrevPage />
            </div>
        </div>
    );
};

export default QrCode;