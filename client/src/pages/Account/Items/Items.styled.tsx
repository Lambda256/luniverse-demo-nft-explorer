import styled from "styled-components";

export const ItemsWrapper = styled.div`
	position: relative;
	${({ theme }) => theme.layout.gridBox("column", "18.75rem")};
	gap: 1rem;
`;
