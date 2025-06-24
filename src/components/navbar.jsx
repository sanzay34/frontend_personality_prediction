import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
	const navigate = useNavigate(); // Initialize the navigate function

	const handleCandidateClick = () => {
		navigate("/RegisterForm"); // Navigate to the /registerpage route
	};
	const handleAboutusClick = () => {
		document
			.getElementById("scroll-section")
			.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<nav
			id="navbar"
			className="flex justify-between items-baseline pt-4 relative text-white flex-wrap "
		>
			<div className=" absolute top-[50px] flex gap-2 lg:gap-4 px-6 lg:ml-7 ml-1 text-xs lg:text-2xl">
				<ul className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent">
					Home
				</ul>
				<ul
					onClick={handleAboutusClick}
					className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent"
				>
					About Us
				</ul>
			</div>
			<div className="absolute top-[30px] -right-3 lg:right-6 flex text-xs mr-3 lg:mr-5 lg:text-lg">
				<div className="hover:bg-customgradientb hover:bg-clip-text hover:text-transparent">
					<Button
						extraStyles="rounded-lg lg:rounded-full lg:px-5 border border-white absolute right-[70px] sm:right-36"
						aria-label="Admin"
					>
						Admin
					</Button>
				</div>
				<div className="hover:bg-customgradientb hover:bg-clip-text hover:text-transparent">
					<Button
						handleClick={handleCandidateClick}
						extraStyles="rounded-lg lg:rounded-full cursor-pointer lg:px-5 border border-white "
						aria-label="Register as candidate"
					>
						Candidate
					</Button>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
