import React from "react";
import {
	Btn,
	Container,
	ErrorTitle,
	ErrorMsg,
	Box,
	BtnBox,
} from "./Error.styled";

const Error: React.FC<ErrorComponent.Props> = ({ error, onClick }) => {
	// Handle on click Exit button
	const handleOnClick = () => {
		if (!onClick) window.location.reload();
		else onClick();
	};

	return (
		<Container>
			<ErrorTitle>Oops! Error occurred😱</ErrorTitle>
			<Box>
				<ErrorMsg>{error.name}</ErrorMsg>
				<ErrorMsg>{error.message}</ErrorMsg>
				<BtnBox>
					<Btn onClick={handleOnClick}>Reload</Btn>
				</BtnBox>
			</Box>
		</Container>
	);
};

export default Error;
