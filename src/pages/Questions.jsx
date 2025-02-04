import React, { useState } from "react";
import Horizontaline from "../components/Horizontaline";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/Button";
const Questions = () => {
	const navigate = useNavigate();
	const handleHomeClick = () => {
		navigate("/Homepage");
	};
	const [responses, setResponses] = useState({});
	const questions = [
		"I have a rich vocabulary.",
		"I have difficulty understanding abstract ideas.",
		"I have a vivid imagination.",
		"I am not interested in abstract ideas.",
		"I have excellent ideas.",
		"I do not have a good imagination.",
		"I am quick to understand things.",
		"I use difficult words.",
		"I spend time reflecting on things.",
		"I am full of ideas.",
	];
	const handleChange = (index, value) => {
		setResponses({ ...responses, [index]: value });
	};

	return (
		<div className="min-h-screen text-white relative mb-10">
			<Horizontaline extrastyles="mt-12"></Horizontaline>
			<div
				onClick={handleHomeClick}
				className="absolute top-[-4px] left-[58px] text-2xl cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent "
			>
				Home
			</div>
			<div className="mt-10 items-center justify-center flex p-6 ">
				<div className="h-[110px] w-[1300px] rounded-3xl bg-gradient-to-l from-gblue via-red-500 to-yellow-500 p-[1px] ">
					<div className="flex h-full w-full items-center justify-center bg-customGray-50 back rounded-3xl">
						<div className="flex-row justify-center items-center">
							<div className="text-[46px] font-bold ">
								Answer 50 Questions : Unlock Your Personality
							</div>
							<div className=" text-3xl text-center">
								Quick, Fun and Insightful : Your Personality Awaits!
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center absolute ml-[253px] px] mt-[70px] mb-[100px] ">
				<div className="h-auto w-[1300px] rounded-3xl bg-gradient-to-l from-gblue via-red-500 to-yellow-500 p-[1px] ">
					<div className="flex h-full w-full items-center  bg-customGray-50 back rounded-3xl">
						<div className="flex-row ml-[60px] ">
							<h3 className="text-3xl font-bold text-white text-start p-5 underline ">
								Openness
							</h3>
							{questions.map((question, index) => (
								<div key={index} className="my-8">
									<p className="text-2xl">
										{index + 1}. {question}
									</p>
									<div className="flex space-x-12 mt-2 text-2xl">
										{[
											"Strongly Agree",
											"Agree",
											"Neutral",
											"Disagree",
											"Strongly Disagree",
										].map((option) => (
											<label
												key={option}
												className="flex items-center space-x-3"
											>
												<input
													type="radio"
													name={`question-${index}`}
													value={option}
													className="form-radio text-blue-500 scale-150"
													onChange={() => handleChange(index, option)}
												/>
												<span className="text-gray-300">{option}</span>
											</label>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Questions;
