import React from 'react';
import Header from '../../components/layout/Header';
import LoginContainer from '../../containers/auth/Login.container';

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer />
    </>
  )
}

export default LoginPage