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
  width: 100%;
`;

export const SubTotalDiv = styled.div`
  width: 100%;
  height: fit-content;
  top: 35px;
  position: sticky;
  padding-left: 35px;
  border-left: 1px solid #5a5a5a;
  @media (max-width: 1199px) {
    padding-left: 25px;
  }
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

export const Values = styled.p`
  margin-bottom: 1rem;
`;

export const ProceedLink = styled.div`
  display: table;
  margin: 10px 0;
  cursor: pointer;
  a {
    background: #18840f33;
    color: #18840f;
    border: 1px solid #18840f66;
    border-radius: 4px;
    font-size: 16px;
    padding: 7px 10px;
    margin: 15px 0;
    cursor: pointer;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;

export const ProceedLinkDisable = styled.div`
  display: table;
  margin: 10px 0;
  cursor: not-allowed;
  a {
    background: #f1f1f1;
    color: #5a5a5a;
    border-radius: 4px;
    border: 1px solid #d0d0d0;
    padding: 7px 10px;
    border-radius: 4px;
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
