import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from "react";

const BlogStyle = styled.div `
  margin: 30px auto;
  border: solid 1px black;
  border-radius: 5px;
  width: 40%;
  img {
    width: 100%;
  }

  p {
    font-size: 2em;
    font-weight: bold
  }

  a {
    text-decoration: none;
  }
`;

// const GetDataJson = async() => {
//   try {
//     const result = await axios.get('http://localhost:3000/data.json');
//     return result.data;
//   } catch(error) {

//   }
// }

const Top = () => {
  // let [blog_items, setBlogs] = useState([]);
  
  // useEffect(async() => {
  //   let blogs = await GetDataJson();
  //   setBlogs(blogs);
  // }, []);

  // const data_json = GetDataJson();
  return (
    <div>
      <ul>
        <li>タイトル</li>
        <li>本文</li>
      </ul>
    </div>
  );
}

export default Top;