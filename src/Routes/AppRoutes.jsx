import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "../pages/RegisterForm";
import Homepage from "../pages/Homepage";
import Questions from "../pages/Questions";
const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/RegisterForm" element={<RegisterForm />} />
			<Route path="/Homepage" element={<Homepage />} />
			<Route path="/Questions" element={<Questions/>}/>
		</Routes>
	);
};

export default AppRoutes;
