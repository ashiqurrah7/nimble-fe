import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {
  StyledContainer,
  StyledFormContainer,
  StyledUploadButton,
  StyledButtonContainer,
} from './AddKeywordsStyles';
import { createKeywords } from '@/endpoints/keywords';

const AddKeywords = () => {
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async () => {
    if (!file) {
      console.log('Please upload a file!');
    } else {
      setSubmitting(true);
      console.log(file);
      try{
        const formData = new FormData();
        formData.append('csv', file);
        const { data } = await createKeywords(formData);
        console.log(data?.message);
      } catch(error) {
        console.log(error);
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
          <Button type="submit" onClick={handleSubmit} disabled={submitting}>Submit</Button>
        </StyledButtonContainer>
      </StyledFormContainer>
    </StyledContainer>
  )
}

export default AddKeywords
