import React, { ReactNode } from "react";
import { ButtonWrapper } from "./Button.styled";

interface ButtonProps {
	children: ReactNode;
	variant?: "contained" | "outline" | "text";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
	variant = "contained",
	children,
	onClick,
}) => {
	return (
		<ButtonWrapper className={variant} onClick={onClick}>
			{children}
		</ButtonWrapper>
	);
};

export default Button;
