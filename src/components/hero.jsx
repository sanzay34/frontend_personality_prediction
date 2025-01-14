import React from "react";
import Landingpage from "../assets/landingpage.jpg";
const Hero = () => {
	return (
		<div className="bg-black w-full text-white">
			<div className="flex  flex-col-2 mt-[100px] ml-10  ">
				<div className="w-[1200px] h-[600px] bg-customGray-50 text-white  font-bold text-3xl rounded-xl">
					<p className=" p-[70px] text-[70px] mb-3">
						<span className="block mb-[50px]">Discover the</span>
						<span className="block mb-[50px]">essence of who</span>
						<span className="block"> you are</span>
					</p>
					<p className="text-[23px] font-normal px-[70px]">
						<span className="block">
							Explore your personality like never before.Find out
						</span>
						<span className="block">
							what your traits reveal about your energy,
						</span>
						<span className="block">potential and essence.</span>
					</p>
				</div>
				<div className="w-[600px] h-[600px] bg-customGray-50 flex items-center justify-center rotate-[11deg]   ">
					<img
						src={Landingpage}
						alt="Landingpage image"
						className="w-[550px] h-[550px]
						 "
					/>
				</div>
			</div>
		</div>
	);
};
export default Hero;
