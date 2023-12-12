import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import React from "react";
import { StyledImage } from "../../atoms/image/styled";
import Text from "../../atoms/text";
import phoneImg from "../../ions/images/iphone-frame.png";
import Layer from "../../organisms/layer";
import Layout from "../../organisms/layout";
import List from "../../atoms/list";
import ListItem from "../../atoms/list-item";

const aspectRatio = 667 / 375;
const phoneSize = 40.6;
const StyledVideoWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: ${phoneSize}vh;
	height: ${aspectRatio * phoneSize}vh;
	transform: translate(56.9%, -19%);
	border-radius: 0 0 2rem 2rem;
	background: #000;
	box-shadow: 0 0 0 0.05rem hsl(0, 0%, 50%);
	&::before {
		content: "";
		position: absolute;
		z-index: 2;
		right: 0;
		bottom: 100%;
		left: 0;
		height: 5%;
		margin-bottom: -0.4%;
		border-radius: 2rem 2rem 0 0;
		background: var(--theme-color, black);
	}
`;
// const StyledVideo = styled.image`
// 	position: absolute;
// 	z-index: 0;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// `;
const Phone = ({ video, title, subtitle, domain, body, colors, themeColor }) => {
	return (
		<Layout>
			<Layer>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: 0,
						mt: "-10rem",
						ml: "4rem",
						pr: "2rem",
						width: "calc(100vw - 100vh)",
						height: "20rem",
					}}
				>
					<Text variant="h4" sx={{ pb: "1rem" }}>
						{title}{" "}
					</Text>
					{domain && (
						<Box
							href={`https://${domain}`}
							rel="noreferrer"
							target="_blank"
							component="a"
							sx={{ color: "currentColor", textDecoration: "none" }}
						>
							<Text variant="subtitle1" sx={{ pb: "1rem" }}>
								{domain}
							</Text>
						</Box>
					)}
					{subtitle && (
						<List float>
							{subtitle.map((item, index) =>
								index === subtitle.length - 1 ? (
									<ListItem key={item}>{item}</ListItem>
								) : (
									<ListItem key={item}>{item}</ListItem>
								)
							)}
						</List>
					)}
					{colors && (
						<AvatarGroup
							sx={{ justifyContent: "flex-end", ml: "0.5rem" }}
							variant="circular"
							spacing={20}
						>
							{Object.entries(colors).map(([key, value]) => (
								<Avatar
									key={key}
									variant="circular"
									sx={{
										bgcolor: value,
										height: "2rem",
										width: "2rem",
									}}
								>
									{" "}
								</Avatar>
							))}
						</AvatarGroup>
					)}
					{body && <Text>{body}</Text>}
				</Box>
				<Box
					sx={{
						position: "absolute",
						right: 0,
						width: "100vh",
						height: "100vh",
					}}
				>
					{" "}
					<StyledVideoWrapper style={{ "--theme-color": themeColor }}>
						<StyledImage src={video} height={667} width={375} />
						{/* <StyledVideo autoPlay loop muted height={667} width={375}>
							<source src={video} type="video/mp4" />
						</StyledVideo> */}
					</StyledVideoWrapper>
					<StyledImage {...phoneImg} layout="fill" />
				</Box>
			</Layer>
		</Layout>
	);
};
export default Phone;
