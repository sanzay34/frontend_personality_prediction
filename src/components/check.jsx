import Button from "./Buttton";
import feature from "../assets/feature.jpg";
const Check = () => {
	return (
		<div className=" flex mt-[150px] ml-[150px] h-[650px] w-[1600px] bg-black absolute ">
			<div className="flex-col-2 text-white flex justify-evenly">
				<div className="mt-[34px] ml-[94px] ">
					<p className="text-[80px] font-bold ">
						<div>Find your</div> <div>Personality</div> <div>Traits</div>
					</p>
					<p className="text-[25px]">
						<div>Uncover your personaity traits,unlock your</div>
						<div>potential and true self</div>
					</p>
					<Button extraStyles="ml-[80px] mt-[80px] text-[25px] w-[180px] h-[55px] font-semibold border border-white">
						Check Now
					</Button>
				</div>

				<div className="w-[695px] h-[695px] bg-customGray-50 flex items-center justify-center rotate-[11deg] absolute right-[150px] ">
					<img
						src={feature}
						alt="feature image"
						className="w-[600px] h-[600px]
                                         "
					/>
				</div>
			</div>
		</div>
	);
};

export default Check;
