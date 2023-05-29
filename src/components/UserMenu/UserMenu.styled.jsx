import styled from 'styled-components';

export const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  padding-bottom: 20px;

  border-bottom: 2px solid #757575;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  margin-left: 15px;
`;

export const BtnLogout = styled.button`
  padding: 5px 20px;

  font-size: 14px;
  color: rgb(238, 238, 238);

  cursor: pointer;

  border: none;
  border-radius: 4px;
  background-color: #3a4043;
  box-shadow: 5px 5px 15px #4a4a4a;

  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 8px #4a4a4a;
  }
  &:hover,
  &:focus {
    background: #542d2d;
  }
`;