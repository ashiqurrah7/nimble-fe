import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const StyledContainer = styled.div`
  padding-left: 6rem;
`;

export const StyledNotFoundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70rem;
`;

export const StyledInfoLabel = styled.p`
  margin-top: 2.5rem;
  font-size: 1rem;
`;

export const StyledInfo = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledCodeArea = styled(Form.Control)`
  margin-top: 0.5rem;
  resize: none;
  padding: 1rem;
`;
