import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Horizontaline from "../components/Horizontaline";
import Section from "../components/section";
import Check from "../components/Check";
import AutoScroll from "../components/AutoScroll";
import Footer from "../components/Footer";

const Homepage = () => {
	return (
		<>
			<div className="w-full min-h-screen bg-black">
				<Navbar />
				<Horizontaline />
				<Hero />
				<Section />
				<Check />
				<AutoScroll />
				<Footer />
			</div>
			;
		</>
	);
};

export default Homepage;
