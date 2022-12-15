import React, { useRef } from 'react'
import styled from 'styled-components';

const Signup = ({ handleRegister }) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const onRegister = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      password: passwordRef.current.value,
    }
    handleRegister(data);
  }

  return (
    <Container className='content-wrap'>
      <form onSubmit={onRegister}>
        <h1>회원가입</h1>
        <div className="input-box">
          <input type="email" ref={emailRef} placeholder='이메일' required />
        </div>
        <div className="input-box">
          <input type="text" ref={nameRef} placeholder='이름' required />
        </div>
        <div className="input-box">
          <input type="password" ref={passwordRef} placeholder='비밀번호' required />
        </div>
        <div className="btn-box">
          <button type='submit'>회원가입</button>
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

export default Signup