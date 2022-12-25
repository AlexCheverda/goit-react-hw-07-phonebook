import styled from 'styled-components';

export const FilterBox = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    row-gap: 20px;
    padding: 10px 40px;
    font-size: 20px;
`;

export const Label = styled.label`
    margin: 0;
    padding: 20px;
    font-size: 30px;
`;

export const Input = styled.input`
    padding: 12px;
    outline: none;
    border: 1px solid rgb(19, 86, 209);
    border-radius: 15px;
`;