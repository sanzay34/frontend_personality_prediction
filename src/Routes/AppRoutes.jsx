import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "../pages/RegisterForm";
import Homepage from "../pages/Homepage";
import Questions from "../pages/Questions";
import Thanku from "../pages/Thanku";
const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/RegisterForm" element={<RegisterForm />} />
			<Route path="/Homepage" element={<Homepage />} />
			<Route path="/Questions" element={<Questions />} />
			<Route path="/Thanku" element={<Thanku />} />
		</Routes>
	);
};

export default AppRoutes;
