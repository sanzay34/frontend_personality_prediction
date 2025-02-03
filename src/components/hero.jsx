import React from "react";
import Landingpage from "../assets/landingpage.jpg";
import Button from "./Button";
const Hero = () => {
	return (
		<div className="bg-black w-full text-white">
			<div className="flex  flex-col-2 mt-[150px] ml-[100px] font-poppins">
				<div className="w-[1200px] h-[600px] bg-customGray-50 text-white  font-bold text-3xl rounded-xl relative">
					<p className=" py-[70px] px-[100px] text-[65px] mb-3 relative">
						<span className="block mb-[40px]">Discover the</span>
						<span className="block mb-[40px]">
							<span className="bg-customgradient bg-clip-text text-transparent ">
								Essence
							</span>
							<span> of who</span>
						</span>
						<span className="block"> you are</span>
					</p>
					<p className="text-[20px] font-normal px-[100px] absolute top-[300px]">
						<span className="block">
							Explore your personality like never before.Find out
						</span>
						<span className="block">
							what your traits reveal about your energy,
						</span>
						<span className="block">potential and essence.</span>
					</p>
					<Button extraStyles="rounded-lg px-7 py-2 border-white text-[25px] ml-[100px] mt-[130px]  text-center bg-white hover:bg-black  ">
						<span className="bg-customgradientb bg-clip-text text-transparent">
							Explore
						</span>
					</Button>
				</div>
				<div className="w-[695px] h-[695px] bg-customGray-50 flex items-center justify-center rotate-[11deg] absolute right-[150px] top-[268px]">
					<img
						src={Landingpage}
						alt="Landingpage image"
						className="w-[620px] h-[620px]
						 "
					/>
				</div>
			</div>
		</div>
	);
};
export default Hero;
