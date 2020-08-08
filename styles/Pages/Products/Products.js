import styled from 'styled-components';
import { fadeText } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto 50px auto;
  width: 80%;
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

export const WrapperHeader = styled.div`
  margin: 20px auto 50px auto;
  width: 80%;
  transform: translateY(-200px);
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const PromotionHeader = styled.div`
  background: ${(props) => `url('${props.backgroundImage}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
`;

export const LoadingPromotionHeader = styled.div`
  background: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 200px;
  animation: ${fadeText} 1s infinite;
`;

export const PromotionHeaderBg = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

export const PromotionHeaderInfoDiv = styled.div`
  color: #fff;
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

export const WrapperPage = styled.div`
  display: table;
  margin: 20px auto 0 auto;
  .current {
    padding: 6px 10px;
    font-size: 16px;
    margin: 0 3px;
    border: none;
    background: #18840f;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    -webkit-transition: all 0.15s ease-in-out;
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
    &:focus {
      outline: none;
    }
  }
`;

export const Pages = styled.button`
  padding: 6px 10px;
  font-size: 16px;
  margin: 0 3px;
  border: none;
  background: #18840f33;
  color: #18840f;
  font-size: 16px;
  border: 1px solid #18840f66;
  border-radius: 4px;
  -webkit-transition: all 0.15s ease-in-out;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
