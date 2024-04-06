import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const StyledContainer = styled.div`
  width: 75%;
  position: absolute;
  top: 0;
  padding: 3rem 10rem;
  font-size: 20px;
  display: flex;
  justify-content: space-between;

  div {
    width: 20vw;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledButton = styled(Button)`
  
`;
