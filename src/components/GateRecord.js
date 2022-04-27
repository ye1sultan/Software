import React from 'react';
import '../assets/scrollbar.css';

const GateRecord = () => {
    let recordInfo  = {
        recordDate: "21.09.2020",
        entryTime: "10:00",
        exitTime: "15:30"
    };

    return (
        <div className = "flex flex-row justify-between items-center border-black/5 border-b h-12 gap-4 py-4">
            <div className = "text-base mr-7">
                {recordInfo.recordDate}
            </div>
            <div className="flex flex-row justify-evenly w-full">
                <div className = "text-base">
                    {recordInfo.entryTime}
                </div>
                <div className = "text-base ">
                    {recordInfo.exitTime}
                </div>
            </div>
        </div>
    );
};

export default GateRecord;