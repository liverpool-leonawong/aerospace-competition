import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';
const postURL = 'https://jsonplaceholder.typicode.com/posts/';

function TestPost () {

  const [post, setPost] = useState(null);

  // GET with Axios
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return "No post!";

  function createPost () {
    axios
      .post(postURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  return (
    <>
     <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>

    <div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <button onClick={createPost}>Create Post</button>
  </div>

    </>
  );
}

export default TestPost;