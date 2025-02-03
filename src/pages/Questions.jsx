import React, { useState } from "react";
import Horizontaline from "../components/Horizontaline";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/Button";
const RegisterForm = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate("/Homepage");
    };

    const Questions = () => {
        return (
					<div className="min-h-screen text-white relative mb-10">
						<Horizontaline extrastyles="mt-12"></Horizontaline>
						<div
							onClick={handleHomeClick}
							className="absolute top-[-4px] left-[58px] text-2xl cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent "
						>
							Home
						</div>
					</div>
				);
    }
}
export default Questions