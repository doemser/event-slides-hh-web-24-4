const students = [
	{
		// The ID is used to find images and videos
		// ❗️
		id: "shelfie",
		// Name displayed on slide
		app: "Shelfie",
		name: ["Anja, ", "Aytac, ", "Miriam, ", "Stella"],
		// Optional, if set the Domain will be shown on the slide
		// domain: "www.we-and.me",
		// Will be printed as written here
		techStack: ["react", "next.js", "Styled Components", "Framer Motion"],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#edae49",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				primary: "#edae49",
				secondary: "#fceccc",
				foo: "#168473",
				// bar: "#00ff00",
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
		id: "budget_buddy",
		// Name displayed on slide
		app: "Bugdet Buddy",
		name: ["Eileen, ", "Nadine, ", "Sebastian, ", "Sophia"],
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
			"Chart.js",
		],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#fefcf4",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				primary: "#fefcf4",
				secondary: "#5531c8",
				//foo: "#ffa573",
				// bar: "#00ff00",
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
		id: "event",
		// Name displayed on slide
		app: "E",
		name: ["Edona, ", "Jessica, ", "Than"],
		// Optional, if set the Domain will be shown on the slide
		//domain: "www.we-and.me",
		// Will be printed as written here
		techStack: ["react", "next.js", "Styled Components", "ticketmaster API"],
		// Optional
		ci: {
			// Optional, used to fill the gap around the notch on certain devices
			themeColor: "#fff",
			// Optional, used for color-swatches on the slide
			colors: {
				// Keys can have any name
				primary: "#fdf9f7",
				secondary: "#5e5e5e",
				foo: "#c082d3",
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
