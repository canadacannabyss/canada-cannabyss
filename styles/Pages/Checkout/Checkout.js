import styled from 'styled-components';
import { spin } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto 40px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const CheckoutProcessStep = styled.div`
  margin: 30px auto;
  display: table;
`;

export const CheckoutFlex = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  .div {
    align-self: flex-start;
  }
  @media (max-width: 400px) {
    grid-gap: 5px;
  }
  .current {
    height: 45px;
    width: 45px;
    display: flex;
    border-radius: 40px;
    background: #18840f;
    margin: 0 auto;
    border: 1px solid #18840f;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media (max-width: 440px) {
      height: 40px;
      width: 40px;
    }
    svg {
      color: #fff;
      font-size: 21px;
      @media (max-width: 400px) {
        font-size: 19px;
      }
    }
  }
  .step {
    height: 45px;
    width: 45px;
    display: flex;
    border-radius: 40px;
    background: #f1f1f1;
    margin: 0 auto;
    border: 1px solid #d0d0d0;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media (max-width: 440px) {
      height: 40px;
      width: 40px;
    }
    svg {
      color: #5a5a5a;
      font-size: 21px;
      @media (max-width: 400px) {
        font-size: 19px;
      }
    }
  }
  .letter {
    font-size: 13px;
    margin: 5px 0;
    text-align: center;
    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
  .sep {
    background: #18840f;
    display: block;
    width: 10px;
    height: 2px;
    margin: 0 6px;
  }
`;

export const AddressesListWrapper = styled.div`
  margin: 10px;
  .selected {
    background: #18840f;
    color: #fff;
  }
`;

export const CheckoutDiv = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 15px;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const Div = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AddressesListTitle = styled.h2`
  color: #000;
  font-size: 17px;
  margin-bottom: 0.5rem;
`;

export const Form = styled.form`
  margin: 10px;
`;

export const ShippingBillingH2CloseDiv = styled.div`
  display: flex;
  align-content: space-between;
`;

export const ShippingBillingH2 = styled.h2`
  color: #5a5a5a;
  font-size: 16px;
  width: 100%;
`;

export const ShippingBillingClose = styled.button`
  float: right;
  background: transparent;
  transition: all 0.2s ease-in-out;
  border: none;
  border-radius: 50px;
  padding: 2px;
  cursor: pointer;
  svg {
    color: #5a5a5a;
    font-size: 16px;
    transform: translateY(1px) rotate(45deg);
  }
  &:hover {
    svg {
      color: #e41111;
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    background: #18840f4a;
  }
`;

export const Label = styled.label`
  color: #18840f;
  font-size: 13px;
  font-weight: 900;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
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

export const Select = styled.select`
  border: 1px solid rgb(184, 196, 194);
  background: transparent;
  color: #5a5a5a;
  padding: 5px 10px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

export const BillingShippingButton = styled.button`
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  background: #f1f1f1;
  text-align: left;
  padding: 5px 7px;
  font-size: 15px;
  line-height: 22px;
  margin: 5px 0 10px 0;
  color: #5a5a5a;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #18840f;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  background: #fff;
  color: #18840f;
  border-radius: 4px;
  border: 1px solid #18840f;
  font-size: 16px;
  padding: 10px;
  display: table;
  cursor: pointer;
  margin: 15px auto 10px auto;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #18840f;
    color: #fff;
  }
`;

export const SubmitDisabled = styled.button`
  background: #f1f1f1;
  color: #5a5a5a;
  border-radius: 4px;
  border: 1px solid #d0d0d0;
  font-size: 16px;
  padding: 10px;
  margin: 15px auto 10px auto;
  display: table;
  cursor: not-allowed;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: #fff;
  color: #5a5a5a;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 16px;
  padding: 9px 12px;
  display: table;
  cursor: pointer;
  margin: 15px 0 10px 0;
  &:hover {
    border-color: #18840f;
    color: #18840f;
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
  display: table;
  margin: 15px auto;
  animation-name: ${spin};
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  svg {
    font-size: 20px;
    color: #777;
  }
`;
