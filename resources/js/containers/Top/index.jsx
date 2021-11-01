import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Router, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

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
    <TopStyle>
        <ul>{blog_items.map((data, index) => 
          <div>
            <li>
              <Link to={"/blog/" + data.id} className="title"><span>{data.title}</span></Link>
            </li>
          </div>)}
        </ul>
    </TopStyle>
  );
}

export default Top;

const TopStyle = styled.div`
  text-align:center;
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    list-style: none;
    font-size: 2rem;
    padding-top: 2rem;
  }

  .title span {
    color: black;
  }
`;