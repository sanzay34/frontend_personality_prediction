import React from "react";
import Button from "./Buttton";
import { useNavigate } from "react-router-dom";
const Navbar = ({ extraStyles = "" }) => {
	const navigate = useNavigate(); // Initialize the navigate function

	const handleCandidateClick = () => {
		navigate("/RegisterForm"); // Navigate to the /registerpage route
	};
	return (
		<nav className="flex justify-between items-baseline text-xl  pt-8 relative text-white">
			<div className=" absolute left-3 top-16 flex gap-4 px-6 text-2xl ml-7">
				<ul className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					Home
				</ul>
				<ul className="cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					About Us
				</ul>
			</div>
			<div className=" absolute right-3  top-12 flex flex-row-reverse px-4 text-lg mr-5 ">
				<div className="hover:bg-customgradientb hover:bg-clip-text hover:text-transparent">
					<Button extraStyles="rounded-full px-5 border border-white">
						Admin
					</Button>
				</div>
				<div className=" hover:bg-customgradientb hover:bg-clip-text hover:text-transparent ">
					<Button
						handleClick={handleCandidateClick}
						extraStyles=" rounded-full cursor-pointer px-5 border-2 border-white hover:border-2 hover:border-customgradientbb "
					>
						Candidate
					</Button>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
