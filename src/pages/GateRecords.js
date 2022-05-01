import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PrevPage from '../components/PrevousPage';
import PageTitle from "../components/PageTitle";
import User from "../components/User";
import '../assets/scrollbar.css';

const GateRecords = () => {
    if(!localStorage.hasOwnProperty('token')) {
        localStorage.removeItem("token");
        window.location = '/login';
    }

    const location = useLocation();
    const state = location.state;

    const url = process.env.REACT_APP_API_KEY + '/records';
    const token = localStorage.getItem('token');
    const contentType = 'Bearer ';

    const [records, setRecords] = useState({});
    
    useEffect(() => {
        fetch(url, {
                method: 'GET',
                headers: { 'Authorization': contentType + token }
                })
            .then(response => response.json())
            .then(data => {
                setRecords(data.records);
            });
    }, [url, token]);

    let recordsList = [];
    Array.from(records).forEach((element, index) => {
        recordsList.push(
            <div key={index} className = "flex flex-row justify-between items-center border-black/5 border-b h-12 gap-4 py-4">
                <div className = "text-base mr-7">
                    {
                        element.entry_time.slice(0, 11).replaceAll('-', '/')

                    }
                </div>
                <div className="flex flex-row justify-end w-full mr-10">
                    <div className = "text-base mr-10">
                        {element.entry_time.slice(11, 16)}
                    </div>
                    <div className = "text-base ">
                        {element.exit_time.slice(11, 16)}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className = "w-full flex flex-col items-center font-press-start">
            <div className = "w-80">
                <PageTitle  title={"Gate Records"}/>
                <User 
                    name={localStorage.getItem('name')} 
                    role={localStorage.getItem('role')} 
                    avatar={localStorage.getItem('avatar')}/>
                <div className = "h-96 flex flex-col overflow-y-scroll ">
                    <div className = "flex flex-row justify-between items-center border-black/5 border-y h-12 gap-4 py-4">
                        <div className = "text-base mr-7">
                            Date
                        </div>
                        <div className="flex flex-row justify-end w-full mr-6">
                            <div className = "text-base mr-4">
                                Entry time
                            </div>
                            <div className = "text-base">
                                Exit time
                            </div>
                        </div>
                    </div>
                    {recordsList}
                </div>
                <PrevPage />
            </div>
        </div>
    );
};

export default GateRecords;