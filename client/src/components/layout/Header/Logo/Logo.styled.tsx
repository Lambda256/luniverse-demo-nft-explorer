import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const LogoBox = styled(LinkR)`
	${({ theme }) => theme.layout.flexBox("row", "center", "space-between")}
	height: ${({ theme }) => theme.heights.navbar};
	gap: 0.5rem;
`;

export const LogoImg = styled.img`
	height: 80%;
	object-fit: cover;
	overflow: hidden;
	border-radius: 50%;
`;

export const LogoText = styled.h1`
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	color: ${({ theme }) => theme.color.white};
`;
