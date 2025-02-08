import React from "react";

const Horizontaline = ({ extrastyles = "" }) => {
	return (
		<div className={`flex items-center mt-12 inset-x-0 ${extrastyles}`}>
			<hr className="flex-grow border-white ml-12 mr-6 md-mx-12" />
			<div className="px-4 text-white text-center border border-white w-146 h-38 w-auto min-w-[120px] md:w-[280px] ">
				<div className="text-lg md:text-2xl lg:text-3xl font-englebert">
					Aura Traits
				</div>
				<div className="text-xs md:text-sm tracking-[3px] md:tracking-[5px] font-englebert">
					Personality Predictor
				</div>
			</div>
			<hr className="flex-1 border-white mr-12 ml-6" />
		</div>
	);
};

export default Horizontaline;
