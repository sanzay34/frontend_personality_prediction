import React, { useState } from "react";
import Horizontaline from "../components/Horizontaline";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input"
import Button from "../components/Button";

const RegisterForm = () => {
	const navigate = useNavigate();
	const handleHomeClick = () => navigate("/Homepage");
	const handleNextClick = () => navigate("/Questions");

	const [formData, setFormData] = useState({
		Firstname: "",
		Email: "",
		Phone: "",
		Address: "",
		Degree: "",
		University: "",
		Graduationyear: "",
		Jobtitle: "",
		Duration: "",
		Company: "",
		Projecttitle: "",
		Projectdescription: "",
		Certificationtitle: "",
		Certificationdescription: "",
		Skills: "",
	});

	const handleFormChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="min-h-screen text-white relative mb-10 px-4 sm:px-8">
			<Horizontaline extrastyles="mt-12" />
			<div
				onClick={handleHomeClick}
				className="absolute top-[-4px] left-[98px] text-xl md:text-2xl cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent"
			>
				Home
			</div>
			<div className="mt-10 flex justify-center">
				<div className="h-[110px] w-full max-w-6xl rounded-3xl bg-gradient-to-l from-gblue via-red-500 to-yellow-500 p-[1px]">
					<div className="flex h-full w-full items-center justify-center bg-customGray-50 rounded-3xl">
						<div className="text-center">
							<h1 className="text-[32px] md:text-[46px] font-bold">
								Register your Profile
							</h1>
							<p className="text-lg md:text-3xl">
								Fill out Your CV Information
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<div className="w-full max-w-6xl rounded-3xl bg-gradient-to-l from-gblue via-red-500 to-yellow-500 p-[1px]">
					<div className="bg-customGray-50 rounded-3xl p-6 md:p-10">
						<form className="text-black">
							<h2 className="text-xl md:text-2xl font-bold">
								Personal Details
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
								<Input
									onChange={handleFormChange}
									placeholder="Full Name"
									name="Firstname"
									value={formData.Firstname}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
								<Input
									type="email"
									onChange={handleFormChange}
									placeholder="Email"
									name="Email"
									value={formData.Email}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
								<Input
									type="number"
									onChange={handleFormChange}
									placeholder="Phone Number"
									name="Phone"
									value={formData.Phone}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
								<Input
									onChange={handleFormChange}
									placeholder="Address"
									name="Address"
									value={formData.Address}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
							</div>
							<h2 className="text-xl md:text-2xl font-bold mt-6">
								Qualification
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
								<Input
									onChange={handleFormChange}
									placeholder="Degree"
									name="Degree"
									value={formData.Degree}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
								<Input
									onChange={handleFormChange}
									placeholder="University"
									name="University"
									value={formData.University}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
							</div>
							<div className="mt-4">
								<Input
									onChange={handleFormChange}
									placeholder="Graduation Year"
									name="Graduationyear"
									value={formData.Graduationyear}
									inputStyles="rounded-xl w-full md:w-[49%] h-[50px] text-xl"
									required
								/>
							</div>
							<h2 className="text-xl md:text-2xl font-bold mt-6">Experience</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
								<Input
									onChange={handleFormChange}
									placeholder="Job Title"
									name="Jobtitle"
									value={formData.Jobtitle}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
								<Input
									onChange={handleFormChange}
									placeholder="Duration"
									name="Duration"
									value={formData.Duration}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
							</div>
							<div className="mt-4">
								<Input
									onChange={handleFormChange}
									placeholder="Company"
									name="Company"
									value={formData.Company}
									inputStyles="rounded-xl w-full md:w-[49%] h-[50px] text-xl"
									required
								/>
							</div>
							<h2 className="text-xl md:text-2xl font-bold mt-6">Projects</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
								<Input
									onChange={handleFormChange}
									placeholder="Project Title"
									name="Projecttitle"
									value={formData.Projecttitle}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
								<Input
									onChange={handleFormChange}
									placeholder="Project Description"
									name="Projectdescription"
									value={formData.Projectdescription}
									inputStyles="rounded-xl w-full h-[50px] text-xl"
									required
								/>
							</div>
							<h2 className="text-xl md:text-2xl font-bold mt-6">Skills</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
								<Input
									onChange={handleFormChange}
									placeholder="Skills"
									name="Skills"
									value={formData.Skills}
									inputStyles="rounded-xl w-full d:w-[49%] h-[50px] text-xl"
									required
								/>
							</div>
							<Button
								handleClick={handleNextClick}
								extraStyles=" mt-6 ml-[-1px] text-white px-6 py-2 text-xl  flex items-center justify-center bg-white hover:bg-black rounded-lg border-secondary w-full md:w-auto "
							>
								<span className="bg-customgradientb bg-clip-text text-transparent">
									Next
								</span>
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default RegisterForm;
