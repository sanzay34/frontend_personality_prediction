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
import Button from "./Buttton";

const Slider = () => {
	const slides = [
		{
			title: "Neuroticism",
			description:
				"Neuroticism is a personality trait that involves a tendency to experience negative emotions, such as anxiety, anger, and sadness. People who are high in neuroticism may also have low self-esteem and feel like they lack social support.",
			image: neuroticism,
		},
		{
			title: "Extraversion", 
			description:
				"Extraversion is a personality trait that describes people who are outgoing, sociable, and energetic. Extraverts are often enthusiastic, assertive, and enjoy being around people.",
			image: extraversion,
		},
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
			title: "Agreeableness",
			description:
				"Agreeableness is a personality trait that describes a person's tendency to be kind, cooperative, and empathetic. People who are agreeable are more likely to be trusting, altruistic, and modest.",
			image: aggreable,
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1 ) % slides.length); // Cycle to the next slide
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 ) % slides.length); // Cycle to the previous slide
	};

	return (
		<div className="w-[1600px] h-[700px] bg-customGray-50 flex items-center overflow-hidden justify-center mt-[250px] rounded-xl ml-[100px] relative">
			{/* Slide Container with Animation */}
			<div
				className="flex transition-transform duration-500 ease-in-out"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<div
						key={index}
						className="flex items-center justify-evenly w-full h-full shrink-0"
					>
						{/* Text Content */}
						<div className="text-2xl w-[400px]">
							<h2 className="font-bold text-4xl mb-4 text-white">
								{slide.title}
							</h2>
							<p className="text-white">{slide.description}</p>
						</div>

						{/* Image */}
						<div className="flex-shrink-0">
							<img
								src={slide.image}
								alt={slide.title}
								className="w-[600px] h-[600px] object-cover rounded-xl"
							/>
						</div>
					</div>
				))}
			</div>
			{/* Navigation Buttons */}
			{currentSlide > 0 && (
				<Button
					disabled={currentSlide === 0}
					handleClick={prevSlide}
					extraStyles={` absolute top-1/2 left-4 border-none transform -translate-y-1/2 `}
				>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-5xl text-white"
					/>
				</Button>
			)}
			{currentSlide < slides.length - 1 && (
				<Button
					disabled={currentSlide === slides.length - 1}
					handleClick={nextSlide}
					extraStyles={` absolute top-1/2 right-4 border-none transform -translate-y-1/2`}
				>
					<FontAwesomeIcon
						icon={faChevronRight}
						className="text-5xl text-white"
					/>
				</Button>
			)}
		</div>
	);
};

export default Slider;
