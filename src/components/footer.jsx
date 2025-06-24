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
	const navigate = useNavigate();

	const handlePersonalityCheck = () => {
		navigate("/RegisterForm");
	};
	const handleExploreClick = () => {
		document
			.getElementById("explore-section")
			?.scrollIntoView({ behavior: "smooth" });
	};
	const handleHomeClick = () => {
		document.getElementById("navbar")?.scrollIntoView({ behavior: "smooth" });
	};
	const handleAboutusClick = () => {
		document
			.getElementById("scroll-section")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<footer className="bg-customGray-50 rounded-3xl text-white px-6 py-12 mt-12">
			<div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
				{/* Branding */}
				<div className="text-center border border-white rounded-lg p-4 w-[250px]">
					<div className="text-3xl sm:text-4xl font-englebert">Aura Traits</div>
					<div className="text-xs sm:text-sm font-englebert tracking-[5px]">
						Personality Predictor
					</div>
				</div>

				{/* Tagline */}
				<div className="text-center text-lg sm:text-2xl font-poppins">
					Discover and embrace your unique personality traits.
				</div>

				

				{/* Social Links */}
				<div className="flex flex-col items-center space-y-3">
					<div className="text-base sm:text-lg">auratraits@gmail.com</div>
					<div className="flex space-x-5 text-2xl sm:text-3xl">
						<FontAwesomeIcon
							icon={faFacebook}
							className="cursor-pointer hover:text-gray-300"
						/>
						<FontAwesomeIcon
							icon={faTwitter}
							className="cursor-pointer hover:text-gray-300"
						/>
						<FontAwesomeIcon
							icon={faInstagram}
							className="cursor-pointer hover:text-gray-300"
						/>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="cursor-pointer hover:text-gray-300"
						/>
					</div>
				</div>

				<hr className="w-full border-t-2 border-white mt-4" />

				<div className="text-base mt-2">
					&copy; {new Date().getFullYear()} All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
