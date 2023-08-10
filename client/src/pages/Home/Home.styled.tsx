import styled from "styled-components";

export const Container = styled.section`
	${({ theme }) => theme.layout.flexBox("column", "center", "flex-start")};
	position: relative;
	padding: 1rem 2rem;
	width: 100%;
	height: calc(100vh - 1rem - ${({ theme }) => theme.heights.navbar});
`;

export const TextBox = styled.div``;

export const Title = styled.h1`
	font-size: 2rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin: 1rem;
`;

export const ImgBox = styled.div`
	position: relative;
	min-width: 30rem;
	max-width: 50%;
	overflow: hidden;
`;

export const Img = styled.img`
	width: 100%;
	object-fit: cover;
`;
