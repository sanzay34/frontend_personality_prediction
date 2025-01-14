import Navbar from "./components/navbar"
import Hero from "./components/hero";
 import Horizontaline from "./components/horizontaline"
function App() {
	return (
		<>
			<div className="w-screen h-full bg-black">
				<Navbar/>
				
				<Horizontaline/>
				<Hero/>
			</div>
		</>
	);
	
 }
export default App
