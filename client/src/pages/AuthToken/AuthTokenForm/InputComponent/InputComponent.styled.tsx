import styled from "styled-components";
const Duration = ".2s";

export const InputBox = styled.div`
	width: 100%;
	${({ theme }) => theme.layout.flexBox("column", "flex-start", "flex-start")};
	margin: 1rem 0;
	position: relative;
`;

export const InputLabel = styled.label`
	color: ${({ theme }) => theme.color.dark};
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	position: absolute;
	top: 1.5rem;
	left: 0rem;
	display: block;
	font-size: 1.2rem;
	transition: ${Duration} ease-out;
	opacity: 0.5;
	/* will-change: top, font-size; */

	&:hover {
		cursor: text;
	}
`;

export const Input = styled.input`
	${({ theme }) =>
		theme.layout.flexBox("column", "flex-start", "space-between")}
	margin: 1.5rem 0;
	width: 100%;
	font-size: 1.2rem;
	padding: 0.6rem;
	padding-left: 0;
	background: transparent;
	border: none;
	border-bottom: 2px solid ${({ theme }) => theme.color.dark};
	transition: ${Duration};
	border-radius: 0;

	&:focus {
		outline: none;
	}

	&:valid {
		border-color: ${({ theme }) => theme.color.dark};
	}

	&:focus + label,
	&.has-input + label {
		top: 0.3rem;
		font-size: 1rem;
	}
`;

export const RequiredStar = styled.span`
	color: red;
`;
