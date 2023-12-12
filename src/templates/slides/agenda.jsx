import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import NemoText from "../../atoms/nemo-text";
import { timeTable } from "../../ions/data";
import course from "../../ions/data/course";
import frogImage from "../../ions/images/frogs.jpg";
import ImageText from "../image-text";

const Slide = () => (
	<ImageText
		image={frogImage}
		body={
			<List>
				{timeTable.map(entry => (
					<ListItem key={entry.time} component="li">
						<NemoText>{entry.time}: </NemoText> {entry.text}
					</ListItem>
				))}
			</List>
		}
		title="Abschlussevent 🎓"
		subtitle={`The Frogs:  ${course.city}-${course.discipline}-${course.year}-${course.instance}`}
	/>
);

export default Slide;
