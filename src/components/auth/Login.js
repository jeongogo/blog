import React, { useRef } from 'react'
import styled from 'styled-components';

const Login = ({ handleLogin }) => {
  const emailRef = useRef();
  const nameRef = useRef();

  const onLogin = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: nameRef.current.value,
    }
    handleLogin(data);
  }

  return (
    <Container className='content-wrap'>
      <form onSubmit={onLogin}>
        <h1>로그인</h1>
        <div className="input-box">
          <input type="email" ref={emailRef} placeholder='이메일' required />
        </div>
        <div className="input-box">
          <input type="password" ref={nameRef} placeholder='비밀번호' required />
        </div>
        <div className="btn-box">
          <button type='submit'>로그인</button>
        </div>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  form {
    width: 250px;
    h1 {
      margin-bottom: 20px;
      font-size: 24px;
      text-align: center;
    }
  }
`;

export default Login