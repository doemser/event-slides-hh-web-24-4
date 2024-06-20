import React from "react";
import Cover from "../cover";

const Student = ({ student }) => (
	<Cover graduate title={student.app} subsubtitle={student.subTitle} subtitle={student.name} />
);
export default Student;
