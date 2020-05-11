import React, { useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from '@material-ui/core/TextField';

import profileImg from '../../assets/profile.jpg';
import Tweet from '../../components/Tweet';
import {
  Container,
  CoverPicture,
  Header,
  TweetFeed,
  ProfilePicture,
  Config,
  Tweets,
} from './styles';

const Feed: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <>
      <CoverPicture />
      <Container>
        <Header>
          <ProfilePicture>
            <img src={profileImg} alt="Profile" />
          </ProfilePicture>
          <Config>
            <span>Hi Murilo!</span>
            <button type="button">
              <SettingsIcon />
            </button>
          </Config>
        </Header>
        <TweetFeed>
          <TextField
            id="outlined-multiline-flexible"
            label="What's happening?"
            inputProps={{ maxLength: 280 }}
            style={{ backgroundColor: '#F0F0F5' }}
            multiline
            rowsMax={4}
            value={value}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />

          <Tweets>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </Tweets>
        </TweetFeed>
      </Container>
    </>
  );
};

export default Feed;
