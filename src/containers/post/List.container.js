import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../../components/post/List';

const ListContainer = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axios.get('http://192.168.2.8:4000/api/post')
    .then((res) => {
      if (res.data.status === 'success') {
        setPosts(res.data.posts);
      } else if (res.data.status === 'failed') {
        alert(res.data.error);
      }
    }).catch((e) => {
      console.log(e);
    });
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://192.168.2.8:4000/api/post/${id}`)
    .then((res) => {
      if (res.data.status === 'success') {
        setPosts(posts.filter((post) => post._id !== id));
      } else if (res.data.status === 'failed') {
        alert(res.data.error);
      }
    }).catch((e) => {
      console.log(e);
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <List posts={posts} handleDelete={handleDelete} />
  )
}

export default ListContainer