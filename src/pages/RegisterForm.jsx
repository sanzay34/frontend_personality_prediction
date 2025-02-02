import React from "react";
import Horizontaline from "../components/Horizontaline";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/Homepage")
  }
	return (
		<div className=" h-screen text-white">
			<Horizontaline extrastyles="mt-12"></Horizontaline>
			<div onClick={handleHomeClick} className="absolute top-10 left-[58px] text-2xl cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
				Home
			</div>
		</div>
	);
};
export default RegisterForm;
