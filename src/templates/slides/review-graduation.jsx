import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import graduationImg from "../../ions/images/graduation.jpg";
import ImageText from "../image-text";

const info = {
	capstoneTeams: "3",
	capstoneDays: "20",
	pullRequests: "83",
	commits: "585",
};

const Slide = () => (
	<ImageText
		image={graduationImg}
		body={
			<List>
				<ListItem component="li">
					<NemoText>{info.capstoneTeams}</NemoText> Capstone Teams
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.capstoneDays}</NemoText> Capstone Days
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.pullRequests}</NemoText> Pull Requests
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.commits}</NemoText> Commits
				</ListItem>
			</List>
		}
		title="Review"
		subtitle="Capstone Numbers"
	/>
);

export default Slide;
