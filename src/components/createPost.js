import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

function createPost() {

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return "No post!"

  

return (
  <>
  <div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <button onClick={create}>Create Post</button>
  </div>
  </>
);
}

export default createPost;