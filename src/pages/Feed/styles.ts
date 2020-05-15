import styled, { css } from 'styled-components';

interface CoverPictureProps {
  userCover?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`;

export const CoverPicture = styled.div<CoverPictureProps>`
  display: flex;
  width: 100%;
  height: 200px;
  background-position: center center;
  background-repeat: no-repeat;
  ${props =>
    props.userCover &&
    css`
      background-image: url(${props.userCover});
    `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const Config = styled.div`
  display: flex;
  padding-bottom: 20px;

  span {
    font-weight: bold;
    color: #3d3c3a;
    font-size: 25px;
    margin-right: 10px;
  }

  a {
    svg {
      width: 30px;
      height: 30px;
      color: gray;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
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
  border-radius: 20px;
  box-shadow: 0px 0px 18px 0px rgba(0, 162, 238, 0.75);
  margin-bottom: 40px;
`;

export const ProfilePicture = styled.div`
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 75px;
    margin-bottom: 100px;
  }
`;

export const Tweets = styled.div`
  margin-top: 50px;
  ul {
    list-style: none;
  }
`;

export const TweetBoxDiv = styled.div`
  display: flex;
  flex-direction: row;

  button {
    background: #00a2ee;
    border-radius: 30px;
    width: 100px;
    border: none;
    margin-left: 8px;
    font-weight: bold;
    color: #fff;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
