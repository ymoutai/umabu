import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

async function GetDataJson(param) {
  console.log(123);
  try {
    const result = await axios.get('/api/blog_get/' + param);
    console.log(result);
    return result.data;
  } catch(error) {

  }
}

const Blog = () => {
  const params = useParams();
  let [blog, setBlog] = useState([]);

  useEffect(() => {
    const f = async() => {
      let data = await GetDataJson(params.id);
      console.log(456);
      setBlog(data);
    }
    f();
  }, []);

  return (
    <div>
      <h1>{blog.title}</h1>
      <h2>{blog.text}</h2>
    </div>
  );
}

export default Blog;