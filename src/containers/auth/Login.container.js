import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/store';
import axios from 'axios';
import Login from '../../components/auth/Login';

const LoginContainer = () => {
  const navigate = useNavigate();
  const setMember = useStore((state) => state.setMember);

  const handleLogin = async (data) => {
    await axios.post('http://192.168.2.8:4000/api/auth/Login', data)
    .then((res) => {
      if (res.data.status === 'success') {
        const member = {
          email: res.data.member.email,
          name: res.data.member.name
        };
        setMember(member);
        navigate('/');
      } else if (res.data.status === 'failed') {
        alert(res.data.error);
      }
    }).catch((e) => {
      console.log(e);
    });
  }

  return (
    <Login handleLogin={handleLogin} />
  )
}

export default LoginContainer