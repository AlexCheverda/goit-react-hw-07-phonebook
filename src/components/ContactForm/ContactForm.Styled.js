import styled from 'styled-components';

export const Form = styled.form`
    min-width: 300px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    border: 1px solid rgb(6, 123, 231);
    border-radius: 15px;
    padding: 30px 40px;
    font-size: 20px;
    background-color: rgb(11, 194, 250);
`;

export const Input = styled.input`
    padding: 12px;
    outline: none;
    border: 1px solid rgb(19, 86, 209);
    border-radius: 15px;
`;

export const Label = styled.label`
    margin: 0;
    padding: 20px;
    font-size: 30px;
`;

export const FormBtn = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    font-size: 18px;
    color: rgb(6, 58, 58);
    background-color: #f8e806;
    transition: background-color 250ms linear, color 250ms linear;

    &:hover {
        background-color: rgb(247, 147, 16);
        color: #fff;
    }
`;

