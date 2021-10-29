import axios from 'axios';
import React, { useState, useEffect } from "react";

const GetDataJson = async() => {
  try {
    const result = await axios.get('api/blog_get');
    return result.data;
  } catch(error) {

  }
}

const Top = () => {
  let [blog_items, setBlogs] = useState([]);
  
  useEffect(async() => {
    let blogs = await GetDataJson();
    setBlogs(blogs);
  }, []);

  return (
    <div>
        <ul>{blog_items.map((data, index) => 
          <div>
            <li key={index}><h1>{data.title}</h1></li>
            <li key={index}><h2>{data.text}</h2></li>
          </div>)}
        </ul>
    </div>
  );
}

export default Top;