import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import {
  StyledContainer,
  StyledFormContainer,
  StyledUploadButton,
  StyledButtonContainer,
} from './AddKeywordsStyles';
import { createKeywords } from '@/endpoints/keywords';

const AddKeywords = ({ token }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  useEffect(() => {
    if(!token) navigate('/login');
  }, [token])

  const handleSubmit = async () => {
    if (!file) {
      toast.error('Please upload a file!', { position: "bottom-right" });
    } else {
      setSubmitting(true);
      try{
        const formData = new FormData();
        formData.append('csv', file);
        const { data } = await createKeywords(formData);
        navigate('/keywords');
        toast.success(data?.message, { position: "bottom-right" });
      } catch(error) {
        toast.error(error?.response?.data?.message, { position: "bottom-right" });
      }
      setSubmitting(false);
    }
  };

  return (
    <StyledContainer>
      <StyledFormContainer>
        <p>Please upload a csv file containing a list of keywords you want to search for.</p>
        <StyledButtonContainer>
          <StyledUploadButton type="file" name="csv" accept=".csv" onChange={handleFileChange}/>
          <Button type="submit" onClick={handleSubmit} disabled={submitting}>
            {submitting && <Spinner as="span" size="sm" animation="grow"></Spinner>}
            Submit
          </Button>
        </StyledButtonContainer>
      </StyledFormContainer>
    </StyledContainer>
  )
}

export default AddKeywords
