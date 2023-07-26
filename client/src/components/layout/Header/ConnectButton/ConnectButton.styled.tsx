import styled from "styled-components";

export const Button = styled.button`
	background-color: ${({ theme }) => theme.color.primary}; /* Green */
	border: none;
	color: ${({ theme }) => theme.color.white};
	padding: 0.8rem 2rem;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 1rem;
	border-radius: 0.5rem;
	transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

	&:enabled {
		cursor: pointer;
		&:hover {
			background-color: ${({ theme }) => theme.color.success};
		}

		&:active {
			background-color: ${({ theme }) => theme.color.success};
			transform: scale(0.99);
		}
	}
`;
