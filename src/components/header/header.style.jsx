import styled from "styled-components"

export const S = {
    HeaderContainer: styled.header`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 70px;
        width: 100%;
        margin-top: 30px;

        @media(max-width: 560px) {
            flex-direction: column;
            margin-bottom: 200px;
        }
        `,

PokeHome: styled.div`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`,

HomeText: styled.h3`
    margin-left: 10px;
    color: ${(children) => children.theme.color};
`,

Img: styled.img`
    height: 50px;
    
    &:hover{
        trasnform: scale(1.1);
    }
`,

Logo:styled.img`
    height: 150px;
`,
}
