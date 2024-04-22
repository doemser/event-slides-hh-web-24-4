import React from "react";
import Image from "../image";

const Slide = () => (
	<Image
		image={{ src: "/images/students.jpg" }}
		alt="image of all students"
		objectFit="contain"
	/>
);

export default Slide;
