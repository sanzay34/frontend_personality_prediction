import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate()
	const handlePersonalityCheck = () => {
		navigate("/RegisterForm")
	}
	const handleExploreClick = () => {
		document
			.getElementById("explore-section")
			.scrollIntoView({ behavior: "smooth" });
	};
	const handleHomeClick = () => {
		document
			.getElementById("navbar")
			.scrollIntoView({ behavior: "smooth" });
	};
	const handleAboutusClick = () => {
		document
			.getElementById("scroll-section")
			.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className="bg-customGray-50 w-[1600px] h-[500px] ml-[100px] rounded-3xl mb-[50px] relative px-[42px] py-[58px] text-white">
			<div className="px-4 text-white text-center border border-white w-[300px] h-[70px] ">
				<div className="text-5xl font-englebert">Aura Traits</div>
				<div className="text-sm font-englebert tracking-[7px]">
					Personality Predictor
				</div>
			</div>
			<div className="mt-8 text-2xl font-poppins">
				Discover and embrace your unique personality traits.
			</div>
			<div className="flex justify-between w-[50%] absolute bottom-[85px] text-2xl font-poppins font-bold">
				<div onClick={handleHomeClick} className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					Home
				</div>
				<div onClick={handleAboutusClick} className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					About Us
				</div>
				<div onClick={handleExploreClick} className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					Explore
				</div>
				<div
					onClick={handlePersonalityCheck}
					className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent "
				>
					Check your Personality Traits
				</div>
			</div>
			<div className="absolute bottom-[85px] text-xl left-[1325px]">
				auratraits@gmail.com
			</div>
			<div className="absolute bottom-[120px] left-[1300px] flex space-x-9 flex-row">
				{/* Facebook Icon */}
				<FontAwesomeIcon
					icon={faFacebook}
					size="2x"
					className="text-white text-[40px]  cursor-pointer"
				/>
				<FontAwesomeIcon
					icon={faTwitter}
					size="2x"
					className="text-white text-[40px]  cursor-pointer"
				/>
				<FontAwesomeIcon
					icon={faInstagram}
					size="2x"
					className="text-white text-[40px]  cursor-pointer"
				/>
				<FontAwesomeIcon
					icon={faEnvelope}
					size="2x"
					className="text-white text-[40px]  cursor-pointer"
				/>
			</div>
			<hr className="absolute bottom-[75px] left-0 w-full border-t-2 border-white" />
			<div className="absolute bottom-[30px] text-lg">
				<p className="text-white">&copy;{new Date().getFullYear()} All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
