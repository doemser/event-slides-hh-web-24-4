import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import graduationImg from "../../ions/images/graduation.jpg";
import ImageText from "../image-text";

const info = {
	capstoneTeams: "4",
	capstoneDays: "50",
	pullRequests: "297",
	commits: "2869",
};

const Slide = () => (
	<ImageText
		image={graduationImg}
		body={
			<List>
				<ListItem component="li">
					<NemoText>{info.capstoneTeams}</NemoText> Capstone teams
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.capstoneDays}</NemoText> Capstone days
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.pullRequests}</NemoText> Git Hub Pull Requests
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.commits}</NemoText> Git Hub Project Commits
				</ListItem>
			</List>
		}
		title="Review"
		subtitle="Capstone Numbers"
	/>
);

export default Slide;
