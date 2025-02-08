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
		<nav id="navbar" className="flex justify-between items-baseline text-lg  pt-8 relative text-white flex-wrap md:text-xl lg:text-2xl ">
			<div className=" absolute left-2 top-[70px] flex gap-4 px-6 text-lg ml-7 md:text-xl lg:text-2xl">
				<ul className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					Home
				</ul>
				<ul onClick={handleAboutusClick} className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					About Us
				</ul>
			</div>
			<div className=" absolute -right-1 md:right-2 lg:right-4  top-12 flex text-sm mr-5 md:text-lg ">
				<div className="hover:bg-customgradientb hover:bg-clip-text hover:text-transparent">
					<Button extraStyles="rounded-full px-2 md:px-4 lg:px-5 border border-white">
						Admin
					</Button>
				</div>
				<div className=" hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					<Button
						handleClick={handleCandidateClick}
						extraStyles=" rounded-full cursor-pointer px-5 border-1 border-white hover:border-2 hover:border-customgradientbb "
					>
						Candidate
					</Button>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
