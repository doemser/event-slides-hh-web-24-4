const students = [
	{
		// The ID is used to find images and videos
		// ❗️
		id: "dagobert",
		// Name displayed on slide
		app: "DAGOBERT",
		subTitle: "Budget App",
		name: ["Christian, ", "Michael, ", "Nicholas, ", "Tia"],
		// Optional, if set the Domain will be shown on the slide
		// domain: "www.clanplan.org/",
		// Will be printed as written here
		techStack: [
			"React",
			"Next.js",
			"Styled Components",
			"recharts",
			"date-fns",
			"use-local-storage-state",
		],
		// Optional
		ci: {
			themeColor: "#FFFFFF",
			colors: {
				primary: "#14B4FF",
				secondary: "#FFC6F3",
				another: "#B6E6FF",
			},
		},
		commits: 75,
		pullRequests: 64,
		// Currently, only mobile is supported
		device: "mobile",
	},
	{
		// The ID is used to find images and videos
		id: "plantsApp",
		// Name displayed on slide
		app: "CROP IT",
		subTitle: "Like it's hot",
		name: ["Eva, ", "Philip, ", "Sabine"],
		// Optional, if set the Domain will be shown on the slide
		//domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"React",
			"Next.js",
			"Styled Components",
			"Mongoose",
			"MongoDB Atlas",
			"NextAuth",
			"cloudinary",
			"SWR",
			"formidable",
			"use-local-storage-state",
			"react-slick",
		],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#79af6e",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				primary: "#79af6e",
				bar: "#e62600",
				secondary: "#f67b00",
			},
		},
		commits: 682,
		pullRequests: 23,
		// Currently, only mobile is supported
		device: "mobile",
	},
	{
		// The ID is used to find images and videos
		id: "survivalPets",
		// Name displayed on slide
		app: "Survival Pets",
		subTitle: "Still alive?",
		name: ["Alex, ", "Felix, ", "Johannes, ", "Jonas"],
		// Optional, if set the Domain will be shown on the slide
		//domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"React",
			"Next.js",
			"Styled Components",
			"Mongoose",
			"MongoDB Atlas",
			"SWR",
			"use-local-storage-state",
			"use-sound",
		],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#FEFEFE",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				also: "#90ee90",
				primary: "#fce671",
				bar: "#ffb628",
				secondary: "#ff8660",
			},
		},
		commits: 682,
		pullRequests: 23,
		// Currently, only mobile is supported
		device: "mobile",
	},
];

export default students;
