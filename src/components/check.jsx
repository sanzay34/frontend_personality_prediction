import Button from "./Button";
import feature from "../assets/feature.jpg";
const Check = () => {
	return (
		<div className=" flex mt-[150px] ml-[150px] h-[650px] w-[1600px] bg-black absolute ">
			<div className="flex-col-2 text-white flex justify-evenly">
				<div className="mt-[34px] ml-[94px] ">
					<div className="relative">
						<p className="text-[65px] font-bold ">
							<span className="block">Find your</span>
							<span className="absolute top-[80px] bg-customgradient bg-clip-text text-transparent ">
								Personality
							</span>
							<span className="absolute block top-[160px]">Traits</span>
						</p>
					</div>

					<p className="text-[25px] absolute top-[300px] left-[100px]">
						<span className="block">
							Uncover your personaity traits,unlock your
						</span>
						<span className="block">potential and true self</span>
					</p>
					<Button extraStyles=" mt-[80px] text-[25px] w-[180px] h-[55px] rounded-lg font-semibold border border-white bg-white hover:bg-black absolute top-[340px]">
						<span className="bg-customgradientb bg-clip-text text-transparent">
							Check Now
						</span>
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
