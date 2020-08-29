import styled from 'styled-components';
import { fadeText } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 40px auto 20px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
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

export const EmptyMedias = styled.div`
  width: 450px;
  height: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #18840f;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductName = styled.h1`
  font-size: 24px;
  color: #777;
  font-weight: 100;
  margin-bottom: 0.5rem;
  .bundleName {
    font-size: 20px;
    color: #18840f;
    font-weight: 900;
  }
`;

export const LoadingProductName = styled.div`
  height: 29px;
  width: 80%;
  background: rgba(0, 0, 0, 0.15);
  margin-bottom: 0.5rem;
  animation: ${fadeText} 1s infinite;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ProductPrice = styled.h2`
  font-size: 22px;
  color: #18840f;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const DiscountPricesDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductOldPriceDiscount = styled.span`
  color: #b91919;
  margin-right: 10px;
  display: block;
  font-size: 20px;
  text-decoration: line-through;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const ProductNewPriceDiscount = styled.span`
  color: #18840f;
  display: block;
  font-size: 22px;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const DiscountPercentage = styled.div`
  background: #18840f;
  display: flex;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  color: #fff;
  padding: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateX(-75px) rotate(15deg);
  z-index: 9;
  p {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DiscountPercentageMobile = styled.div`
  background: #18840f;
  display: flex;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  color: #fff;
  padding: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: rotate(-15deg);
  z-index: 9;
  p {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ViewDiv = styled.div`
  background: #18840f;
  position: absolute;
  display: block;
`;

export const LoadingProductPrice = styled.div`
  height: 27px;
  width: 100px;
  background: #18840f70;
  animation: ${fadeText} 1s infinite;
  margin-bottom: 1rem;
`;

export const ProductDescription = styled.div`
  height: 200px;
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

export const LoadingProductDescription = styled.div`
  height: 200px;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  margin-bottom: 0.5rem;
  animation: ${fadeText} 1s infinite;
`;

export const ProductVariantSelectGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  ${(props) =>
    (props.variantsLength > 0 || props.variantsLength <= 2) &&
    `grid-template-rows: repeat(1, fr)`};
  ${(props) =>
    (props.variantsLength > 2 || props.variantsLength <= 4) &&
    `grid-template-rows: repeat(2, fr)`};
  ${(props) =>
    (props.variantsLength > 4 || props.variantsLength <= 6) &&
    `grid-template-rows: repeat(3, fr)`};
  ${(props) =>
    (props.variantsLength > 6 || props.variantsLength <= 8) &&
    `grid-template-rows: repeat(4, fr)`};
  ${(props) =>
    (props.variantsLength > 8 || props.variantsLength <= 10) &&
    `grid-template-rows: repeat(5, fr)`};
  ${(props) =>
    (props.variantsLength > 10 || props.variantsLength <= 12) &&
    `grid-template-rows: repeat(6, fr)`};
  @media (max-width: 340px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductVariantSelect = styled.select`
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

export const ProductVariantSelectLabel = styled.label`
  font-size: 16px;
  color: #18840f;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-weight: 900;
`;

export const ProductQuantityDiv = styled.div`
  width: 100%;
`;

export const ProductQuantityP = styled.strong`
  font-size: 16px;
  color: #18840f;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const QuantityBtn = styled.button`
  background: #fff;
  color: #18840f;
  border: 1px solid #18840f;
  height: 40px;
  width: 40px;
  cursor: pointer;
  font-size: 23px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    background: #eee;
  }
  &:active {
    background: #18840f;
    color: #fff;
  }
`;

export const QuantityInput = styled.input`
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

export const LoadingQuantityLabel = styled.div`
  height: 20px;
  width: 70px;
  background: #18840f70;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  animation: ${fadeText} 1s infinite;
`;

export const LoadingQuantityInput = styled.div`
  height: 41px;
  width: 160px;
  background: #18840f70;
  animation: ${fadeText} 1s infinite;
`;

export const AddToCart = styled.button`
  background: #18840f;
  color: #fff;
  font-size: 18px;
  text-align: center;
  width: 200px;
  border: none;
  padding: 12px 0;
  margin: 20px 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const DisabledAddToCart = styled.button`
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 18px;
  text-align: center;
  width: 200px;
  border: none;
  padding: 12px 0;
  margin: 20px 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const TagsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 25px;
  a {
    text-decoration: none;
    border-radius: 2px;
    background: #f1f1f1;
    padding: 6px 8px;
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
    p {
      color: #5a5a5a;
      font-size: 16px;
    }
  }
`;

export const LoadingAddToCart = styled.div`
  height: 46px;
  width: 200px;
  margin: 20px 0;
  background: #18840f70;
  animation: ${fadeText} 1s infinite;
`;

export const LoadingMediaCarousel = styled.div`
  height: 450px;
  width: 450px;
  display: table;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
  @media (max-width: 500px) {
    width: 100%;
    height: 300px;
  }

  @media (max-width: 380px) {
    height: 275px;
  }
`;

export const LoadingExtraInfo = styled.div`
  height: 297px;
  width: 100%;
  margin: 40px 0 20px 0;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
`;

export const LoadingShareLabel = styled.div`
  height: 19px;
  width: 50px;
  background: rgba(0, 0, 0, 0.7);
  animation: ${fadeText} 1s infinite;
`;

export const LoadingShareButtons = styled.div`
  height: 36px;
  width: 250px;
  margin: 10px 0;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
`;

export const LoadingCommentsDiv = styled.div`
  margin: 40px 0;
`;

export const LoadingCommentsLabel = styled.div`
  height: 16px;
  width: 150px;
  background: rgba(0, 0, 0, 0.6);
  animation: ${fadeText} 1s infinite;
`;

export const LoadingCommentsTextArea = styled.div`
  height: 120px;
  width: 100%;
  margin: 10px 0 0 0;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
`;

export const LoadingCommentsTextAreaButton = styled.div`
  height: 27px;
  width: 52px;
  background: #18840f70;
  float: right;
  animation: ${fadeText} 1s infinite;
`;
