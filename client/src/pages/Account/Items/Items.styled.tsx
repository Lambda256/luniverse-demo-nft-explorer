import styled from "styled-components";

export const ItemsWrapper = styled.div`
	position: relative;
	${({ theme }) => theme.layout.gridBox("column", "18.75rem")};
	gap: 1rem;
`;

export const ErrorText = styled.h1`
	width: 100%;
	height: 100%;
	text-align: center;
	padding: 2rem;
	font-size: 2rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.error};
`;

export const EmptyText = styled.h1`
	width: 100%;
	height: 100%;
	text-align: center;
	padding: 2rem;
	font-size: 2rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.dark};
`;
