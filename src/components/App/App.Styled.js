import styled from 'styled-components';

export const Title = styled.h1`
    margin: 0;
    padding: 20px;
    font-size: 48px;
    text-transform: uppercase;
    animation: waviy 1.5s infinite;
    transition: transform 500ms ease-in;


@keyframes waviy {
    0%,40%,100% {
      transform: translateY(0)
    }
    20% {
      transform: translateY(-20px)
    }
  }
`;

export const SectionName = styled.h2`
    margin: 0;
    padding: 20px;
    font-size: 30px;
`;

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
    color: rgb(6, 58, 58);
    background-color: #f8e806;
`;