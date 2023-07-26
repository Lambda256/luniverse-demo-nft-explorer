import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow.style1};
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.color.light};

    &:hover {
        border-color: ${({ theme }) => theme.color.primary};

        img {
            transform: scale(1.1);
        }
    }
`;

export const ImgBox = styled.div`
    ${({ theme }) => theme.layout.flexBox("row", "center", "center")};
    width: 100%;
    height: calc(100% - 3rem);
    overflow: hidden;
    object-fit: cover;
`;

export const ItemImg = styled.img`
    width: 100%;
    transition: all 0.2s ease-in-out;
`;

export const TextBox = styled.div`
    padding: 0 1rem;
    ${({ theme }) => theme.layout.flexBox("row", "center", "space-between")}
    height: 3rem;
    background: ${({ theme }) => theme.color.light};
`;

export const H4 = styled.h4`
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
