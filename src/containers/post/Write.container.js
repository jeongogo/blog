import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Write from '../../components/post/Write';

const WriteContainer = () => {
  const navigate = useNavigate();
  
  const handleRegister = async (data) => {
    await axios.post('http://192.168.2.8:4000/api/post', data)
    .then((res) => {
      if (res.data.status === 'success') {
        navigate('/');
      } else if (res.data.status === 'failed') {
        alert(res.data.error);
      }
    }).catch((e) => {
      console.log(e);
    });
  }

  return (
    <Write handleRegister={handleRegister} />
  )
}

export default WriteContainer