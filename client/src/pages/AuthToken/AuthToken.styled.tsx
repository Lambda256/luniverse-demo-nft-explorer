import styled from "styled-components";

export const Container = styled.section`
	${({ theme }) => theme.layout.flexBox("column", "center", "flex-start")};
	position: relative;
	padding: 3rem;
	width: 100%;
	height: calc(100vh - 1rem - ${({ theme }) => theme.heights.navbar});
	gap: 1rem;
`;

export const TextBox = styled.div`
	${({ theme }) => theme.layout.flexBox("column", "flex-start", "flex-start")};
	width: 40rem;
	gap: 1rem;
	border-radius: 1rem;
	background: ${({ theme }) => theme.color.light};
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	padding: 2rem;
	position: relative;
`;

export const TextTitle = styled.h1`
	width: 100%;
	text-align: center;
`;

export const TextBody = styled.span`
	width: 100%;
	color: ${({ theme }) => theme.color.dark};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	font-size: 1.2rem;
	border-bottom: 2px solid ${({ theme }) => theme.color.lightDark};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
