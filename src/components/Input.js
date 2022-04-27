import React from "react";

const Input = ({name, type, placeholder}) => {
    return (
        <input className = "w-full outline-0 h-16 mb-2.5 bg-[#fcfcfc] rounded-md pl-5 text-sm drop-shadow-sm focus:drop-shadow-md transition-shadow" name = {name} type = {type} placeholder = {placeholder} required/>
    );
};

export default Input;