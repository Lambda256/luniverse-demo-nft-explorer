import styled from "styled-components";

export const BalanceContainer = styled.div`
	${({ theme }) => theme.layout.flexBox("row", "center", "flex-start")};
	width: 100%;
	gap: 1rem;
	margin: 1rem 0;
`;

export const ContentWrap = styled.div`
	${({ theme }) => theme.layout.flexBox("row", "center", "center")};
	width: 16rem;
	height: 6rem;
	border-radius: 1rem;
	padding-right: 2rem;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
`;

export const IconBox = styled.div`
	${({ theme }) => theme.layout.flexBox("row", "center", "center")};
	width: 5rem;
	height: 100%;
	background: ${({ theme }) => theme.color.bg};
	font-size: 1.25rem;

	> svg {
		object-fit: cover;
		width: 1.5rem;
		height: 1.5rem;
	}
`;

export const TextBox = styled.div`
	${({ theme }) => theme.layout.flexBox("column", "center", "center")};
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const NameText = styled.h4`
	width: 100%;
	height: 50%;
	padding-left: 1rem;
	text-align: left;
	color: ${({ theme }) => theme.color.dark};
	line-height: 4rem;
`;

export const ValueText = styled.h3`
	width: 100%;
	height: 50%;
	padding-left: 1rem;
	text-align: left;
	position: relative;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 1.25rem;
	color: ${({ theme }) => theme.color.black};
	color: ${({ children, theme }) =>
		children === "Not Found" && theme.color.error};
`;
