import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { createUserAccount } from '@/endpoints/authentications'
import {
  StyledContainer,
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledButton,
  StyledButtonContainer
} from '../../Shared/AuthStyles'

const Register = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpassword, setCPassword] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleCPasswordChange = (event) => setCPassword(event.target.value);

  const handleSubmit = async () => {
    if (!username || !password || !cpassword) {
      console.log('Username, Password and Confirm Password cannot be blank!');
    } else if (password !== cpassword) {
      console.log('Passwords don\'t match!');
    } else {
      setSubmitting(true);
      try {
        const { data } = await createUserAccount({ username, password });
        console.log(data?.message);
      } catch (error) {
        console.log(error);
      }
      setSubmitting(false);
    }
  }

  return (
    <StyledContainer>
      <StyledForm>
        <h2>Register</h2>
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
        <StyledInputContainer>
          <Form.Label htmlFor="cpassword">Confirm Password</Form.Label>
          <StyledInput
            type="password"
            name="cpassword"
            onChange={handleCPasswordChange}
            required
          />
        </StyledInputContainer>
        <StyledButtonContainer>
          <StyledButton
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={submitting}
          >
            Register
          </StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    </StyledContainer>
  )
}

export default Register
