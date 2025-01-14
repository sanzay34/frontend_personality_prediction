// tailwind.config.js
module.exports = {
	content: [
		"./index.html", // or your specific files
		"./src/**/*.{js,jsx,ts,tsx}", // all files in src
	],
	theme: {
		extend: {
			colors: {
				primary: "#1D4ED8", // Custom blue color
				secondary: "#9333EA", // Custom purple color
				accent: "#F59E0B", // Custom yellow color
				danger: "#EF4444", // Custom red color
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
				"17": "11deg",
			},
		},
	},
	plugins: [],
};
