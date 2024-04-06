import React, { useState, useEffect }  from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { createSession } from '@/endpoints/authentications'
import {
  StyledContainer,
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledButton,
  StyledButtonContainer,
} from '@/Shared/AuthStyles'

const Login = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if(token) navigate('/');
  }, [token])

  const handleUsernameChange = ({ target }) => setUsername(target.value);
  const handlePasswordChange = ({ target }) => setPassword(target.value);

  const handleSubmit = async () => {
   if(!username || !password) {
    console.log('Username or Password cannot be blank!');
   } else {
    setSubmitting(true);
    try {
      const { data } = await createSession({ username, password });
      Cookies.set('token', data?.data?.token);
      setToken(data?.data?.token);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
   }
  }

  return (
    <StyledContainer>
      <StyledForm>
        <h2>Login</h2>
        <StyledInputContainer>
          <Form.Label htmlFor="username">Username</Form.Label>
          <StyledInput
            type="text"
            name="username"
            onChange={handleUsernameChange}
            required
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <Form.Label htmlFor="password">Password</Form.Label>
          <StyledInput
            type="password"
            name="password"
            onChange={handlePasswordChange}
            required
          />
        </StyledInputContainer>
        <StyledButtonContainer>
          <StyledButton
            variant="primary"
            type='submit'
            onClick={handleSubmit}
            disabled={submitting}
          >
            Login
          </StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    </StyledContainer>
  )
}

export default Login
