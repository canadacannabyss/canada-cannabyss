import styled from 'styled-components';

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

export const PaymentMethodList = styled.div`
  display: table;
  margin: 0 auto 35px auto;
  div {
    display: flex;
    background: #fff;
    button {
      -webkit-align-content: space-between;
      -ms-flex-line-pack: space-between;
      align-content: space-between;
      cursor: pointer;
      background: #fff;
      /* border: none; */
      padding: 8px 10px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease-in-out;
      border-bottom: 2px solid #e0e0e0;
      &:focus {
        outline: none;
      }
      &:hover {
        background: #18840f33;
        border-bottom: 2px solid #18840f;
      }
    }
    .selected {
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid #18840f;
    }
    svg {
      font-size: 25px;
      color: #18840f;
      margin: 0 auto;
      display: table;
    }
    img {
      height: 22px;
    }
    p {
      font-size: 14px;
      color: #18840f;
    }
  }
`;

export const PaymentForm = styled.form`
  width: ${(props) => `${props.width}px`};
  padding: 8px 10px;
  background: #f1f1f1;
  color: #5a5a5a;
  border-radius: 4px;
  display: ${(props) => `${props.display}`};
  grid-template-columns: 55% 45%;
  margin: 25px auto 20px auto;
  border: 1px solid #d0d0d0;
  &:focus {
    outline: none;
  }
  @media (max-width: 450px) {
    width: 100%;
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

export const ChoosePaymentMethod = styled.p`
  color: #18840f;
  font-size: 16px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const ETransferStatement = styled.div`
  margin-top: 25px;
  font-size: 16px;
  line-height: 1rem;
  color: #777;
  display: grid;
  grid-template-columns: 60% 40%;
  word-break: break-all;
  p {
    margin-bottom: 0.5rem;
    word-break: break-all;
    line-height: 1.5;
  }
  span {
    color: #18840f;
    font-weight: 900;
    word-break: break-all;
  }
  a {
    color: #18840f;
    text-decoration: none;
    font-weight: 900;
    word-break: break-all;
  }
  ol {
    margin-bottom: 0.5rem;
    padding-left: 15px !important;
    word-break: break-all;
    li {
      line-height: 1.5rem;
      word-break: break-all;
    }
  }
  ul {
    margin-bottom: 0.5rem;
    padding-left: 15px !important;
    word-break: break-all;
    li {
      line-height: 1.5rem;
      word-break: break-all;
    }
  }
  @media (max-width: 991px) {
    grid-template-columns: unset;
  }
`;

export const ETransferStatementH2 = styled.h2`
  font-size: 18px;
  color: #18840f;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const ETransferStatementH3 = styled.h3`
  font-size: 16px;
  color: #18840f;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const ETransferStatementEmail = styled.span`
  font-size: 17px;
  color: #18840f;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const ETransferStatementVideo = styled.div`
  display: table;
  margin: 15px auto 10px auto;
  iframe {
    width: 360px;
    height: 200px;
    @media (max-width: 400px) {
      width: 300px;
      height: 160px;
    }
    @media (max-width: 340px) {
      width: 260px;
      height: 140px;
    }
  }
`;

export const ChoosePaymentBtn = styled.button`
  display: table;
  margin: 40px auto;
  background: #18840f33;
  border: 1px solid #18840f;
  border-radius: 4px;
  color: #18840f;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background: #18840f;
  }
  &:focus {
    outline: none;
  }
`;

export const ChoosePaymentBtnDisabled = styled.button`
  margin: 40px auto;
  background: #f1f1f1;
  color: #5a5a5a;
  border-radius: 4px;
  border: 1px solid #d0d0d0;
  font-size: 16px;
  padding: 10px;
  display: table;
  cursor: not-allowed;
  &:focus {
    outline: none;
  }
`;

export const Ol = styled.ol`
  margin-left: 15px;
  li {
    margin-bottom: 0.25rem;
  }
`;

export const CommingSoon = styled.p`
  color: #18840f;
  font-size: 16px;
  text-align: center;
  padding: 5px 8px;
  border-radius: 5px;
  display: table;
  margin: 30px auto 15px auto;
  border: 1px solid #18840f;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const CryptocurrencyFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 45px 0;
  .selected {
    svg {
      color: #18840f;
    }
    p {
      color: #18840f;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    padding: 12px 15px;
    border: 4px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px,
        rgba(0, 0, 0, 0.15) 0px 0px 2px;
    }
    svg {
      color: #5a5a5a;
      font-size: 25px;
      margin-right: 5px;
    }
    p {
      font-size: 20px;
      color: #5a5a5a;
    }
  }
`;

export const CryptoAddress = styled.div`
  display: table;
  margin: 0 auto;
  max-width: 370px;
  p {
    font-size: 15px;
    color: #777;
    margin-bottom: 0.5rem;
    strong {
      color: #18840f;
    }
  }
  .price {
    margin: 15px 0 !important;
    font-size: 16px;
    color: #777;
    strong {
      font-size: 15px;
      color: #18840f;
    }
  }
  h4 {
    font-size: 16px;
    color: #18840f;
  }
  input {
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
  }
`;
