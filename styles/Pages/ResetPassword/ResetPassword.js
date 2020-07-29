import styled from 'styled-components';
import { spin } from '../../Animations/Animations';

export const ConfirmationMessage = styled.div`
  width: 350px;
  display: table;
  padding: 7px 13px;
  text-align: center;
  margin: 10px auto;
  border: 1px solid #18840f66;
  border-image: initial;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  background: #18840f33;
  color: #18840f;
  p {
    text-align: center;
    span {
      font-weight: 900;
    }
  }
`;

export const ConfirmationMessageError = styled.div`
  width: 300px;
  display: table;
  padding: 7px 13px;
  margin: 10px auto;
  border: 1px solid #840f0f66;
  border-image: initial;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  background: #840f0f33;
  color: #840f0f;
  p {
    text-align: center;
    span {
      font-weight: 900;
    }
  }
`;

export const Loading = styled.div`
  display: table;
  margin: 15px auto;
  animation-name: ${spin};
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  svg {
    font-size: 20px;
    color: #777;
  }
`;

export const LoadingSpinner = styled.div`
  display: table;
  margin: 15px auto;
  animation-name: ${spin};
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  svg {
    font-size: 20px;
    color: #777;
  }
`;

export const Warning = styled.div`
  border: 1px solid #d42626;
  border-radius: 3px;
  padding: 5px 10px;
  color: #d42626;
  font-size: 12px;
  margin: 7px auto;
  display: table;
  cursor: default;
  background: #d426260f;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  margin: 20px auto 50px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const TitleDiv = styled.div`
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
  width: 350px;
  padding: 15px;
  background: #fff;
  border: 1px solid #18840f85;
  border-radius: 4px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  @media (max-width: 370px) {
    width: 100%;
  }
  svg {
    font-size: 18px;
    color: #777;
    font-weight: 100;
    margin: 0 auto;
    display: table;
  }
  h2 {
    font-size: 13px;
    color: #777;
    font-weight: 100;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const InputInline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
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

export const Label = styled.label`
  color: #18840f;
  font-size: 13px;
  font-weight: 900;
`;

export const Submit = styled.button`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  -webkit-letter-spacing: 0.04em;
  -moz-letter-spacing: 0.04em;
  -ms-letter-spacing: 0.04em;
  letter-spacing: 0.04em;
  border: 1px solid #18840f66;
  border-image: initial;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  background: #18840f33;
  color: #18840f;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:focus {
    border-color: #18840f;
    outline: none;
  }
  &:hover {
    background: #18840f40;
  }
  &:active {
    background: #18840f54;
  }
  &::placeholder {
    color: 1px solid rgb(184, 196, 194);
  }
`;
