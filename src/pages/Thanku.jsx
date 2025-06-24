import React from 'react'
import Horizontaline from '../components/Horizontaline'
import { useNavigate } from "react-router-dom";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Thanku = () => {
    const navigate = useNavigate();
        const handleHomeClick = () => {
            navigate("/Homepage");
	};
	
  return (
		<div className="min-h-screen text-white relative mb-10 px-4 sm:px-8">
			<Horizontaline extrastyles="mt-12" />
			<div
				onClick={handleHomeClick}
				className="absolute top-[-4px] left-[68px] md:left-[88px]  text-xs md:text-2xl cursor-pointer hover:bg-customgradientb hover:bg-clip-text hover:text-transparent"
			>
				Home
			</div>
			<div className="mt-12 flex justify-center p-0 ">
				<div className="h-[600px] w-full max-w-[1500px] rounded-3xl bg-gradient-to-l from-gblue via-red-500 to-yellow-500 p-[1px]">
					<div className="h-full flex flex-col items-center justify-center bg-customGray-50 rounded-3xl p-6 ">
						<div>
							<FontAwesomeIcon
								icon={faCheck}
								className="text-white text-[70px]"
							/>
						</div>
						<div className="text-[60px] font-poppins font-bold">Thank You!</div>
						<div className="text-3xl ">
							Your CV and answers to the questions have been successfully
							received.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Thanku