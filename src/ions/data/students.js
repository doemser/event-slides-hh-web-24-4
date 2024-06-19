const students = [
	{
		// The ID is used to find images and videos
		// ❗️
		id: "schlaufuchs",
		// Name displayed on slide
		app: "SchlauFuchs",
		name: ["Marie, ", "Nicole, ", "Vanessa"],
		// Optional, if set the Domain will be shown on the slide
		// domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"React",
			"Next.js",
			"Styled Components",
			"NextAuth.js",
			"MongoDB",
			"Mongoose",
			"SWR",
			"Jest",
			"React Testing Library",
			"React-Toastify",
		],
		// Optional
		ci: {
			themeColor: "#FFFFFF",
			colors: {
				primary: "#DF8735",
				secondary: "#e9e9e9",
				tertary: "#959995",
			},
		},
		commits: 609,
		pullRequests: 83,
		// Currently, only mobile is supported
		device: "mobile",
	},
	{
		// The ID is used to find images and videos
		id: "plotdata",
		// Name displayed on slide
		app: "Plotdata",
		name: ["Catherine, ", "Maria, ", "Yavor"],
		// Optional, if set the Domain will be shown on the slide
		//domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"React",
			"Next.js",
			"Styled Components",
			"NextAuth.js",
			"MongoDB",
			"Mongoose",
			"SWR",
			"Jest",
			"Plotly.js",
			"React-Plotly.js",
			"MUI",
		],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#FEFEFE",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				primary: "#1F77B4",
				bar: "#03BFFF",
				secondary: "#F8F8F8",
			},
		},
		commits: 682,
		pullRequests: 23,
		// Currently, only mobile is supported
		device: "mobile",
	},
	{
		// The ID is used to find images and videos
		id: "ruh",
		// Name displayed on slide
		app: "Ruh",
		name: ["Jan-Philipp, ", "Mathis, ", "Niko, ", "Ramin, ", "Sevket"],
		// Optional, if set the Domain will be shown on the slide
		//domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"React",
			"Next.js",
			"Styled Components",
			"NextAuth.js",
			"MongoDB",
			"Mongoose",
			"SWR",
			"Three.js",
			"React Three Fiber",
			"Framer Motion",
			"React H5 Audio Player",
		],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#000000",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				foo: "#CD7273",
				bar: "#B6A660",
				secondary: "#779962",
				primary: "#7190D4",
				baz: "#9265BD",
			},
		},
		commits: 559,
		pullRequests: 97,
		// Currently, only mobile is supported
		device: "mobile",
	},
	{
		// The ID is used to find images and videos
		id: "pinandjoin",
		// Name displayed on slide
		app: "Pin&Join ",
		name: ["Annette, ", "Bruno, ", "Lea, ", "Mareike"],
		// Optional, if set the Domain will be shown on the slide
		//domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"React",
			"Next.js",
			"Styled Components",
			"NextAuth.js",
			"MongoDB",
			"Mongoose",
			"SWR",
			"Cloudinary",
			"Leaflet",
			"React-Toastify",
		],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#FE7D5C",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				baz: "#FF9957",
				foo: "#F68D58",
				bar: "#FE7D5C",
				secondary: "#FF735D",
				bai: "#FF6061",
			},
		},
		commits: 1019,
		pullRequests: 94,
		// Currently, only mobile is supported
		device: "mobile",
	},
];

export default students;
