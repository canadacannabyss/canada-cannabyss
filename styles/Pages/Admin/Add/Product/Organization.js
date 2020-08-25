import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px auto 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const OrganizationDiv = styled.div`
  border: 1px solid #18840f66;
  border-radius: 4px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  margin: 25px 0;
  padding: 10px 15px;
  @media (max-width: 340px) {
    border-radius: 0px;
  }
`;

export const OrganizationH2 = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: #18840f;
  margin-bottom: 1rem;
`;

export const OrganizationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
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

export const Input = styled.input`
  height: 40px;
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
  &:focus {
    border-color: #18840f;
    outline: none;
  }
  &::placeholder {
    color: 1px solid rgb(184, 196, 194);
  }
`;

export const TextArea = styled.textarea`
  height: 90px;
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
