import React from 'react'
import { Link } from 'react-router-dom';
import useStore from '../../store/store';
import styled from 'styled-components';
import { FiX } from "react-icons/fi";

const List = ({ posts, handleDelete }) => {
  const member = useStore((state) => state.member);

  return (
    <Container>
      {member.email !== '' &&
        <div className="btn-box">
          <Link className='button' to='/post/write'>글 쓰기</Link>
        </div>
      }
      <div className="list">
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post._id}>
                <div className="subject">{post.subject}</div>
                <div className="content">{post.content}</div>
                {member.email === post.author &&
                  <button type='button' onClick={() => handleDelete(post._id)}><FiX /></button>
                }
              </li>
            ))
          }
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  .btn-box {
    margin-top: 30px;
    margin-bottom: -10px;
    text-align: right;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      width: 100px;
      height: 40px;
      background-color: #acf6ca;
    }
  }
  .list {
    line-height: 22px;
    ul {
      margin-top: 40px;
      li {
        position: relative;
        margin-bottom: 30px;
        padding: 30px;
        box-shadow: 0 0 15px rgba(0,0,0,0.1);
        border-radius: 30px;
        .subject {
          font-weight: bold;
        }
        .content {
          margin-top: 10px;
        }
        button {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 18px;
          &:hover {
            background: none;
          }
        }
      }
    }
  }
`;

export default List