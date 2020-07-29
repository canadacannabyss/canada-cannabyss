import styled from 'styled-components';
import { spin, fadeText } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto 40px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const FinishPricesDiv = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  grid-gap: 15px;
  @media (max-width: 991px) {
    grid-template-columns: unset;
  }
`;

export const FinishDiv = styled.div`
  background: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  color: #18840f;
  padding: 10px 0px;
  border-radius: 4px;
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    grid-template-columns: unset;
    #div-shipping {
      border-bottom: 1px solid #18840f;
      padding-bottom: 10px;
    }
    #div-billing {
      border-bottom: 1px solid #18840f;
      padding: 10px;
    }
    #div-payment-method {
      padding-top: 10px;
    }
  }
`;

export const PricesDiv = styled.div`
  display: block;
`;

export const SubTotalDiv = styled.div`
  width: 100%;
`;

export const Values = styled.p`
  margin-bottom: 1rem;
`;

export const Div = styled.div`
  padding: 0 10px;
  display: block;
`;

export const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  align-content: space-between;
  svg {
    margin-left: 15px;
    font-size: 15px;
  }
`;

export const ShippingBillingPaymentMethodH2 = styled.h2`
  color: #18840f;
  font-size: 16px;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  color: #18840f;
  display: block;
  font-size: 14px;
  font-weight: 900;
`;

export const P = styled.p`
  color: #000;
  font-size: 16px;
  margin-bottom: 0.5rem;
  word-break: break-word;
`;

export const NotApplied = styled.p`
  color: #989898;
  font-size: 16px;
`;

export const FinishCheckoutBtn = styled.button`
  background: transparent;
  color: #18840f;
  border-radius: 4px;
  border: 1px solid #18840f;
  font-size: 16px;
  padding: 7px 10px;
  margin: 15px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
  &:hover {
    background: #18840f33;
  }
  &:active {
    background: #18840f;
    color: #fff;
  }
`;

export const Loading = styled.p`
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

export const LoadingLabel = styled.label`
  width: ${(props) => props.width};
  height: 18px;
  background: #18840f33;
  display: block;
  margin-bottom: 3px;
  animation: ${fadeText} 1s infinite;
`;

export const LoadingP = styled.p`
  height: 19px;
  width: 125px;
  margin-bottom: 7px;
  background: rgba(0, 0, 0, 0.3);
  display: block;
  animation: ${fadeText} 1s infinite;
`;
