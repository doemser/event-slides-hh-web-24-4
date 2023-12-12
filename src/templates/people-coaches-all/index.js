import Box from "@mui/material/Box";
import React from "react";
import { StyledImage } from "../../atoms/image/styled";
import SpineLogo from "../../atoms/spine-logo";
import Text from "../../atoms/text";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";

const People = ({ title, subtitle, people }) => {
	return (
		<Layout>
			<Layer>
				<SpineLogo color="#e8ebf0" />
			</Layer>
			<Layer>
				<Text variant="h3" sx={{ textAlign: "center" }}>
					{title}
				</Text>
				{subtitle && (
					<Text variant="h4" sx={{ textAlign: "center", mt: "1rem" }}>
						{subtitle}
					</Text>
				)}
				<Box
					display="flex"
					direction="row"
					justifyContent="center"
					flexWrap="wrap"
					gap="1rem"
					sx={{ mt: "2rem" }}
				>
					{people.map(person => {
						return (
							<Box
								key={person.id}
								sx={{
									position: "relative",
									height: "5rem",
									width: "5rem",
								}}
							>
								<StyledImage
									mask
									src={`/images/team/${person.id}.jpg`}
									layout="fill"
									filter="grayscale(100%)"
								/>
							</Box>
						);
					})}
				</Box>
			</Layer>
		</Layout>
	);
};
export default People;
