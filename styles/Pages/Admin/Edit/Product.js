import styled from 'styled-components';
import { spin } from '../../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 40px auto 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;
export const Carousel = styled.div`
  width: 100%;
  height: 350px;
`;

export const CarouselAdd = styled.div`
  width: 100%;
  height: 450px;
  #imageUploader {
    @media (max-width: 500px) {
      width: 100% !important;
    }
  }
  @media (max-width: 500px) {
    height: 300px;
  }
  @media (max-width: 380px) {
    height: 275px;
  }
`;

export const ProductDetailsWrapper = styled.div`
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

export const ProductImage = styled.img`
  width: 450px;
  height: 450px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductDetailsDiv = styled.div`
  display: grid;
`;

export const ProductName = styled.input`
  font-size: 24px;
  color: #777;
  font-weight: 100;
  margin-bottom: 0.5rem;
  background: transparent;
  border: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #f2f2f2;
  }
  &:focus {
    outline: none;
    background: #f2f2f2;
  }
`;

export const ProductPriceDiv = styled.div`
  font-size: 22px;
  color: #18840f;
  font-weight: 100;
  width: 100%;
`;

export const ProductLabelPrice = styled.label`
  color: #18840f;
  font-size: 13px;
  font-weight: 900;
`;

export const ProductPrice = styled.input`
  font-size: 22px;
  color: #18840f;
  font-weight: 100;
  width: 120px;
  margin-bottom: 1rem;
  background: transparent;
  border: none;
  transition: all 0.2s ease-in-out;
  -moz-appearance: textfield;
  &:hover {
    background: #f2f2f2;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #18840f;
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

export const ProductDescription = styled.div`
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

export const ProductInventoryDiv = styled.div`
  width: 100%;
`;

export const ProductInventoryP = styled.strong`
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

export const ProductUploaderPlaceholder = styled.div`
  margin: 0 auto;
  border: 1px dashed #000;
  border-radius: 4px;
  width: 450px;
  height: 450px;
  display: table;
  padding: 10px;
  z-index: 99999;
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
  background: #fff;
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
