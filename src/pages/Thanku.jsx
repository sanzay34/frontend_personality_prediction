import React from 'react'
import Horizontaline from '../components/Horizontaline'
import { useNavigate } from "react-router-dom";

const Thanku = () => {
    const navigate = useNavigate();
        const handleHomeClick = () => {
            navigate("/Homepage");
        };
  return (
		<div className="min-h-screen text-white relative mb-10 px-4 sm:px-8">
			<Horizontaline extrastyles="mt-12" />
			<div
				onClick={handleHomeClick}
				className="absolute top-[-4px] left-[98px] text-xl md:text-2xl cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent"
			>
				Home
			</div>
		</div>
	);
}

export default Thanku