import styled from "styled-components";

export const ButtonWrapper = styled.button`
	padding: 0.8rem 2rem;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 1rem;
	border-radius: 0.5rem;
	transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

	background-color: ${({ theme }) => theme.color.primary};
	border: 2px solid ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};

	&.contained {
		background-color: ${({ theme }) => theme.color.primary};
		border: 2px solid ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.white};
	}

	&.outline {
		background-color: transparent;
		border: 2px solid ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.primary};
	}

	&:enabled {
		cursor: pointer;
		&:hover {
			background-color: ${({ theme }) => theme.color.success};
			border-color: ${({ theme }) => theme.color.success};
			color: ${({ theme }) => theme.color.light};
			&.outline {
				background-color: ${({ theme }) => theme.color.primary};
				border-color: ${({ theme }) => theme.color.primary};
				color: ${({ theme }) => theme.color.light};
			}
		}

		&:active {
			background-color: ${({ theme }) => theme.color.success};
			color: ${({ theme }) => theme.color.light};
			transform: scale(0.95);
		}
	}
`;
