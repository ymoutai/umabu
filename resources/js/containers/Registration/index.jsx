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
  const [complete, setComplete] = useState('none');

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeText(event) {
    setText(event.target.value);
  }

  async function post() {
    const data = {
      title: title,
      text: text
    }

    try {
      const result = await axios.post('/api/post', data);
      if (result.status == 200) {
        setComplete('block');
      }
    } catch(error) {

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