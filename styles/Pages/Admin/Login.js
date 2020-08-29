import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const TitleDiv = styled.h1`
  svg {
    display: table;
    margin: 0 auto 3px auto;
    font-size: 25px;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Form = styled.form`
  display: table;
  margin: 0 auto;
  width: 300px;
  padding: 15px;
  background: #fff;
  border: 1px solid #18840f;
  border-radius: 4px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  @media (max-width: 370px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  background: #fff;
  width: 100%;
  padding: 8px 10px 8px 0;
  font-size: 16px;
  border: 4px;
  color: #18840f;
  border: none;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #e5e5e5;
  }
  &:focus {
    background: #e5e5e5;
    outline: none;
  }
  &::placeholder {
    color: #18840f;
  }
`;

export const Label = styled.label`
  color: #18840f;
  font-size: 13px;
  font-weight: 900;
`;

export const Submit = styled.label`
  color: #fff;
  font-size: 13px;
  border: 1px solid #18840f;
  background: #18840f;
  border-radius: 4px;
  font-weight: 900;
  font-size: 15px;
  padding: 6px 10px;
  margin: 6px auto 2px auto;
  display: table;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #18840f;
    background: #fff;
  }
`;
