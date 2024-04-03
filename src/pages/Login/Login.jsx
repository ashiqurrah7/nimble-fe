import React from 'react'
import Form from 'react-bootstrap/Form';
import {
  StyledContainer,
  StyledForm,
  StyledInputContainer,
  StyledInput
} from './LoginStyles'

const Login = () => {
  return (
    <StyledContainer>
      <StyledForm>
        <h2>Login</h2>
        <StyledInputContainer>
          <Form.Label htmlFor="username">Username</Form.Label>
          <StyledInput
            type="text"
            name="username"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <Form.Label htmlFor="password">Password</Form.Label>
          <StyledInput
            type="password"
            name="password"
          />
        </StyledInputContainer>
      </StyledForm>
    </StyledContainer>
  )
}

export default Login
