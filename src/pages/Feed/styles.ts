import styled from 'styled-components';

import coverImg from '../../assets/cover.jpeg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`;

export const CoverPicture = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${coverImg});
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const Config = styled.div`
  align-self: flex-start;

  span {
    font-weight: bold;
    color: #3d3c3a;
    font-size: 25px;
    margin-right: 20px;
  }

  button {
    background: transparent;
    border: none;
    svg {
      width: 20px;
      height: 20px;
      color: gray;
    }
  }
`;

export const TweetFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 10px;
`;

export const ProfilePicture = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin-bottom: 100px;
  }
`;

export const Tweets = styled.div`
  margin-top: 50px;
`;
