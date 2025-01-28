const Button = ({
	children,
	handleClick,
	extraStyles = "",
	disabled = false,
}) => {
	return (
		<>
			<button
				disabled={disabled}
				onClick={handleClick}
				className={`p-1 w-30 m-3 text-md border border-black cursor-pointer  shadow-sm ${extraStyles} border-bg-customgradient`}
			>
				{children}
			</button>
		</>
	);
};
export default Button;
