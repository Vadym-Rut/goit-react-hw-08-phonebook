import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/Auth/authSlectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
  component: PropTypes.func,
  redirectTo: PropTypes.string,
};
