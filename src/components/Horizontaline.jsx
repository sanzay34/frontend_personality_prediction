import React from "react";

const Horizontaline = ({ extrastyles = "" }) => {
	return (
		<div id="homesection" className={`flex items-center mt-12 inset-x-0 ${extrastyles}`}>
			<hr className="flex-grow border-white lg:ml-12 lg:mr-6 ml-5 mr-3" />
			<div className=" px-1 lg:px-4 text-white text-center border border-white lg:w-146 lg:h-38 w-auto min-w-[120px] md:w-[280px] ">
				<div className="text-xs lg:text-3xl font-englebert">
					Aura Traits
				</div>
				<div className="text-xs lg:text-sm tracking-[2px] lg:tracking-[5px] font-englebert">
					Personality Predictor
				</div>
			</div>
			<hr className="flex-grow border-white lg:ml-6 ml-3 mr-4 " />
		</div>
	);
};

export default Horizontaline;
