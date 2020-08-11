import styled from 'styled-components';
import { fadeText } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 50px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const WrapperList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  grid-gap: 25px;
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

export const BundlesGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
  align-items: flex-start;
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

export const NoItems = styled.div`
  display: table;
  margin: 20px auto;
  h2 {
    color: #18840f;
    font-size: 16px;
    text-align: center;
  }
  svg {
    color: #18840f;
    font-size: 22px;
    margin: 0 auto 10px auto;
    display: table;
  }
`;
