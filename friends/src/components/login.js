import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  //setting up local state to handle form data
  const [creds, setCreds] = useState({
    username: '',
    password: ''
  })
//onchange handler to set state to value of input fields

const handleChange = e => {
  e.preventDefault();
  setCreds({
    ...creds,
    [e.target.name]:[e.target.value]
  })
}

}
