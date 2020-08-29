import styled from 'styled-components';
import { spin } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const DivCategory = styled.div`
  width: 100%;
  display: flex;
  display: flex;
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

export const ListHead = styled.div`
  display: block;
  padding: 5px;
`;

export const ListBodyUl = styled.ul``;

export const ListBodyResult = styled.div`
  width: 100%;
  border: 1px solid #18840f;
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 4px;
`;

export const AddBannerLinkTo = styled.a`
  background: #18840f;
  color: #fff !important;
  padding: 5px 7px;
  cursor: pointer;
  display: block;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
  @media (max-width: 768px) {
    margin: 0 auto;
    display: table;
  }
`;

export const CategoryAdd = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RefreshButton = styled.button`
  color: #18840f;
  font-size: 16px;
  align-self: center;
  cursor: pointer;
  background: #fff;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const CategoriesTitle = styled.p`
  color: #18840f;
  font-size: 14px;
  font-weight: 900;
  margin: 5px 0;
`;

export const CategoriesAddLink = styled.a`
  color: #18840f;
  font-size: 16px;
  align-self: center;
  cursor: pointer;
`;

export const AllCategories = styled.button`
  color: #18840f;
  font-size: 16px;
  background: transparent;
  padding: 10px 7px;
  width: 100%;
  border: none;
  text-align: left;
  display: block;
  cursor: pointer;
  &:hover {
    background: #18840f;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

export const CategoriesUl = styled.ul`
  li {
    button {
      color: #18840f;
      font-size: 16px;
      background: transparent;
      padding: 10px 7px;
      width: 100%;
      border: none;
      text-align: left;
      color: #18840f;
      background: transparent;
      display: block;
      cursor: pointer;
      &:hover {
        background: #18840f;
        color: #fff;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  width: 100%;
  grid-gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: unset;
    grid-gap: 0px;
    height: unset;
    margin-bottom: 50px;
  }
`;

export const Div = styled.div`
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  height: 400px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivMobile = styled.div`
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  display: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CategoryUl = styled.ul`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }

  li {
    button {
      color: #18840f;
      font-size: 16px;
      background: transparent;
      padding: 10px 7px;
      width: 100%;
      border: none;
      text-align: left;
      color: #18840f;
      background: transparent;
      display: inline-block;
      cursor: pointer;
      &:hover {
        background: #18840f;
        color: #fff;
      }
      &:focus {
        outline: none;
      }
    }
    @media (max-width: 768px) {
      display: inline-block;
    }
  }
`;

export const CategoryDetailContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const Carousel = styled.div`
  width: 100%;
  height: 350px;
`;

export const CategoryDetailsWrapper = styled.div`
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

export const CategoryImage = styled.img`
  width: 450px;
  height: 450px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CategoryDetailsDiv = styled.div`
  display: grid;
`;

export const CategoryName = styled.input`
  height: 40px;
  width: 100%;
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

export const CategoryInfoDiv = styled.div`
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

export const CategoryPrice = styled.input`
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

export const CategoryDescription = styled.div`
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

export const CategoryInventoryDiv = styled.div`
  width: 100%;
`;

export const CategoryInventoryP = styled.strong`
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

export const CategoryUploaderPlaceholder = styled.div`
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

export const CategoryListDiv = styled.div`
  margin: 20px auto;
  border: 1px solid #18840f;
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

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
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

export const DeleteButton = styled.button`
  color: #ff0000;
  border: 1px solid #ff000033 !important;
  border-radius: 4px;
  background: #ff00002b;
  font-size: 18px;
  text-align: center;
  width: 47px;
  border: none;
  padding: 12px 0;
  margin: 20px auto;
  display: table;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: #ff000040;
  }
  &:active {
    background: #ff000054;
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
