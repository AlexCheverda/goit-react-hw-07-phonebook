import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid grey;
    padding: 10px 20px;
    border-radius: 15px;
    box-shadow: 1px 2px 2px 2px rgb(196, 179, 179);
    font-size: 20px;
    background-color: #fff;

    transition: transform 250ms linear;
    &:hover {
    transform: scale(1.1);
}
`;

export const Btn = styled.button`
    padding: 2px 12px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    color: rgb(6, 58, 58);
    background-color: #f8e806;
    transition: background-color 250ms linear, color 250ms linear;
    &:hover {
        background-color: rgb(247, 147, 16);
        color: #fff;
    }
`;