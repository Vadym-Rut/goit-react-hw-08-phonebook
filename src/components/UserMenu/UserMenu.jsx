import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import stringAvatar from 'utils/avatarFn';
import { selectUser } from 'redux/Auth/authSlectors';
import { logoutOperation } from 'redux/Auth/authOperations';
import {
  BtnLogout,
  LogoContainer,
  UserName,
  WrapperMenu,
} from './UserMenu.styled';

const UserMenu = () => {
  const userName = useSelector(selectUser) || '';
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logoutOperation());
  };

  return (
    <WrapperMenu>
      <LogoContainer>
        <Avatar {...stringAvatar(userName)} sx={{ bgcolor: deepPurple[500] }} />
        <UserName>{userName}</UserName>
      </LogoContainer>
      <BtnLogout type="button" onClick={() => logoutUser()}>
        Logout
      </BtnLogout>
    </WrapperMenu>
  );
};

export default UserMenu;
