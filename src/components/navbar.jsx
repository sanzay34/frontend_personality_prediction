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
			className="flex justify-between items-baseline pt-8 relative text-white flex-wrap "
		>
			<div className=" absolute top-[40px] md:top-[70px] flex gap-2 lg:gap-4 px-6 lg:ml-7 ml-1 text-xs lg:text-2xl">
				<ul className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					Home
				</ul>
				<ul
					onClick={handleAboutusClick}
					className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent "
				>
					About Us
				</ul>
			</div>
			<div className=" absolute -right-3 lg:right-4 top-12 flex text-xs mr-3 lg:mr-5 lg:text-lg ">
				<div className="hover:bg-customgradientb hover:bg-clip-text hover:text-transparent">
					<Button extraStyles=" rounded-lg lg:rounded-full px-1 lg:px-5 border border-white">
						Admin
					</Button>
				</div>
				<div className=" hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					<Button
						handleClick={handleCandidateClick}
						extraStyles="  rounded-lg lg:rounded-full cursor-pointer px-1 lg:px-5 border-1 border-white hover:border-customgradientbb "
					>
						Candidate
					</Button>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
