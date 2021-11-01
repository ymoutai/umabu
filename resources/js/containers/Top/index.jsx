import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Router, Switch, Link } from 'react-router-dom';


const GetDataJson = async() => {
  try {
    const result = await axios.get('/api/blog_get');
    return result.data;
  } catch(error) {

  }
}

const Top = () => {
  let [blog_items, setBlogs] = useState([]);

  useEffect(() => {
    const f = async() => {
      let blogs = await GetDataJson();
      setBlogs(blogs);
    }
    f();
  }, []);

  return (
    <div>
        <ul>{blog_items.map((data, index) => 
          <div>
            <li>
              <Link to={"/blog/" + data.id}>{data.title}</Link>
            </li>
          </div>)}
        </ul>
    </div>
  );
}

export default Top;