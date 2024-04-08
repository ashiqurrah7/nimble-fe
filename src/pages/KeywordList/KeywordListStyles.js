import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


export const StyledContainer = styled.div`
  padding: 10rem;
`;

export const StyledNotFoundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
`;

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  row-gap: 5rem;
  column-gap: 10rem;
`;

export const StyledGridItem  = styled(Card)`
  padding: 20px;
  font-size: 36px;
  text-align: center;
  border: 1px solid;
`;

export const StyledInput = styled(Form.Control)`
  height: 1.5rem;
  padding-left: 0.3rem;
  width: 18rem;
`;

export const StyledInputContainer = styled.div`
  width: 10rem;
  margin-bottom: 3rem;
`;

export const StyledBottomSection = styled.div`
  height: 19.5rem;
`;
