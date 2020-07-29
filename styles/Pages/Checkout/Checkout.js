import styled from 'styled-components';
import { spin } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto 40px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
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
  margin: 0 auto;
  width: 800px;
  height: 400px;
  border-radius: 7px;
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    grid-template-columns: unset;
    height: 700px;
  }
  #firstDiv {
    @media (max-width: 768px) {
      border-bottom: 1px solid #18840f;
    }
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
  color: #18840f;
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
    color: #18840f;
    font-size: 16px;
    transform: translateY(1px) rotate(45deg);
  }
  &:hover {
    background: #18840f30;
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
  color: #18840f;
  font-size: 16px;
  background: transparent;
  border: none;
  padding: 8px 10px 8px 0px;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
    background: #f2f2f2;
  }
`;

export const Select = styled.select`
  border: 1px solid #18840f;
  background: transparent;
  color: #18840f;
  padding: 5px 10px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
`;

export const BillingShippingButton = styled.button`
  border: 1px solid #18840f;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.2);
  background: #fff;
  text-align: left;
  padding: 5px 7px;
  font-size: 15px;
  line-height: 22px;
  margin: 5px 0 10px 0;
  color: #18840f;
  cursor: pointer;
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
  padding: 7px 10px;
  display: table;
  cursor: pointer;
  margin: 15px auto 10px auto;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
`;

export const SubmitDisabled = styled.button`
  background: #e6e6e6;
  color: #18840f;
  border-radius: 4px;
  border: 1px solid #18840f;
  font-size: 16px;
  padding: 7px 10px;
  margin: 15px auto 10px auto;
  display: table;
  cursor: not-allowed;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: #fff;
  color: #18840f;
  border-radius: 4px;
  border: 1px solid #18840f;
  font-size: 16px;
  padding: 7px 10px;
  display: table;
  cursor: pointer;
  margin: 15px 0 10px 0;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
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
