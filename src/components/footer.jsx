import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
	return (
		<div className="bg-customGray-50 w-[1600px] h-[500px] ml-[100px] rounded-3xl mb-[50px] relative px-[42px] py-[58px] text-white">
			<div className="px-4 text-white text-center border border-white w-[350px] h-[70px] ">
				<div className="text-5xl font-serif">Aura Traits</div>
				<div className="text-sm font-light tracking-[8px]">
					Personality Predictor
				</div>
			</div>
			<div className="mt-8 text-2xl">
				Discover and embrace your unique personality traits.
			</div>
			<div className="flex justify-between w-[40%] absolute bottom-[85px] text-xl">
				<div>Home</div>
				<div>About Us</div>
				<div>Explore</div>
				<div>Check your Personality Traits</div>
			</div>
			<div className="absolute bottom-[85px] text-xl left-[1325px]">auratraits@gmail.com</div>
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
				<span className="border border-white rounded-full px-[4px]">C</span>
				<span> 2024 Aura Traits. All Rights Reserved</span>
			</div>
		</div>
	);
};

export default Footer;
