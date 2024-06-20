const students = [
	{
		// The ID is used to find images and videos
		// ❗️
		id: "clanPlan",
		// Name displayed on slide
		app: "ClanPlan",
		subTitle: "The Family Task Manager",
		name: ["Mariia, ", "Paul, ", "Swetha"],
		// Optional, if set the Domain will be shown on the slide
		// domain: "www.clanplan.org/",
		// Will be printed as written here
		techStack: [
			"React",
			"Next.js",
			"Styled Components",
			"Node.js",
			"Mongoose",
			"MongoDB Atlas",
			"NextAuth",
			"Cloudinary",
			"SWR",
			"React Toastify",
			"EmailJS",
			"React Big Calendar",
			"React Multiselect Dropdown",
		],
		// Optional
		ci: {
			themeColor: "#FFFFFF",
			colors: {
				primary: "#FFFFFF",
				secondary: "#E6E4E4",
				another: "#74E2F3",
			},
		},
		commits: 103,
		pullRequests: 64,
		// Currently, only mobile is supported
		device: "mobile",
	},
	{
		// The ID is used to find images and videos
		id: "emotionTracker",
		// Name displayed on slide
		app: "What A Feeling",
		subTitle: "Emotion Tracker",
		name: ["Christof, ", "Jan, ", "Jana, ", "Sonja"],
		// Optional, if set the Domain will be shown on the slide
		//domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"React",
			"Next.js",
			"Styled Components",
			"Node.js",
			"Mongoose",
			"MongoDB Atlas",
			"NextAuth",
			"SWR",
			"i18next",
			"Plotly",
			"Fuse.js",
			"Hamburger React",
			"React Day Picker",
			"React Export Table",
			"date-fns",
		],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#FEFEFE",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				primary: "#322E44",
				bar: "#743DC3",
				secondary: "#443F5D",
			},
		},
		commits: 682,
		pullRequests: 23,
		// Currently, only mobile is supported
		device: "mobile",
	},
];

export default students;
