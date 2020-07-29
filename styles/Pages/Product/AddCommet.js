/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import styled from 'styled-components';

export const Form = styled.form`
  margin: 10px 0 15px 0;
`;

export const TextArea = styled.textarea`
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
  border: none;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 22px;
  resize: none;
  border: 1px solid transparent;
  padding: 5px 7px;
  border: 1px solid #efefef;
  transition: all 0.25s ease-in-out;
  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  border: none;
  background: #18840f;
  cursor: pointer;
  color: #fff;
  font-weight: 900;
  font-size: 15px;
  float: right;
  padding: 4px 7px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease-in-out;
  &:focus {
    outline: none;
  }
`;
