import styled from "styled-components";

export const FormWrapper = styled.form`
	${({ theme }) => theme.layout.flexBox("column", "flex-start", "flex-start")};
	width: 40rem;
	gap: 1rem;
	border-radius: 1rem;
	background: ${({ theme }) => theme.color.light};
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	padding: 2rem;
	position: relative;
`;

export const FormTitle = styled.h1`
	width: 100%;
	text-align: center;
`;

export const ButtonBox = styled.div`
	width: 100%;
	${({ theme }) => theme.layout.flexBox("column", "flex-end", "center")};
`;
