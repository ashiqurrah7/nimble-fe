import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { PageLoader } from '@/Shared';
import { getKeywords } from '@/endpoints/keywords';
import {
  StyledNotFoundContainer,
  StyledContainer,
  StyledGridContainer,
  StyledGridItem,
  StyledInput,
  StyledInputContainer,
  StyledBottomSection,
 } from './KeywordListStyles';

const KeywordList = () => {
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [filteredKeywords, setFilteredKeywords] = useState([]);
  
  const callGetKeywords = async () => {
    try {
      const { data } = await getKeywords();
      setKeywords(data);
      setFilteredKeywords(data);
    } catch(error) {
      console.log(error);
    }
  }

  const handleSearch = ({ target }) => {
    const updatedKeywords = keywords.filter(keyword => keyword.keyword.includes(target.value));
    setFilteredKeywords(updatedKeywords);
  }

  useEffect(() => {
    setLoading(true);
    callGetKeywords(); 
    setLoading(false);
  }, []);
  
  if (loading) return <PageLoader />
  else if (keywords.length === 0) return (
    <StyledNotFoundContainer>No keywords added yet</StyledNotFoundContainer>
  )
  else return (
    <StyledContainer>
      <StyledInputContainer>
        <StyledInput type="text" placeholder='Search keyword...' onChange={handleSearch}/>
      </StyledInputContainer>
      <StyledBottomSection>
        <StyledGridContainer>
          {
            filteredKeywords?.map(keyword => (
              <StyledGridItem key={keyword.keyword}>
                <Card.Body>
                  <Link to={keyword?.id?.toString()}>{keyword?.keyword}</Link>
                </Card.Body>
              </StyledGridItem>
            ))
          }
        </StyledGridContainer>
      </StyledBottomSection>
    </StyledContainer>
  )
}

export default KeywordList
