import React from "react";
const Horizontaline = ({ extrastyles = "" }) => {
	return (
		<div className="flex items-center mt-12">
			<hr className="flex-grow border-white ml-12 mr-6" />
			<div className="px-4 text-white text-center border border-white w-146 h-38 ">
				<div className="text-3xl font-serif">Aura Traits</div>
				<div className="text-sm font-light tracking-[8px] ">Personality Predictor</div>
			</div>
			<hr className="flex-1 border-white mr-12 ml-6" />
		</div>
	);
};
export default Horizontaline;
