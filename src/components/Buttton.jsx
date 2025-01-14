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
				className={`p-1 w-30 m-3 text-md border border-black cursor-pointer rounded-lg shadow-sm ${extraStyles}`}
			>
				{children}
			</button>
		</>
	);
};
export default Button;
