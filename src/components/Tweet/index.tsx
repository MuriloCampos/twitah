import React from 'react';
import {
  ChatBubbleOutline,
  ShareOutlined,
  FavoriteBorderOutlined,
  RepeatOutlined,
} from '@material-ui/icons';

import profileImg from '../../assets/profile.jpg';
import { Container, Header, Message, Buttons } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={profileImg} alt="Profile" />
        <strong>Murilo Campos</strong>
        <span>May 11</span>
      </Header>
      <Message>Hello Twitah</Message>
      <Buttons>
        <button type="button">
          <ChatBubbleOutline />
        </button>
        <button type="button">
          <RepeatOutlined />
        </button>
        <button type="button">
          <FavoriteBorderOutlined />
        </button>
        <button type="button">
          <ShareOutlined />
        </button>
      </Buttons>
    </Container>
  );
};

export default Tweet;
