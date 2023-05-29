import { useDispatch } from 'react-redux';
import AuthForm from 'components/AuthForm/AuthForm';
import { loginOperation } from 'redux/Auth/authOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const optionsLoginForm = [
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    palceholder: 'Enter email...',
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    palceholder: 'Enter password...',
  },
];

const initialStateLoginForm = {
  email: '',
  password: '',
};

const UserLogin = () => {
  const dispatch = useDispatch();

  const handleLoginUser = data => {
    dispatch(loginOperation(data)).then(response => {
      if (response.error) {
        toast.error('Incorrect email or password!');
      }
    });
  };

  return (
    <>
      <h1>Login</h1>
      <AuthForm
        submitTitle="Login"
        onSubmit={handleLoginUser}
        options={optionsLoginForm}
        initialState={initialStateLoginForm}
      />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </>
  );
};

export default UserLogin;
