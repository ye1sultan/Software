import React from "react";
import PrevPage from '../components/PrevousPage';
import Employee from "../components/Employee";
import PageTitle from "../components/PageTitle";

const Employees = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-80">
            <PageTitle title={"Employees"}/>
                <div className = "h-96 flex flex-col overflow-y-auto border-black/5 border-t mt-16">
                <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                    <Employee />
                </div>
                <PrevPage />
            </div>
        </div>
    );
};

export default Employees;