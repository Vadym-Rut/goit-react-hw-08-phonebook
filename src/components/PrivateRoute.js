import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth, selectIsRefreshing } from 'redux/Auth/authSlectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectIsAuth);
  const isRefresh = useSelector(selectIsRefreshing);
  const shouldRedirect = !isRefresh && !isAuth;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func,
  redirectTo: PropTypes.string,
};
