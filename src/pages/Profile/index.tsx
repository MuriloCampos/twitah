import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FaceIcon from '@material-ui/icons/Face';
import PanoramaIcon from '@material-ui/icons/Panorama';
import Tooltip from '@material-ui/core/Tooltip';

import Upload from '../../components/Upload';
import api from '../../services/api';
import { Container, DropContainer } from './styles';

const Profile: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const [avatar, setAvatar] = useState<File>();
  const [cover, setCover] = useState<File>();
  const [name, setName] = useState('');

  useEffect(() => {
    const userState = location.state as any;

    setName(userState.username);
  }, []);

  const handleAvatarChange = useCallback((files: File[]) => {
    setAvatar(files[0]);
  }, []);

  const handleCoverChange = useCallback((files: File[]) => {
    setCover(files[0]);
  }, []);

  const handleSubmit = useCallback(async () => {
    const data = new FormData();

    if (avatar) {
      data.append('avatar', avatar);
    }

    if (cover) {
      data.append('cover', cover);
    }

    data.append('name', name);

    try {
      await api.put('/users', data);
      history.push('/');
    } catch (err) {
      console.log(err.response.error);
    }
  }, [avatar, cover, name, history]);

  return (
    <Container>
      <form>
        <DropContainer>
          <Tooltip title="Avatar">
            <FaceIcon />
          </Tooltip>
          <Upload onUpload={handleAvatarChange} />
        </DropContainer>
        <DropContainer>
          <Tooltip title="Cover">
            <PanoramaIcon />
          </Tooltip>
          <Upload onUpload={handleCoverChange} />
        </DropContainer>

        <TextField
          id="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          label="Full Name"
          variant="outlined"
          style={{ marginBottom: 30 }}
          error={name === ''}
        />

        <Button
          variant="contained"
          style={{
            backgroundColor: '#00a2ee',
            color: '#fff',
            fontWeight: 'bold',
          }}
          onClick={handleSubmit}
        >
          Update
        </Button>
      </form>
    </Container>
  );
};

export default Profile;
