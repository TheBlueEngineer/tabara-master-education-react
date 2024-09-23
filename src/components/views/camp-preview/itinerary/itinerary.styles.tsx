import styled from 'styled-components';

export const Container = styled.section``;

export const List = styled.ul`
  li {
    display: flex;
    position: relative;
    margin-left: 24px;

    &::before {
      content: '';
      position: absolute;
      border-left: 2px solid black;
      height: 100%;
      left: -17px;
    }

    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 100%;
      background-color: black;
      left: -24px;
      align-self: center;
    }

    &:first-child::before {
      top: 8px;
    }

    &:last-child::before {
      bottom: 8px;
    }
  }
`;
