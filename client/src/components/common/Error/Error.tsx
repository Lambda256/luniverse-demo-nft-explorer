import React from "react";
import {
	Btn,
	Container,
	ErrorTitle,
	ErrorMsg,
	Box,
	BtnBox,
} from "./Error.styled";

interface ErrorProps {
	error: any;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Error: React.FC<ErrorProps> = ({ error, onClick }) => {
	// Handle on click Exit button
	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!onClick) window.location.reload();
		else onClick(e);
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
