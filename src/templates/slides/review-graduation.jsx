import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import graduationImg from "../../ions/images/kermit_graduation.jpg";
import ImageText from "../image-text";

const info = {
	capstoneDays: "20",
	capstoneTeams: "4",
	pullRequests: "75",
	commits: "679",
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
		subtitle="The Frogs: Capstone Zahlen"
	/>
);

export default Slide;
