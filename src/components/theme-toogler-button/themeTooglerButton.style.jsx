import styled from "styled-components";
import { Button } from "../button/button";

export const S = {
    StyledButon: styled(Button)`
        background-color: transparent;
        height: 50px;
        border: transparent;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    
        &:hover{
        scale: 1.1;
        }
    `,
    Img: styled.img`
        height: 100%;
    `
}