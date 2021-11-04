import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Register = styled.div(props => `
  label {
    display: block;
    padding-top: 2rem;
  }

  h1 {
    display: ${ props.complete };
    padding-top: 2rem;
  }
`);

const Registration = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [complete, setComplete] = useState('none');

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeText(event) {
    setText(event.target.value);
  }

  function handleChangeImage(event) {
    setImage(event.target.files[0]);
  }

  async function post() {
    const params = new FormData();
    params.append('title', title);
    params.append('text', text);
    params.append('image', image);

    try {
      const result = await axios.post('/api/post', params, {
        headers: {'content-type': 'multipart/form-data',}
      });
      if (result.status == 200) {
        console.log(result);
        setComplete('block');
      } else {
        console.log(result);
      }
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <Register complete={ complete } >
      <form>
        <h1>登録完了</h1>
        <label>
          <p>Title</p>
          <input type="text" value={ title } onChange={ handleChangeTitle }/>
        </label>
        <label>
          <p>Title Image</p>
          <input type="file" onChange={ handleChangeImage }/>
        </label>
        <label>
          <p>Text</p>
          <textarea cols="60" rows="10" onChange={ handleChangeText } defaultValue={ text }></textarea>
        </label>
        <label>
          <button type="button" onClick={ post }>登録</button>
        </label>
      </form>
    </Register>
  );
}

export default Registration;