import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 18px 0px rgba(0, 162, 238, 0.75);
  place-content: center;
  flex: 1;
  background-color: #fff;

  form {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
`;

export const DropContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;

  svg {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    color: #3d3c3a;
  }
`;
