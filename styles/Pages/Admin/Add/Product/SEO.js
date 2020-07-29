import styled from 'styled-components';

export const SEODiv = styled.div`
  border: 1px solid #18840f66;
  border-radius: 3px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  margin: 25px 0;
  padding: 10px 15px;
`;

export const SEOH2 = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: #18840f;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 900;
  color: #18840f;
`;

export const Explanation = styled.p`
  color: #777;
  font-size: 15px;
  margin-bottom: 0.5rem;
`;

export const SEOPreview = styled.div`
  margin: 6px 0;
`;

export const PreviewTitle = styled.h4`
  color: #5858d6;
  font-size: 18px;
  margin-bottom: 0.25rem;
`;

export const PreviewURL = styled.p`
  color: green;
  font-size: 14px;
  margin-bottom: 0.25rem;
`;

export const PreviewDescription = styled.p`
  color: #777;
  font-size: 14px;
  margin-bottom: 0.5rem;
`;

export const InputDiv = styled.div`
  padding: 6px 0;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin: 5px 0;
  padding-left: 12px;
  box-sizing: border-box;
  -webkit-letter-spacing: 0.04em;
  -moz-letter-spacing: 0.04em;
  -ms-letter-spacing: 0.04em;
  letter-spacing: 0.04em;
  border: 1px solid rgb(184, 196, 194);
  border-image: initial;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: #18840f;
    outline: none;
  }
  &::placeholder {
    color: 1px solid rgb(184, 196, 194);
  }
`;

export const TextArea = styled.textarea`
  height: 120px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
  padding: 12px;
  box-sizing: border-box;
  -webkit-letter-spacing: 0.04em;
  -moz-letter-spacing: 0.04em;
  -ms-letter-spacing: 0.04em;
  letter-spacing: 0.04em;
  border: 1px solid rgb(184, 196, 194);
  border-image: initial;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  transition: all 0.2s ease-in-out;
  resize: none;
  &:focus {
    border-color: #18840f;
    outline: none;
  }
  &::placeholder {
    color: 1px solid rgb(184, 196, 194);
  }
`;
