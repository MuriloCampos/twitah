import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-bottom: 25px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 15px;
  }

  strong {
    margin-right: 5px;
    font-size: 18px;
  }

  span {
    font-size: 15px;
    color: gray;
  }
`;

export const Message = styled.div`
  margin-left: 65px;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 15px 65px;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
    color: gray;

    svg {
      &:hover {
        color: blue;
      }
    }
  }
`;
