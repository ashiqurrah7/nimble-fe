import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getKeyword } from '@/endpoints/keywords';
import { PageLoader } from '@/Shared';
import {
  StyledNotFoundContainer,
  StyledContainer,
  StyledInfoLabel,
  StyledInfoContainer,
  StyledInfo,
  StyledCodeArea,
 } from './KeywordDetailsStyles';

const KeywordDetails = ({ token }) => {
  const navigate = useNavigate();
  const { keywordId } = useParams();
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const capitalizedKeyword = keyword?.keyword?.charAt(0).toUpperCase() + keyword?.keyword?.slice(1);
  
  const callGetKeyword = async () => {
    try {
      const { data } = await getKeyword(keywordId);
      setKeyword(data);
    } catch(error) {
      toast.error(error?.response?.data?.message, { position: "bottom-right" });
    }
  }
  useEffect(() => {
    if(!token) navigate('/login');
    setLoading(true);
    callGetKeyword(); 
    setLoading(false);
  }, [token]);
  
  if (loading) return <PageLoader />
  else if (!keyword) return (
    <StyledNotFoundContainer>Keyword with id not found</StyledNotFoundContainer>
  )
  else return (
    <StyledContainer>
      <h1>{capitalizedKeyword}</h1>
      <StyledInfoContainer>
        <div>
          <StyledInfoLabel>Results</StyledInfoLabel>
          <StyledInfo>{keyword?.results}</StyledInfo>
        </div>
        <div>
          <StyledInfoLabel>Links</StyledInfoLabel>
          <StyledInfo>{keyword?.links}</StyledInfo>
        </div>
        <div>
          <StyledInfoLabel>Adwords</StyledInfoLabel>
          <StyledInfo>{keyword?.adwords}</StyledInfo>
        </div>
      </StyledInfoContainer>
      <br />
      <h3>HTML Code</h3>
      <StyledCodeArea as="textarea" rows={20} cols={150} value={keyword?.page_html} disabled/>
    </StyledContainer>
  )
}

export default KeywordDetails
