import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

async function GetDataJson(param) {
  try {
    const result = await axios.get('/api/blog_get/' + param);
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
      setBlog(data);
    }
    f();
  }, []);

  return (
    <BlogStyle>
      <h1>{blog.title}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: blog.text }}></h2>
    </BlogStyle>
  );
}

export default Blog;

const BlogStyle = styled.div`
  h1 {
    text-align: center;
    padding-top: 2rem
  }
  h2 {
    padding-top: 2rem;
  }
`;