import React, { useState, useEffect, useCallback } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from '@material-ui/core/TextField';
import { useHistory, Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import coverImg from '../../assets/cover.jpeg';
import api from '../../services/api';
import Tweet from '../../components/Tweet';
import {
  Container,
  CoverPicture,
  Header,
  TweetFeed,
  ProfilePicture,
  Config,
  Tweets,
  TweetBoxDiv,
} from './styles';

interface User {
  name: string;
  avatar: string;
  cover: string;
  avatar_url: string;
  cover_url: string;
}

interface Tweet {
  id: string;
  username: string;
  message: string;
  date: string;
  avatar: string;
  formattedDate?: string;
}

const Feed: React.FC = () => {
  const [newTweetText, setNewTweetText] = useState('');
  const [userInfo, setUserInfo] = useState<User>({} as User);
  const [tweetList, setTweetList] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  const tweetId = 0;

  useEffect(() => {
    async function loadUser(): Promise<void> {
      setLoading(true);
      const response = await api.get('/users');

      const user: User = response.data;

      setUserInfo(user);
      setLoading(false);
    }

    async function loadTweets() {
      const response = await api.get<Tweet[]>('/tweets');

      const formattedData = response.data.map(item => {
        return {
          ...item,
          formattedDate: format(parseISO(item.date), 'MMM dd'),
          avatar:
            userInfo.avatar === 'undefined'
              ? `https://api.adorable.io/avatars/50/abott@adorable.png`
              : userInfo.avatar_url,
        };
      });

      setTweetList(formattedData);
    }

    loadUser();
    loadTweets();
  }, [userInfo.avatar, userInfo.avatar_url]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTweetText(event.target.value);
  };

  const handleAddTweet = useCallback(async () => {
    if (!newTweetText) {
      setError(true);
      return;
    }
    const response = await api.post<Tweet>('/tweets', {
      message: newTweetText,
      date: new Date(),
    });

    const newTweet: Tweet = {
      id: response.data.id,
      username: userInfo.name,
      date: format(parseISO(response.data.date), 'MMM dd'),
      message: newTweetText,
      avatar:
        userInfo.avatar === 'undefined'
          ? `https://api.adorable.io/avatars/50/abott@adorable.png`
          : userInfo.avatar_url,
    };

    setTweetList([newTweet, ...tweetList]);
    setNewTweetText('');
    setError(false);
  }, [newTweetText, tweetList, userInfo]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <CoverPicture
            userCover={
              userInfo.cover === 'undefined' ? coverImg : userInfo.cover_url
            }
          />
          <Container>
            <Header>
              <ProfilePicture>
                <img
                  src={
                    userInfo.avatar === 'undefined'
                      ? `https://api.adorable.io/avatars/50/abott@adorable.png`
                      : userInfo.avatar_url
                  }
                  alt="Profile"
                />
              </ProfilePicture>
              <Config>
                <span>Hi {userInfo.name}! </span>
                <Link
                  to={{
                    pathname: '/profile',
                    state: { username: userInfo.name },
                  }}
                >
                  <SettingsIcon />
                </Link>
              </Config>
            </Header>
            <TweetFeed>
              <TweetBoxDiv>
                <TextField
                  id="outlined-multiline-flexible"
                  label="What's happening?"
                  inputProps={{ maxLength: 280 }}
                  value={newTweetText}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  error={error}
                />
                <button type="button" onClick={handleAddTweet}>
                  Tweet
                </button>
              </TweetBoxDiv>

              <Tweets>
                <ul>
                  {tweetList.map(tweet => (
                    <li key={tweet.id}>
                      <Tweet data={tweet} />
                    </li>
                  ))}
                </ul>
              </Tweets>
            </TweetFeed>
          </Container>
        </>
      )}
    </>
  );
};

export default Feed;
