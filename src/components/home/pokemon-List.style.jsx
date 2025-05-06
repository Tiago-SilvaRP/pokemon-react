import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../button/button";

const boxShadow = `
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`

export const S = {
    Main: styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: ${(children) => children.theme.color};
    `,

    Title: styled.h1`
        text-align: center;
        padding: 10px;
        margin: 40px 0;
    `,

    Cards: styled.ul`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
    `,

    Card: styled.li`
        text-align: center;
        width: 300px;
        padding: 15px;
        border-radius: 15px;
        transition: 0.3s ease-in-out;
        background: ${(children) => children.theme.background};
        ${boxShadow};

        &:hover {
            transform: scale(1.1);
        }
    `,

    StyledLink: styled(Link)`
        color: ${(children) => children.theme.color};
    `,

    Img: styled.img`
        width: 100%;
    `,

    StyledButton: styled(Button)`
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 40px;
    cursor: pointer;
    font-size: 20px;
    transition: 0.3s ease-in-out;
    ${boxShadow};
    color: ${(children) => children.theme.color};
    background: ${(children) => children.theme.background};

        &:hover {
            transform: scale(1.1);
        }
    `,
}