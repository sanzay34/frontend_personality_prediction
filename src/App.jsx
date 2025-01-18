import Navbar from "./components/navbar"
import Hero from "./components/hero";
import Horizontaline from "./components/horizontaline"
import Section from "./components/section"
function App() {
	return (
		<>
			<div className="w-screen h-full bg-black">
				<Navbar/>
				
				<Horizontaline/>
				<Hero />
				<Section/>
			</div>
		</>
	);
	
 }
export default App
