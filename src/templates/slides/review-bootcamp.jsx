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
	capstoneTeams: "4",
	gameRewards: "1337",
	cities: "10",
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
					<NemoText>{info.cities}</NemoText> Städte
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
				<ListItem component="li">
					<NemoText>{info.gameRewards}</NemoText> 🏆
				</ListItem>
			</List>
		}
		title="Rückblick"
		subtitle="The Frogs: Bootcamp Zahlen"
	/>
);

export default Slide;
