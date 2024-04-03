import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.div`
  height: 12rem;
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
`;
