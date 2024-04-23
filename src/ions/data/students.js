const students = [
	{
		// The ID is used to find images and videos
		// ❗️
		id: "diy",
		// Name displayed on slide
		app: "DIY.",
		name: ["Charline, ", "Jana, ", "Oliver"],
		// Optional, if set the Domain will be shown on the slide
		// domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"react",
			"next.js",
			"Styled Components",
			"Fuse.js",
			"Cloudinary",
			"React-Toastify",
		],
		// Optional
		ci: {
			themeColor: "#f2f2f2",
			colors: {
				primary: "#f2f2f2",
				secondary: "#282828",
				foo: "#ddf22d",
				baz: "#FB4A5A",
			},
		},
		commits: 21,
		pullRequests: 4,
		// Currently, only mobile is supported
		device: "mobile",
	},
	{
		// The ID is used to find images and videos
		id: "stranger_plants",
		// Name displayed on slide
		app: "Stranger Plants",
		name: ["Fabian, ", "Henrik, ", "Ricardo"],
		// Optional, if set the Domain will be shown on the slide
		//domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"react",
			"next.js",
			"Styled Components",
			"useSWR",
			"Node.js",
			"MongoDB Atlas",
			"mongoose",
			"Cloudinary",
			"NextAuth.js",
			"React-Toastify",
		],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#FEFEFE",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				primary: "#e3f5f5",
				foo: "#ABD1C5",
				secondary: "#A67C53",
				bar: "#87CEEB",
				// baz: "#0000ff",
			},
		},
		commits: 21,
		pullRequests: 4,
		// Currently, only mobile is supported
		device: "mobile",
	},
	{
		// The ID is used to find images and videos
		id: "pocket-pets",
		// Name displayed on slide
		app: "Pocket Pets",
		name: ["Krischan, ", "Markus, ", "Nina"],
		// Optional, if set the Domain will be shown on the slide
		//domain: "www.we-and.me",
		// Will be printed as written here
		techStack: [
			"react",
			"next.js",
			"Styled Components",
			"useSWR",
			"Node.js",
			"MongoDB Atlas",
			"mongoose",
			"zustand",
			"NextAuth.js",
			"kaboom.js",
		],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#D1C0B8",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				foo: "#F7F5F1",
				primary: "#BC8B5E",
				secondary: "#048080",

				// baz: "#0000ff",
			},
		},
		commits: 21,
		pullRequests: 4,
		// Currently, only mobile is supported
		device: "mobile",
	},
];

export default students;
