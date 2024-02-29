import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import bootcampImg from "../../ions/images/bootcamp.jpg";
import ImageText from "../image-text";

const info = {
	students: "16",
	days: "60",
	sessions: "59",
	recapProjects: "6",
	capstoneDays: "20",
	capstoneTeams: "1",
	gameRewards: "4711",
};

const Slide = () => (
	<ImageText
		image={bootcampImg}
		body={
			<List>
				<ListItem component="li">
					<NemoText>{info.students}</NemoText> Student*Innen
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.days}</NemoText> Kurstage
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.sessions}</NemoText> Sessions
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.recapProjects}</NemoText> Recap Projects
				</ListItem>
			</List>
		}
		title="Rückblick"
		subtitle="🧜 Bootcamp Zahlen"
	/>
);

export default Slide;
