import styled from 'styled-components';
import { fadeText } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto 40px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const WrapperProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  ${(props) => {
    props.productLength > 0 &&
      props.productLength <= 4 &&
      `grid-template-rows: repeat(1, 1fr)`;
  }}
  ${(props) => {
    props.productLength > 4 &&
      props.productLength <= 8 &&
      `grid-template-rows: repeat(2, 1fr)`;
  }}
  ${(props) => {
    props.productLength > 8 &&
      props.productLength <= 12 &&
      `grid-template-rows: repeat(3, 1fr)`;
  }}
  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
    ${(props) => {
      props.productLength > 0 &&
        props.productLength <= 3 &&
        `grid-template-rows: repeat(1, 1fr)`;
    }}
    ${(props) => {
      props.productLength > 3 &&
        props.productLength <= 6 &&
        `grid-template-rows: repeat(2, 1fr)`;
    }}
    ${(props) => {
      props.productLength > 6 &&
        props.productLength <= 9 &&
        `grid-template-rows: repeat(3, 1fr)`;
    }}
    ${(props) => {
      props.productLength > 9 &&
        props.productLength <= 12 &&
        `grid-template-rows: repeat(4, 1fr)`;
    }}
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    ${(props) => {
      props.productLength > 0 &&
        props.productLength <= 2 &&
        `grid-template-rows: repeat(1, 1fr)`;
    }}
    ${(props) => {
      props.productLength > 2 &&
        props.productLength <= 4 &&
        `grid-template-rows: repeat(2, 1fr)`;
    }}
    ${(props) => {
      props.productLength > 4 &&
        props.productLength <= 6 &&
        `grid-template-rows: repeat(3, 1fr)`;
    }}
    ${(props) => {
      props.productLength > 6 &&
        props.productLength <= 8 &&
        `grid-template-rows: repeat(4, 1fr)`;
    }}
    ${(props) => {
      props.productLength > 8 &&
        props.productLength <= 10 &&
        `grid-template-rows: repeat(5, 1fr)`;
    }}
    ${(props) => {
      props.productLength > 10 &&
        props.productLength <= 12 &&
        `grid-template-rows: repeat(6, 1fr)`;
    }}
  }
  @media (max-width: 575px) {
    grid-gap: 10px;
  }
  @media (max-width: 440px) {
    grid-template-columns: unset;
    grid-template-rows: unset;
    grid-gap: 15px;
  }
`;

export const ToggleBtnsList = styled.div`
  display: flex;
  align-content: space-between;
  width: 200px;
  .selected {
    color: #18840f;
    background: #18840f40;
  }
`;

export const ToggleBtn = styled.button`
  border: none;
  background: #fff;
  color: #18840f;
  font-size: 16px;
  border-radius: 3px;
  font-weight: 700;
  padding: 5px 7px;
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
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

export const LoadingProductContainer = styled.div`
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
  height: 271px;
  width: 100%;
  @media (max-width: 1199px) {
    height: 241px;
  }
  @media (max-width: 575px) {
    height: 236px;
  }
  @media (max-width: 470px) {
    height: 238px;
  }
`;

export const Grid = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
`;
