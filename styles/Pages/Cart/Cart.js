import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto 40px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const CartSubTotal = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 15px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const CartDiv = styled.div`
  margin: 0 auto;
  height: 400px;
  width: 100%;
  border-radius: 7px;
  border: 1px solid #18840f;
  overflow-y: scroll;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SubTotalDiv = styled.div`
  width: 100%;
`;

export const Values = styled.p`
  margin-bottom: 1rem;
`;

export const ProceedLink = styled.div`
  display: table;
  margin: 10px 0;
  cursor: pointer;
  a {
    background: #fff;
    color: #18840f;
    padding: 7px 10px;
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid #18840f;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #fff;
      background: #18840f;
    }
  }
`;

export const ProceedLinkDisable = styled.div`
  display: table;
  margin: 10px 0;
  cursor: not-allowed;
  a {
    background: #e6e6e6;
    color: #18840f;
    padding: 7px 10px;
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid #18840f;
    font-size: 16px;
  }
`;

export const CouponForm = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 6px;
  width: 100%;
  input {
    width: 100%;
    font-size: 16px;
    color: #188110;
    padding: 8px 10px;
    border: 1px solid #188110;
    border-radius: 4px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    border-radius: 4px;
    background: #188110;
    color: #fff;
    font-size: 16px;
    padding: 6px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    grid-template-columns: 65% 35%;
    grid-gap: 3px;
  }
`;
