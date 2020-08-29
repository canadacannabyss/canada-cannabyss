import styled from 'styled-components';
import { spin } from '../../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 15px auto 20px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
`;
export const Carousel = styled.div`
  width: 100%;
  height: 350px;
`;

export const PromotionDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-gap: 15px;
  .slider-slide > img {
    width: unset;
    display: block;
    @media (max-width: 500px) {
      height: 300px;
    }
    @media (max-width: 380px) {
      height: 275px;
    }
  }
  .slider-control-centerright,
  .slider-control-centerleft {
    display: none;
  }
  .slider-control-bottomcenter {
    ul {
      li {
        margin: 0 2px;
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const PromotionImage = styled.img`
  width: 450px;
  height: 450px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PromotionDetailsDiv = styled.div`
  display: grid;
`;

export const PromotionName = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
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

export const PromotionInfoDiv = styled.div`
  width: 100%;
  margin: 15px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const Label = styled.label`
  color: #18840f;
  font-size: 13px;
  font-weight: 900;
`;

export const PromotionPrice = styled.input`
  height: 40px;
  width: 120px;
  font-size: 16px;
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
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: 350px) {
    width: 80%;
  }
`;

export const PromotionDescription = styled.div`
  height: 320px;
  overflow-y: scroll;
  font-size: 16px;
  color: #777;
  font-weight: 100;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
  p {
    font-size: 16px;
    color: #777;
    font-weight: 100;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;

export const PromotionInventoryDiv = styled.div`
  width: 100%;
`;

export const PromotionInventoryP = styled.strong`
  font-size: 16px;
  color: #18840f;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const InventoryBtn = styled.button`
  background: #fff;
  color: #18840f;
  border: 1px solid #18840f;
  height: 40px;
  cursor: pointer;
  width: 40px;
  font-size: 23px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
`;

export const InventoryInput = styled.input`
  background: #e5e5e5;
  color: #18840f;
  border: none;
  font-size: 20px;
  height: 40px;
  text-align: center;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;

export const AddToCart = styled.button`
  background: #18840f;
  color: #fff;
  font-size: 18px;
  text-align: center;
  width: 200px;
  border: none;
  padding: 12px 0;
  margin: 20px auto;
  display: table;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  background: #fff;
  margin: 40px 0 20px 0;
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const FeaturesDiv = styled.div`
  border-right: 1px solid #18840f;
  padding: 0px 20px;
  overflow-y: scroll;
  height: 380px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #18840f;
  }
`;

export const InsideTheBoxDiv = styled.div`
  padding: 0px 20px;
  overflow-y: scroll;
  height: 380px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FeaturesInsideTheBoxH3 = styled.h3`
  color: #18840f;
  font-size: 13px;
  margin: 15px 0 10px 0;
`;

export const PromotionUploaderPlaceholder = styled.div`
  margin: 0 auto;
  border: 1px dashed #000;
  border-radius: 4px;
  width: 100%;
  height: 300px;
  display: table;
  padding: 10px;
  z-index: 99999;
  cursor: pointer;

  p {
    display: table;
    margin: 15px auto;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
  @media (max-width: 768px) {
    height: 350px;
    width: 100%;
  }
`;

export const ProductListDiv = styled.div`
  margin: 20px auto;
  border: 1px solid #18840f66;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  width: 100%;
  height: 400px;
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-items: flex-start;
  overflow-y: scroll;
  border-radius: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button`
  margin: 20px auto;
  display: table;
  background: #18840f33;
  color: #18840f;
  font-size: 16px;
  padding: 13px 17px;
  border: 1px solid #18840f66;
  border-radius: 4px;
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

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: block;
  position: fixed;
  top: 0;
  z-index: 99999999999;
`;

export const LoadingSpinner = styled.div`
  display: table;
  margin: 15px auto;
  animation-name: ${spin};
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    font-size: 20px;
    color: #18840f;
  }
`;
