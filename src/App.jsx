import Navbar from "./components/navbar"
import Hero from "./components/hero";
import Horizontaline from "./components/horizontaline"
import Section from "./components/section"
import Check from "./components/check";
import Autoscroll from "./components/autoscroll";
import Footer from "./components/footer";
function App() {
	return (
		<>
			<div className="w-full min-h-screen bg-black">
				<Navbar/>
				
				<Horizontaline/>
				<Hero />
				<Section />
				<Check />
				<Autoscroll />
				<Footer/>
			</div>
		</>
	);
	
 }
export default App
