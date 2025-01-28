// tailwind.config.js
module.exports = {
	content: [
		"./index.html", // or your specific files
		"./src/**/*.{js,jsx,ts,tsx}", // all files in src
	],
	theme: {
		extend: {
			fontFamily: {
				englebert: ['"Englebert"', "sans-serif"],
				poppins: ["popppins", "sans-serif"],
			},
			backgroundImage: {
				customgradient:
					"linear-gradient(to left, #40C1C3 0%, #E52764 30%, #CCEE60 59%, #E09B5A 79%,#C74144 100%)",

				customgradientb:
					"linear-gradient(to left, #40C1C3 0%, #E52764 30%, #CCEE60 70%, #E09B5A 79%,#C74144 100%)",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0)" }, // Start at 0 (beginning)
					"50%": { transform: "translateX(-100%)" }, // Move to the left completely
					"100%": { transform: "translateX(0)" }, // Return to the starting position
				},
			},
			animation: {
				marquee: "marquee 20s linear infinite",
			},
			colors: {
				primary: "#1D4ED8", // Custom blue color
				secondary: "#9333EA", // Custom purple color
				accent: "#F59E0B", // Custom yellow color
				danger: "#EF4444", // Custom red color
				gblue: "#40C1C3",
				gpink: "#E52764",
				gyellow: "#CCEE60",
				gorange: "#E09B5A",
				gred: "#C74144",

				customGray: {
					50: "#2D2B2B",
					100: "#F3F4F6",
					200: "#E5E7EB",
					300: "#D1D5DB",
					400: "#9CA3AF",
					500: "#6B7280",
					600: "#4B5563",
					700: "#374151",
					800: "#1F2937",
					900: "#111827",
				},
			},
			rotate: {
				17: "11deg",
			},
		},
	},
	plugins: [],
};
