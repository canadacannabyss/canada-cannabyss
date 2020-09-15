import styled from 'styled-components';
import { spin, fadeText } from '../../Animations/Animations';

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

export const FinishPricesDiv = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-gap: 15px;
  @media (max-width: 991px) {
    grid-template-columns: unset;
  }
`;

export const FinishDiv = styled.div`
  background: #fff;
  width: 100%;
  display: grid;
`;

export const PricesDiv = styled.div`
  display: block;
`;

export const SubTotalDiv = styled.div`
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 35px;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  padding: 12px 0px 12px 25px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 1199px) {
    padding-left: 25px;
  }
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

export const ValuesP = styled.p`
  margin-bottom: 1rem;
`;

export const Div = styled.div`
  display: block;
  margin-bottom: 2rem;
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
  color: #5a5a5a;
  font-size: 18px;
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
  background: #5a5a5a;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #5a5a5a;
  font-size: 16px;
  padding: 7px 10px;
  margin: 15px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
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
