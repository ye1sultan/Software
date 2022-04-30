import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import PrevPage from '../components/PrevousPage';
import PageTitle from "../components/PageTitle";
import '../assets/scrollbar.css';

const Employees = () => {
    if(!localStorage.hasOwnProperty('token')) {
        localStorage.removeItem("token");
        window.location = '/login';
    }

    const url = process.env.REACT_APP_API_KEY + '/users';
    const token = localStorage.getItem('token');
    const contentType = 'Bearer ';

    const [employees, setEmployees] = useState({});
    
    useEffect(() => {
        fetch(url, {
                method: 'GET',
                headers: { 'Authorization': contentType + token }
                })
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
            });
    }, [url, token]);

    let employeeList = [];
    Array.from(employees).forEach((element, index) => {
        employeeList.push(
            <div key={index} className = "flex flex-row items-center border-black/5 border-b py-2 relative">
                <img className = "rounded-full w-16 mr-5" src = {element.image} alt = "Profile" />
                <div className = "flex flex-col justify-center">
                    <h3 className = "text-lg text-[#222222]">
                        {element.name}
                    </h3>
                    <h4 className = "text-sm text-[#828282]">
                        {element.email}
                    </h4>   
                </div>
                <Link to="/user-information" state={element} className = "absolute right-3 text-[#828282]">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z" fill="#828282"/>
                    </svg>
                </Link>
            </div>
        );
    });

    return (
        <div className="w-full flex flex-col items-center font-press-start">
            <div className="w-80">
                <PageTitle title={"Employees"}/>
                <div className = "h-96 flex flex-col overflow-y-auto border-black/5 border-t mt-16">
                    {employeeList}
                </div>
                <PrevPage />
            </div>
        </div>
    );
};

export default Employees;