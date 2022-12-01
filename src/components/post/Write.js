import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/store';
import styled from 'styled-components';

const Write = ({ handleRegister }) => {
  const member = useStore((state) => state.member);
  const navigate = useNavigate();
  const subjectRef = useRef();
  const contentRef = useRef();

  const onPrev = () => {
    navigate(-1);
  }

  const onRegister = (e) => {
    e.preventDefault();
    const data = {
      subject: subjectRef.current.value,
      content: contentRef.current.value,
      author: member.email
    }
    handleRegister(data);
  }

  return (
    <Container>
      <h1>글 쓰기</h1>
      <form onSubmit={onRegister}>
        <div className="input-box">
          <label>제목</label>
          <input type="text" ref={subjectRef} required />
        </div>
        <div className="input-box">
          <label>내용</label>
          <textarea ref={contentRef}></textarea>
        </div>
        <div className="btn-box">
          <button type='button' onClick={onPrev}>뒤로가기</button>
          <button type='submit'>작성하기</button>
        </div>
      </form>
    </Container>
  )
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  h1 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }
  .input-box {
    margin-top: 20px;
    label {
      display: block;
      margin-bottom: 7px;
    }
    textarea {
      padding: 10px;
      height: 200px;
      font-family: '맑은고딕';
      line-height: 20px;
      resize: none;
    }
  }
  .btn-box {
    display: flex;
    justify-content: space-between;
    button {
      width: auto;
      padding: 0 25px;
    }
    button[type='button'] {
      background-color: #ddd;
    }
  }
`;

export default Write