import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.div`
  height: 13rem;
  width: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;

export const StyledInputContainer = styled.div`
 display: flex; 
 flex-direction: column;
`;

export const StyledInput = styled(Form.Control)`
  height: 1.5rem;
  padding-left: 0.3rem;
`;

export const StyledButton = styled(Button)`
  margin-top: 0.4rem;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
