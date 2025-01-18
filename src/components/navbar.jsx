import React from "react";
import Button from "./Buttton";
const Navbar = ( {extraStyles=''}) => {
	return (
		<nav className="flex justify-between items-baseline text-xl text-white pt-8 relative ">
			<div className=" absolute left-3 top-16 flex gap-4 px-6 text-2xl ml-7">
				<ul>Home</ul>
				<ul>About Us</ul>
			</div>
			<div className=" absolute right-3 top-12 flex flex-row-reverse px-4 text-lg mr-5">
				<Button extraStyles="rounded-3xl px-5 border-white ">
					log In
				</Button>
				<Button extraStyles=" rounded-3xl px-5 border border-white">
					Sign Up
				</Button>
			</div>
		</nav>
	);
};
export default Navbar;
