import React, { useState } from "react";
import Horizontaline from "../components/Horizontaline";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/Button";
import Questions from "./Questions";
const RegisterForm = () => {
	const navigate = useNavigate();
	const handleHomeClick = () => {
		navigate("/Homepage");
	};
	const handleNextCLick = () => {
		navigate("/Questions")
	}
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
		Skills:"",
	});
	const handleFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className=" min-h-screen text-white relative mb-10">
			<Horizontaline extrastyles="mt-12"></Horizontaline>
			<div
				onClick={handleHomeClick}
				className="absolute top-[-4px] left-[58px] text-2xl cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent "
			>
				Home
			</div>
			<div className="mt-10 items-center justify-center flex p-6 ">
				<div className="h-[110px] w-[1300px] rounded-3xl bg-gradient-to-l from-gblue via-red-500 to-yellow-500 p-[1px] ">
					<div className="flex h-full w-full items-center justify-center bg-customGray-50 back rounded-3xl">
						<div className="flex-row justify-center items-center">
							<div className="text-[46px] font-bold ">
								Register your Profile
							</div>
							<div className=" text-3xl text-center">
								Fill out Your CV Information
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center absolute ml-[253px] px] mt-[70px] mb-[100px] ">
				<div className="h-auto w-[1300px] rounded-3xl bg-gradient-to-l from-gblue via-red-500 to-yellow-500 p-[1px] mb-32">
					<div className=" h-full w-full bg-customGray-50 flex rounded-3xl back p-[20px] mb-auto">
						<form className="ml-[60px] my-5 flex-col ">
							<div className="text-start text-[30px] font-bold">
								Personal Details
							</div>
							<div className=" flex gap-[220px]  text-black mt-4 ">
								<Input
									onChange={handleFormChange}
									placeholder="Full Name"
									name="Firstname"
									value={formData.Firstname}
									inputStyles="rounded-xl w-[460px] h-[50px] text-2xl"
								/>

								<Input
									onChange={handleFormChange}
									placeholder="Email"
									name="Email"
									value={formData.Email}
									inputStyles="rounded-xl w-[460px] h-[50px] text-2xl"
								/>
							</div>
							<div className=" flex gap-[220px]  text-black mt-4 ">
								<Input
									onChange={handleFormChange}
									placeholder="Phone Number"
									name="Phone"
									value={formData.Phone}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>

								<Input
									onChange={handleFormChange}
									placeholder="Address"
									name="Address"
									value={formData.Address}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>
							</div>
							<div className="text-start text-[30px] font-bold mt-4">
								Qualification
							</div>
							<div className=" flex gap-[220px]  text-black mt-4 ">
								<Input
									onChange={handleFormChange}
									placeholder="Degree"
									name="Degree"
									value={formData.Degree}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>

								<Input
									onChange={handleFormChange}
									placeholder="University"
									name="University"
									value={formData.University}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>
							</div>
							<div className="flex gap-[220px]  text-black mt-4">
								<Input
									onChange={handleFormChange}
									placeholder="Graduation Year"
									name="Graduationyear"
									value={formData.Graduationyear}
									inputStyles="rounded-xl w-[460px] h-[50px] text-2xl"
								/>
							</div>
							<div className="text-start text-[30px] font-bold mt-4">
								Experience
							</div>
							<div className=" flex gap-[220px]  text-black mt-4 ">
								<Input
									onChange={handleFormChange}
									placeholder="Job Title"
									name="Jobtitle"
									value={formData.Jobtitle}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>

								<Input
									onChange={handleFormChange}
									placeholder="Duration"
									name="Duration"
									value={formData.Duration}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>
							</div>
							<div className="flex gap-[220px]  text-black mt-4">
								<Input
									onChange={handleFormChange}
									placeholder="Company"
									name="Company"
									value={formData.Company}
									inputStyles="rounded-xl w-[460px] h-[50px] text-2xl"
								/>
							</div>
							<div className="text-start text-[30px] font-bold mt-4">
								Projects
							</div>
							<div className=" flex gap-[220px]  text-black mt-4 ">
								<Input
									onChange={handleFormChange}
									placeholder="Project Title"
									name="Projecttitle"
									value={formData.Projecttitle}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>

								<Input
									onChange={handleFormChange}
									placeholder="Project Description"
									name="Projectdescription"
									value={formData.Projectdescription}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>
							</div>
							<div className="text-start text-[30px] font-bold mt-4">
								Certifications
							</div>
							<div className=" flex gap-[220px]  text-black mt-4 ">
								<Input
									onChange={handleFormChange}
									placeholder="Certification Title"
									name="Certificationtitle"
									value={formData.Certificationtitle}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>
								<Input
									onChange={handleFormChange}
									placeholder="Certification Description"
									name="Certificationdescription"
									value={formData.Certificationdescription}
									inputStyles="rounded-xl w-[450px] h-[50px] text-2xl"
								/>
							</div>
							<div className="text-start text-[30px] font-bold mt-4">
								Skills
							</div>
							<div className=" flex gap-[220px]  text-black mt-4 ">
								<Input
									onChange={handleFormChange}
									placeholder="Skills"
									name="Skills"
									value={formData.Skills}
									inputStyles="rounded-xl w-[460px] h-[50px] text-2xl mb-[60px]"
								/>
							</div>

							<Button handleClick={handleNextCLick} extraStyles="px-10 py-2 text-2xl bg-white hover:bg-black rounded-lg absolute right-[80px] top-[950px] border-secondary">
								<span className="bg-customgradientb bg-clip-text text-transparent ">
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
