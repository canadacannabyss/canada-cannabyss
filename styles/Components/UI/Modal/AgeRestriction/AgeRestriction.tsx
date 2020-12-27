import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  background: #fff;
  display: block;
  position: fixed;
  border-radius: 6px;
  padding: 20px 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999999999999;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  @media (max-width: 336px) {
    width: 90%;
  }
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
  z-index: 99999999999999;
`;

export const H1Div = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0rem 0.5rem 0.5rem 0.5rem;
  img {
    height: 40px;
    width: 40px;
  }
  p {
    color: #18840f;
    font-size: 15px;
    line-height: 15px;
    span {
      font-weight: 900;
      font-size: 16px;
      color: #b01129;
    }
  }
  .sep {
    content: '';
    width: 2px;
    height: 20px;
    background: #b01129;
    position: relative;
    display: block;
    margin: 0 10px;
  }
  h1 {
    color: #b01129;
    font-size: 17px;
    font-weight: 900;
  }
`;

export const Statement = styled.p`
  color: #000;
  font-size: 16px;
  margin-bottom: 1rem;
`;

export const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const YesButton = styled.button`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
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

export const NoButton = styled.button`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  box-sizing: border-box;
  -webkit-letter-spacing: 0.04em;
  -moz-letter-spacing: 0.04em;
  -ms-letter-spacing: 0.04em;
  letter-spacing: 0.04em;
  border: 1px solid #ff000066;
  border-image: initial;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  background: #ff00002b;
  color: #ff0000;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:focus {
    border-color: #ff0000;
    outline: none;
  }
  &:hover {
    background: #ff000040;
  }
  &:active {
    background: #ff000054;
  }
  &::placeholder {
    color: 1px solid rgb(184, 196, 194);
  }
`;
