import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    margin: 40px auto;
    padding: 20px;

    text-align: center;

    background-color: #b9a2b9;

    border: 5px solid black;
    border-radius: 20px;
`

export const Button = styled.button`
    cursor: pointer;
    width: 100px;
    padding: 10px;

    background-color: aquamarine;

    border: 2px solid black;
    border-radius: 10px;

    &:hover, &:focus {
        background-color: #48dcaa;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    }

    &:not(:last-child) {
        margin-right: 10px;
    }
`

export const ResultsList = styled.ul`
    padding: 0;

    list-style: none;
`