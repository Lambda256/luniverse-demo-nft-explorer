import styled from "styled-components";

interface Props {
    size: number;
    color?: string;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    ${({ theme }) => theme.layout.flexBox()}

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Spinner = styled.div<Props>`
    position: relative;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border: ${({ size }) => size / 10}px solid
        ${({ theme, color }) => color || theme.color.lightDark};
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    &::before {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border: inherit;
        border-radius: 50%;
        content: "";
    }
`;
