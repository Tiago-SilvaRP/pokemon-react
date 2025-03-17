import { styled } from 'styled-components'

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
    }
    
    .card {
        text-align: center;
        width: 300px;
        padding: 15px;
        border-radius: 15px;
        transition: 0.3s ease-in-out;

        &:hover {
            scale: 1.1;
        }
    }

    .imagens-lista{
        width: 100%;
    }

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 40px 0;
        border-radius: 8px;
    }

    .btn {
        height: 50px;
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin: 40px;
        cursor: pointer;
        font-size: 20px;
        transition: 0.3s ease-in-out;
        

        &:hover {
            scale: 1.1;
        }
    }

    .card, .btn, h1 {
        box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }

`
