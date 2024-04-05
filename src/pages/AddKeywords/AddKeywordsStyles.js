import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledUploadButton = styled(Form.Control)`
  margin-top: 0.6rem;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
