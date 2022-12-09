import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../store/store';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  const member = useStore((state) => state.member);
  const setMember = useStore((state) => state.setMember);

  const onLogout = () => {
    setMember({
      email: '',
      name: ''
    });
    navigate('/');
  }

  return (
    <Container>
      <div className="content-wrap">
        <div className="blog">
          <Link to='/'>블로그</Link>
        </div>
        <div className="logo">
          <Link to='/'>HONGC</Link>
        </div>
        <div className="tnb">
            {member.email === ''
              ?
              <ul>
                <li>
                  <Link to='/login'>로그인</Link>
                </li>
                <li>
                  <Link to='/signup'>회원가입</Link>
                </li>
              </ul>
              :
              <ul>
                <li>
                  {member.name}님 어서오세요.
                </li>
                <li>
                  <button type='button' onClick={onLogout}>로그아웃</button>
                </li>
              </ul>
            }
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid #ededed;
  .content-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 20px;
    .logo {
      padding-left: 100px;
      a {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 3px;
      }
    }
    .tnb {
      ul {
        display: flex;
        li {
          margin-left: 20px;
        }
      }
    }
  }
`;

export default Header