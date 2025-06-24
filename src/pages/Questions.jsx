import React, { useState } from "react";
import Horizontaline from "../components/Horizontaline";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Questions = () => {
	const navigate = useNavigate();
	const handleHomeClick = () => {
		navigate("/Homepage");
	};
	const handleSubmitClick = () => {
		navigate("/Thanku");
	};

	const [responses, setResponses] = useState({});

	const OpennessQuestions = [
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

	const ConscientiousnessQuestions = [
		"I am always prepared.",
		"I leave my belongings around.",
		"I pay attention to details.",
		"I make a mess of things.",
		"I get chores done right away.",
		"I often forget to put things back in their proper place.",
		"I like order.",
		"I shirk my duties.",
		"I follow a schedule.",
		"I am exacting in my work.",
	];
	const ExtraversionQuestions = [
		"I am the life of the party.",
		"I dont talk a lot.",
		"I feel comfortable around people.",
		"I keep in the background.",
		"I start conversations.",
		"I have little to say.",
		"I talk to a lot of different people at parties.",
		"I dont like to draw attention to myself.",
		"I dont mind being the center of attention.",
		"I am quiet around strangers.",
	];
	const AggreableQuestions = [
		"I feel little concern for others.",
		"I am interested in people.",
		"I insult people.",
		"I sympathize with others feelings.",
		"I am not interested in other peoples problems.",
		"I have a soft heart.",
		"I am not really interested in others.",
		"I take time out for others.",
		"I feel others emotions.",
		"I make people feel at ease.",
	];
	const NeuroticismQuestons = [
		"I get stressed out easily.",
		"I am relaxed most of the time.",
		"I worry about things.",
		"I seldom feel blue.",
		"I am easily disturbed.",
		"I get upset easily.",
		"I change my mood a lot.",
		"I have frequent mood swings.",
		"I get irritated easily.",
		"I often feel blue.",
	];

	const handleChange = (index, value) => {
		setResponses({ ...responses, [index]: value });
	};

	return (
		<div className="min-h-screen text-white relative mb-10 px-4 sm:px-8 md:px-12  ">
			<Horizontaline extrastyles="mt-12" />
			<div
				onClick={handleHomeClick}
				className="absolute top-[-4px] left-[68px] md:left-[108px] text-xs md:text-2xl cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent"
			>
				Home
			</div>

			<div className="mt-10 flex justify-center p-6 ">
				<div className="h-auto w-full max-w-[1300px] rounded-3xl bg-gradient-to-l from-gblue via-red-500 to-yellow-500 p-[1px]">
					<div className="flex flex-col items-center justify-center bg-customGray-50 rounded-3xl p-6 ">
						<h2 className="text-[36px] md:text-[46px] font-bold text-center">
							Answer 50 Questions: Unlock Your Personality
						</h2>
						<p className="text-xl md:text-3xl text-center">
							Quick, Fun, and Insightful: Your Personality Awaits!
						</p>
					</div>
				</div>
			</div>

			{[
				{ title: "Openness", questions: OpennessQuestions },
				{ title: "Conscientiousness", questions: ConscientiousnessQuestions },
				{ title: "Extraversion", questions: ExtraversionQuestions },
				{ title: "Aggreable", questions: AggreableQuestions },
				{ title: "Neuroticism", questions: NeuroticismQuestons },
			].map((section, sectionIndex, array) => (
				<div key={sectionIndex} className="flex justify-center my-10 ">
					<div className="h-auto w-full max-w-[1300px] rounded-3xl bg-gradient-to-l from-gblue via-red-500 to-yellow-500 p-[1px]">
						<div className="flex flex-col bg-customGray-50 rounded-3xl p-6 ">
							<h3 className="text-2xl md:text-3xl font-bold text-white underline mb-6 md:ml-[20px]">
								{section.title}
							</h3>
							{section.questions.map((question, index) => (
								<div key={index} className="my-4 ">
									<p className="text-lg md:text-2xl md:ml-[20px]">
										{index + 1}. {question}
									</p>
									<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-2 text-lg md:text-2xl md:ml-[20px]">
										{[
											"Strongly Agree",
											"Agree",
											"Neutral",
											"Disagree",
											"Strongly Disagree",
										].map((option) => (
											<label
												key={option}
												className="flex items-center space-x-2 md:space-x-4"
											>
												<input
													type="radio"
													name={`question-${sectionIndex}-${index}`}
													value={option}
													className="form-radio text-blue-500 scale-125"
													onChange={() =>
														handleChange(`${sectionIndex}-${index}`, option)
													}
												/>
												<span className="text-gray-300">{option}</span>
											</label>
										))}
									</div>
								</div>
							))}
							{sectionIndex === array.length - 1 && (
								<div className="flex justify-center mt-6">
									<Button
										handleClick={handleSubmitClick}
										extraStyles="  mt-6 ml-[-1px] text-white px-6 py-2 text-xl  flex items-center justify-center bg-white hover:bg-black rounded-lg border-secondary w-full md:w-auto"
									>
										<span className="bg-customgradientb bg-clip-text text-transparent">
											Submit
										</span>
									</Button>
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Questions;
