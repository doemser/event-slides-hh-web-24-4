import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import graduationImg from "../../ions/images/mermaids_02.jpg";
import ImageText from "../image-text";

const info = {
	capstoneTeams: "3",
	capstoneDays: "20",
	pullRequests: "58",
	commits: "497",
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
					<NemoText>{info.capstoneDays}</NemoText> Capstone Tage
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.pullRequests}</NemoText> Git Hub Pull Requests
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.commits}</NemoText> Git Hub Project Commits
				</ListItem>
			</List>
		}
		title="Rückblick"
		subtitle="🧜 Capstone Zahlen"
	/>
);

export default Slide;
