import Button from "./Button";
import feature from "../assets/feature.jpg";
import { useNavigate } from "react-router-dom";

const CheckPage = () => {
	const navigate = useNavigate();
	const handleCheckNow = () => {
		navigate("/RegisterForm");
	};
	return (
		<div className="bg-black flex flex-col lg:flex-row items-center justify-evenly py-16 px-4">
			{/* Left Section */}
			<div className="text-white flex flex-col items-start space-y-6 max-w-lg">
				<div className="relative">
					<p className="text-4xl sm:text-5xl font-bold leading-tight">
						<span className="block">Find your</span>
						<span className="bg-customgradient bg-clip-text text-transparent block">
							Personality
						</span>
						<span className="block">Traits</span>
					</p>
				</div>
				<p className="text-lg sm:text-xl">
					<span className="block">
						Uncover your personality traits, unlock your
					</span>
					<span className="block">potential and true self</span>
				</p>
				<Button
					handleClick={handleCheckNow}
					extraStyles="mt-4 text-lg sm:text-xl w-[160px] h-[50px] rounded-lg font-semibold border border-white bg-white hover:bg-black"
				>
					<span className="bg-customgradientb bg-clip-text text-transparent">
						Check Now
					</span>
				</Button>
			</div>

			{/* Right Section */}
			<div className="mt-10 lg:mt-0 flex justify-center items-center">
				<div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex justify-center items-center rounded-lg rotate-[11deg] bg-customGray-50">
					<img
						src={feature}
						alt="feature"
						className="w-[80%] h-[80%] object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default CheckPage;
