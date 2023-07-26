import styled from "styled-components";

export const HeaderBox = styled.header`
	${({ theme }) => theme.layout.flexBox("row", "center", "space-between")}
	padding: 0.5rem 2rem;
	position: fixed;
	width: 100vw;
	background-color: ${({ theme }) => theme.color.dark};
	z-index: ${({ theme }) => theme.zIndex.navbar};
`;

export const EmptyBox = styled.div`
	width: 100%;
	height: ${({ theme }) => `calc(1rem + ${theme.heights.navbar})`};
`;

export const ButtonBox = styled.div`
	${({ theme }) => theme.layout.flexBox("row", "center", "space-between")}
	gap: 1rem;
`;
