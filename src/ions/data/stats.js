import { countByKey } from "../utils/array";
import students from "./students";

const stats = {
	messages: { value: 0, label: "Slack Messages", prefix: "> ", slide: "bootcamp" },
	hours: { value: 0, label: "Hours", prefix: "> ", slide: "bootcamp" },
	onOnOnes: { value: 0, label: "One on ones", slide: "bootcamp" },
	// starRating: { value: "5 / 5", label: "Average Ratings", slide: "bootcamp" },
	// ratings: { value: 0, label: "Ratings", slide: "bootcamp" },
	commits: { value: countByKey(students, "commits"), label: "Commits", slide: "graduation" },
	pullRequests: {
		value: countByKey(students, "pullRequests"),
		label: "Pull Requests",
		slide: "graduation",
	},
	standUps: { value: 0, label: "Stand ups", slide: "graduation" },
};

export default stats;
