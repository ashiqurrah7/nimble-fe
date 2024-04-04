import React from 'react'
import Form from 'react-bootstrap/Form';
import {
  StyledContainer,
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledButton,
  StyledButtonContainer
} from '../../Shared/AuthStyles'

const Login = () => {
  return (
    <StyledContainer>
      <StyledForm>
        <h2>Register</h2>
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
        <StyledButtonContainer>
          <StyledButton variant="primary">Register</StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    </StyledContainer>
  )
}

export default Login
