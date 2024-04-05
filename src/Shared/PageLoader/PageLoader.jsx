import React from 'react';
import { StyledContainer, StyledSpinner } from './PageLoaderStyles';

const PageLoader = () => {
  return (
    <StyledContainer>
      <StyledSpinner animation="grow" />
    </StyledContainer>
  )
}

export default PageLoader
