/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import styled from 'styled-components';

export const Form = styled.form`
  margin: 10px 0 15px 0;
`;

export const TextArea = styled.textarea`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
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
  background: #18840f33;
  color: #18840f;
  margin-top: 5px;
  width: 62px;
  font-size: 15px;
  float: right;
  padding: 4px 7px;
  border: 1px solid #18840f66;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #18840f40;
  }
  &:active {
    background: #18840f54;
  }
  &:focus {
    outline: none;
  }
`;
