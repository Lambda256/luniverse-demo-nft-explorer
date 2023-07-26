import styled from "styled-components";

export const Container = styled.div`
	${({ theme }) => theme.layout.flexBox("column", "center", "center")}
	width: 100%;
	padding: 1rem;
	gap: 1rem;
`;

export const TableBox = styled.div`
	position: relative;
	${({ theme }) => theme.layout.flexBox("column", "flex-start", "flex-start")}
	width: 100%;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	border-radius: 1rem;
`;

export const Row = styled.div`
	width: 100%;
	${({ theme }) => theme.layout.flexBox("column", "center", "center")}
	overflow: hidden;
	h1 {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: 1rem;
		padding: 0.5rem;
	}

	h2 {
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		font-size: 1rem;
		width: 80%;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.success {
		color: ${({ theme }) => theme.color.success};
	}
	.failed {
		color: ${({ theme }) => theme.color.error};
	}
`;

export const Column = styled.div<{ size: number }>`
	width: 100%;
	min-height: 5rem;
	overflow: hidden;
	display: grid;
	grid-template-columns: 1fr repeat(${({ size }) => size - 1}, 3fr);
	grid-gap: 1rem;
	padding: 0.5rem;

	&:nth-child(odd) {
		background: ${({ theme }) => theme.color.light};
	}

	&:first-child {
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		color: ${({ theme }) => theme.color.dark};
		background: ${({ theme }) => theme.color.bg};
	}
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

export const ImgBox = styled.div`
	${({ theme }) => theme.layout.flexBox("column", "center", "center")}
	width: 5rem;
	height: 5rem;
	object-fit: cover;
	border: 2px solid ${({ theme }) => theme.color.light};
	border-radius: 1rem;
	overflow: hidden;

	> img {
		width: 80%;
	}
`;

export const Pagination = styled.div`
	width: 100%;
	${({ theme }) => theme.layout.flexBox("row", "center", "flex-end")}
	gap: 1rem;
	padding-right: 1rem;
	align-items: center;
`;

export const RowsPerPageSelect = styled.select`
	font-size: 1rem;
`;

export const ButtonBox = styled.div`
	width: 5rem;
	${({ theme }) => theme.layout.flexBox("row", "center", "space-between")}
	align-items: center;

	> button {
		${({ theme }) => theme.layout.flexBox("row", "center", "center")}
		:hover {
			cursor: pointer;
		}
	}
`;

export const PrevButton = styled.button``;

export const NextButton = styled.button``;

export const PageNum = styled.span``;
