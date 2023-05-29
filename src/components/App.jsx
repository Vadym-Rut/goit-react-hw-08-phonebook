import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Phonebook from 'pages/Phonebook/Phonebook';
import Authorization from 'pages/Auth/Authorization';
import UserRegister from 'pages/Auth/UserRegister';
import UserLogin from 'pages/Auth/UserLogin';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';
import { selectAuthToken, selectIsAuth } from 'redux/Auth/authSlectors';
import { refreshOperation } from 'redux/Auth/authOperations';
import { getContacts } from 'redux/Contacts/contactsOperations';

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const isToken = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isToken) {
      dispatch(refreshOperation()).then(() => dispatch(getContacts()));
    }
  }, [isToken, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Authorization />}>
          <Route
            index
            element={
              <RestrictedRoute
                component={UserRegister}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={UserLogin} redirectTo="/contacts" />
            }
          />
        </Route>
        <Route
          path="/contacts"
          element={<PrivateRoute component={Phonebook} redirectTo="/" />}
        />
        <Route
          path="*"
          element={!isAuth ? <Navigate to="/" /> : <Navigate to="/contacts" />}
        />
      </Routes>
    </>
  );
};
