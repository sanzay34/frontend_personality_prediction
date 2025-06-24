import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import neuroticism from "../assets/neuroticism.jpg";
import extraversion from "../assets/extraversion.jpg";
import openness from "../assets/openness.jpg";
import conscientiousness from "../assets/conscientiousness.jpg";
import aggreable from "../assets/aggreable.jpg";
import Button from "./Button";

const Slider = () => {
	const slides = [
		{
			title: "Openness",
			description:
				"Openness is a personality trait that describes how open-minded, imaginative, and creative someone is. People who are high in openness tend to be more willing to try new things and listen to different points of view.",
			image: openness,
		},
		{
			title: "Conscientiousness",
			description:
				"Conscientiousness is a personality trait that describes people who are responsible, organized, and dependable. Conscientious people are often described as hard-working, reliable, and good team players.",
			image: conscientiousness,
		},
		{
			title: "Extraversion",
			description:
				"Extraversion is a personality trait that describes people who are outgoing, sociable, and energetic. Extraverts are often enthusiastic, assertive, and enjoy being around people.",
			image: extraversion,
		},
		{
			title: "Agreeableness",
			description:
				"Agreeableness is a personality trait that describes a person's tendency to be kind, cooperative, and empathetic. People who are agreeable are more likely to be trusting, altruistic, and modest.",
			image: aggreable,
		},
		{
			title: "Neuroticism",
			description:
				"Neuroticism is a personality trait that involves a tendency to experience negative emotions, such as anxiety, anger, and sadness. People who are high in neuroticism may also have low self-esteem and feel like they lack social support.",
			image: neuroticism,
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};
	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<div id="explore-section" className="w-full flex justify-center mt-16">
			<div className="relative w-full max-w-7xl rounded-xl overflow-hidden">
				<div
					className=" relative flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{slides.map((slide, index) => (
						<div
							key={index}
							className="flex flex-col lg:flex-row items-center justify-evenly flex-none w-full p-4 lg:p-16"
						>
							{/* Text Section */}
							<div className="lg:w-1/2 text-center lg:text-left">
								<h2 className="font-bold text-3xl lg:text-5xl text-white">
									{slide.title}
								</h2>
								<p className="text-white mt-4 text-base lg:text-lg lg:max-w-[600px]">
									{slide.description}
								</p>
							</div>

							{/* Image Section */}
							<div className="lg:w-1/2 flex justify-center mt-4 lg:mt-0">
								<img
									src={slide.image}
									alt={slide.title}
									className="w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] object-cover rounded-xl"
								/>
							</div>
						</div>
					))}
				</div>

				{/* Navigation Buttons */}
				{currentSlide > 0 && (
					<Button
						handleClick={prevSlide}
						extraStyles="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 border-none"
					>
						<FontAwesomeIcon
							icon={faChevronLeft}
							className="text-3xl text-white"
						/>
					</Button>
				)}
				{currentSlide < slides.length - 1 && (
					<Button
						handleClick={nextSlide}
						extraStyles="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 border-none"
					>
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-3xl text-white"
						/>
					</Button>
				)}
			</div>
		</div>
	);
};

export default Slider;
