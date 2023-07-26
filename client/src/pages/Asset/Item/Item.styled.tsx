import styled from "styled-components";

export const ItemWrapper = styled.div`
	${({ theme }) => theme.layout.flexBox("row", "flex-start", "center")};
	width: 100%;
	gap: 2rem;
	padding: 3rem 8rem;
`;

export const ImgBox = styled.img`
	max-width: 80rem;
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	border-radius: 1rem;
	overflow: hidden;
	object-fit: cover;
`;

export const ContentWrapper = styled.div`
	${({ theme }) => theme.layout.gridBox("column", "minMax(10rem, 1fr)")};
	width: 100%;
	max-width: 50rem;
	gap: 1rem;
`;

export const ContentBox = styled.div`
	position: relative;
	${({ theme }) => theme.layout.flexBox("row", "center", "center")};
	width: 100%;
	max-width: 50rem;
	height: 6rem;
	border-radius: 1rem;
	padding-right: 2rem;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	grid-column: 2 span;
`;

export const IconBox = styled.div`
	position: relative;
	${({ theme }) => theme.layout.flexBox("row", "center", "center")};
	width: 20%;
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
	width: 80%;
	overflow: hidden;
`;

export const SubText = styled.h4`
	width: 100%;
	padding-left: 1rem;
	text-align: left;
	color: ${({ theme }) => theme.color.dark};
`;

export const MainText = styled.h3`
	width: 100%;
	padding-left: 1rem;
	text-align: left;
	position: relative;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 1.25rem;
	color: ${({ theme }) => theme.color.black};

	> a {
		color: ${({ theme }) => theme.color.secondary};
		text-decoration: underline;
	}
`;

export const AttributesWrapper = styled.div`
	${({ theme }) => theme.layout.flexBox("column", "flex-start", "flex-start")};
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	border-radius: 1rem;
	width: 100%;
	grid-column: 4 span;
	overflow: hidden;
`;

export const AttributesHeader = styled.div`
	width: 100%;
	padding: 0.5rem 1.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.color.bg};
	font-size: 1.25rem;
	color: ${({ theme }) => theme.color.black};
	background: ${({ theme }) => theme.color.bg};
`;

export const AttributesBody = styled.div`
	width: 100%;
	padding: 1rem;
	${({ theme }) => theme.layout.gridBox("column", "12rem")};
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	grid-auto-rows: minmax(6rem, 1fr);
	grid-gap: 1rem;
`;

export const AttributesBox = styled.div`
	width: 100%;
	height: 100%;
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	border-radius: 1rem;
	padding: 1rem;
	background: ${({ theme }) => theme.color.light};
`;

export const AttributesType = styled.h3`
	font-size: 1rem;
	color: ${({ theme }) => theme.color.lightDark};
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const AttributesValue = styled.h2`
	font-size: 1.25rem;
	color: ${({ theme }) => theme.color.black};
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const EmptyText = styled.h1`
	display: block;
	width: 100%;
	height: 100%;
	text-align: center;
	align-items: center;
	line-height: 10rem;
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
