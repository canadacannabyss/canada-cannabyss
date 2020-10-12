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
  top: 60px;
  right: 11%;
  padding: 5px;
  grid-gap: 8px;
  border-radius: 4px;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 991px) {
    right: 5%;
  }
  @media (max-width: 768px) {
    width: 100%;
    right: 0px;
    top: 56px;
    z-index: 0;
    border-radius: 0px;
    padding: 5px 15px 5px 5px;
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
  padding: 5px 0;
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
    background: #18840f33;
    color: #18840f;
    width: 100%;
    display: block;
    font-size: 16px;
    text-align: center;
    padding: 13px 17px;
    border: 1px solid #18840f66;
    border-radius: 4px;
    box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
    -webkit-transition: all 0.15s ease-in-out;
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
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
    background: #18840f33;
    color: #18840f;
    border: 1px solid #18840f66;
    padding: 5px 9px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
  }
`;

export const TopButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChangeCurrency = styled.button`
  background: #18840f33;
  color: #18840f;
  border: 1px solid #18840f66;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
  padding: 0px 8px;
  border-radius: 4px;
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

export const CouponForm = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 6px;
  width: 95%;
  margin: 0 auto;
  input {
    width: 100%;
    font-size: 16px;
    background: #18840f33;
    color: #18840f;
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
    color: #fff;
    font-size: 16px;
    padding: 6px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

export const CouponFormDisable = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 6px;
  width: 95%;
  margin: 0 auto;
  input {
    width: 100%;
    font-size: 16px;
    color: #188110;
    padding: 8px 10px;
    background: #d0d0d0;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
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
