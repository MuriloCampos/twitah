import React from 'react';
import {
  ChatBubbleOutline,
  ShareOutlined,
  FavoriteBorderOutlined,
  RepeatOutlined,
} from '@material-ui/icons';

import profileImg from '../../assets/profile.jpg';
import { Container, Header, Message, Buttons } from './styles';

interface TweetDTO {
  id: string;
  username: string;
  message: string;
  date: string;
  avatar: string;
  formattedDate?: string;
}

interface TweetProps {
  data: TweetDTO;
}

const Tweet: React.FC<TweetProps> = ({ data }: TweetProps) => {
  return (
    <Container>
      <Header>
        <img src={data.avatar} alt="Profile" />
        <strong>{data.username}</strong>
        <span>{data.formattedDate}</span>
      </Header>
      <Message>{data.message}</Message>
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
