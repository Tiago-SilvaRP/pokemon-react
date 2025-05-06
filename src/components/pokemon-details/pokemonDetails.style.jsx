import styled from "styled-components";

const backgroundTitle = `
    background: rgba(255, 145, 77, 0.2);
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 5px;
    width: 100%;

    & h3 {
        margin-bottom: 5px;
    }
`;

export const S = {
    Main: styled.main`
        display: flex;
        margin-top: 30px;
        background: linear-gradient(135deg, #ffdd57, #ff914d);
        color: ${(children) => children.theme.color};
        border-radius: 15px;
        width: 400px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

        @media (max-width: 500px) {
            width: 90%;
            img {
                height: 200px;
            }
        }
    `,

    Card: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px;
        width: 100%;
    `,

    TitleCard: styled.h3`
        margin-bottom: 10px;
        width:100%;
        text-align: center;
        padding: 7px;
        border-radius: 5px;
        font-weight: bold;
        ${backgroundTitle};
    `,

    Type: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 7px;
        ${backgroundTitle};
        border-radius: 8px;

        & ul {
            display: flex;
            gap: 10px;
        }
    `,

    Li: styled.li`
        padding: 5px 10px;
        background: #ff914d;
        border-radius: 5px;
        font-weight: bold;
    `,

    Img: styled.img`
        height: 250px;
        margin: 15px;
        border-radius: 10px;
        background:#f7f7e9;
    `,

    Description: styled.div`
        ${Description};
    `,

    Abilitie: styled(Description)``,

    Moves: styled(Description)`
        margin-top: 10px;
        width: 100%;
    `,

    UlAbilitieMoves: styled.ul`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
    `,
}