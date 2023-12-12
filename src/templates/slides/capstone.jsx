import React from "react";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";
import Phone from "../phone";

const Capstone = ({ student }) => (
	<Phone
		video={`/videos/${student.id}.jpg`}
		title={student.app}
		domain={student.domain}
		subtitle={student.name}
		colors={student.ci?.colors}
		themeColor={student.ci?.themeColor}
		body={
			<List float>
				{student.techStack.map((item, index) =>
					index === student.techStack.length - 1 ? (
						<ListItem key={item}>{item}</ListItem>
					) : (
						<ListItem key={item}>{item} ●</ListItem>
					)
				)}
			</List>
		}
	/>
);
export default Capstone;
