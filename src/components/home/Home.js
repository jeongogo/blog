import React from 'react'
import styled from 'styled-components';

const Home = () => {
  return (
    <Container className='content-wrap'>
      <div className='info'>
        <div className="text">Traveling is<br/>Always<br/>New to me.</div>
        <div className="sns">
          <ul>
            <li>
              <a href='https://www.instagram.com' target="_blank">INSTAGRAM</a>
            </li>
            <li>
              <a href='https://www.facebook.com' target="_blank">FACEBOOK</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="visual"></div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10vh 20px;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 400px;
    flex-grow: 1;
    .text {
      font-size: 56px;
      font-weight: 900;
      line-height: 66px;
    }
    .sns {
      ul {
        display: flex;
        li {
          margin-right: 25px;
          a {
            font-size: 16px;
            font-weight: 700;
          }
        }
      }
    }
  }
  .visual {
    height: 65vh;
    background-image: url('/images/main.jpg');
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center 0;
    flex-grow: 1;
  }
`;

export default Home