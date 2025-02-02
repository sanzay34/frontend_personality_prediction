import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "../pages/RegisterForm";
import Homepage from "../pages/Homepage";
const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/RegisterForm" element={<RegisterForm />} />
			<Route path="/Homepage" element={<Homepage/>}/>
		</Routes>
	);
};

export default AppRoutes;
