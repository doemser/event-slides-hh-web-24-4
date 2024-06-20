import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import bootcampImg from "../../ions/images/graduation-2.jpg";
import ImageText from "../image-text";

const info = {
	students: "7",
	days: "130",
	sessions: "60",
	recapProjects: "6",
};

const Slide = () => (
	<ImageText
		image={bootcampImg}
		body={
			<List>
				<ListItem component="li">
					<NemoText>{info.students}</NemoText> Students
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.days}</NemoText> Course Days
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.sessions}</NemoText> Sessions
				</ListItem>
				<ListItem component="li">
					<NemoText>{info.recapProjects}</NemoText> Recap Projects
				</ListItem>
			</List>
		}
		title="Review"
		subtitle="Bootcamp Numbers"
	/>
);

export default Slide;
