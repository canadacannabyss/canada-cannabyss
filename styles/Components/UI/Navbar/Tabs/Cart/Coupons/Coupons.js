import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 9999999999;
  position: absolute;
  display: grid;
  background: #fff;
  height: 283px;
  width: 325px;
  overflow-y: scroll;
  color: #000;
  top: 55px;
  right: 11%;
  padding: 5px;
  grid-gap: 8px;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 991px) {
    right: 5%;
  }
  @media (max-width: 360px) {
    right: 5%;
    width: 90%;
  }
`;

export const EmptyDiv = styled.div`
  padding: 20px 0;
  svg {
    display: table;
    margin: 0 auto;
    font-size: 22px;
    color: #18840f;
  }
  p {
    text-align: center;
    color: #18840f;
    font-size: 14px;
  }
`;

export const Sep = styled.div`
  width: 100%;
  height: 1px;
  display: block;
  background: #b6b6b6;
`;

export const TotalDiv = styled.div`
  padding: 5px 0 10px 0;
`;

export const TotalNumber = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 5px;
`;

export const ToCheckout = styled.div`
  width: 100%;
  cursor: pointer;
  a {
    text-align: center;
    background: #18840f;
    width: 100%;
    padding: 11px 5px;
    color: #fff;
    display: block;
    border-radius: 4px;
    border: none;
    :focus {
      outline: none;
    }
  }
`;

export const LinkTo = styled.div`
  display: flex;
  justify-self: self-end;
  margin: 2px;
  a {
    font-size: 16px;
    background: #18840f;
    color: #fff;
    padding: 5px 9px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: #188110;
    }
  }
`;

export const TopButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChangeCurrency = styled.button`
  background: #fff;
  border: none;
  padding: 0px 8px;
  border-radius: 4px;
  border: 1px solid #188110;
  &:focus {
    outline: none;
  }
  svg {
    color: #188110;
    font-size: 25px;
  }
`;

export const WrapperCurrencyChange = styled.div`
  position: absolute;
`;

export const CouponForm = styled.form`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 6px;
  width: 98%;
  input {
    width: 100%;
    font-size: 16px;
    color: #188110;
    padding: 8px 10px;
    border: 1px solid #18840f66;
    border-radius: 4px;
    box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    border-radius: 4px;
    background: #18840f33;
    color: #18840f;
    border: 1px solid #18840f66;
    font-size: 16px;
    padding: 6px;
    cursor: pointer;
    box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
    &:focus {
      outline: none;
    }
  }
`;

export const CouponFormDisable = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 6px;
  width: 98%;
  input {
    width: 100%;
    font-size: 16px;
    color: #188110;
    padding: 8px 10px;
    background: #d0d0d0;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    border-radius: 4px;
    background: #8e8e8e;
    color: #fff;
    font-size: 16px;
    padding: 6px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;
