import styled from "styled-components";

export const TabWrapper = styled.nav`
    position: relative;
    ${({ theme }) => theme.layout.flexBox("row", "flex-start", "flex-start")};
    gap: 1rem;
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.color.light};
`;

export const TabButton = styled.button`
    width: 6rem;
    color: ${({ theme }) => theme.color.lightDark};
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: all 0.3s ease;
    background: none;

    &.active {
        color: ${({ theme }) => theme.color.primary};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
`;

export const TabIndicator = styled.div`
    position: absolute;
    bottom: 0rem;
    /* left: 0rem; */
    width: 6rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
`;
