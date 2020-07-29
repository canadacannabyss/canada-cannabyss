import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px auto 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const InventoryDiv = styled.div`
  border: 1px solid #18840f66;
  border-radius: 3px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  margin: 25px 0;
  padding: 10px 15px;
`;

export const InventoryH2 = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: #18840f;
  margin-bottom: 1rem;
`;

export const InventoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: unset;
    grid-template-rows: unset;
  }
`;

export const InventoryGridDiv = styled.div`
  margin-right: 10px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 900;
  color: #18840f;
`;

export const InventoryDivInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin: 5px 0;
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
