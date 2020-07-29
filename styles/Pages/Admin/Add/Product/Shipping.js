import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px auto 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const ShippingDiv = styled.div`
  border: 1px solid #18840f66;
  border-radius: 3px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  margin: 25px 0;
  padding: 10px 15px;
`;

export const ShippingH2 = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: #18840f;
  margin-bottom: 1rem;
`;

export const ShippingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: unset;
    grid-template-rows: unset;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 900;
  color: #18840f;
`;

export const ShippingDivInput = styled.input`
  font-size: 16px;
  color: #18840f;
  width: 90%;
  font-weight: 100;
  padding: 6px 0;
  margin-bottom: 1rem;
  background: transparent;
  border: none;
  transition: all 0.2s ease-in-out;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover {
    background: #f2f2f2;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #777;
  }
`;

export const Explanation = styled.p`
  color: #777;
  font-size: 15px;
  margin-bottom: 0.5rem;
`;

export const WeightUnitDiv = styled.div``;

export const WeightUnitInput = styled.input`
  height: 40px;
  width: 100px;
  font-size: 16px;
  margin-bottom: 5px;
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

export const WeightUnitSelect = styled.select`
  height: 40px;
  font-size: 16px;
  margin-bottom: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  -webkit-letter-spacing: 0.04em;
  -moz-letter-spacing: 0.04em;
  -ms-letter-spacing: 0.04em;
  letter-spacing: 0.04em;
  border: none;
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
