import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/store';
import axios from 'axios';
import Signup from '../../components/auth/Signup';

const SignupContainer = () => {
  const navigate = useNavigate();
  const setMember = useStore((state) => state.setMember);

  const handleRegister = async (data) => {
    await axios.post('http://192.168.2.8:4000/api/auth/register', data)
    .then((res) => {
      if (res.data.status === 'success') {
        const member = {
          email: res.data.member.email,
          name: res.data.member.name
        };
        alert('회원가입 완료');
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
    <Signup handleRegister={handleRegister} />
  )
}

export default SignupContainer