import React from 'react';
import { AuthContainer, AuthLink, AuthWrapper, NavWrapper } from './Authorization.styled';
import { Outlet } from 'react-router-dom';

const Authorization = () => {
  return (
    <AuthContainer>
      <AuthWrapper>
        <NavWrapper>
          <AuthLink to="/">Registration</AuthLink>
          <AuthLink to="login">Login</AuthLink>
        </NavWrapper>
        <Outlet />
      </AuthWrapper>
    </AuthContainer>
  );
};

export default Authorization;
