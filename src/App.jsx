import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes"; // Your routes component
import Homepage from "./pages/Homepage"; // Your Homepage component

function App() {
	return (
		<Router>
			<AppRoutes /> {/* AppRoutes will handle routing */}
		</Router>
	);
}

export default App;
