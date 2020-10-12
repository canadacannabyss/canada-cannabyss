import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 65px 1fr 80px;
  grid-gap: 5px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const DivNamePrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImg = styled.img`
  width: 65px;
  height: 65px;
  display: block;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
`;

export const ProductName = styled.p`
  font-size: 16px;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #18840f;
`;

export const ProductNumbers = styled.p`
  align-self: center;
  display: flex;
  .xSymbol {
    font-size: 10px;
    align-self: center;
    margin-right: 6px;
  }
  .amount {
    font-size: 17px;
  }
`;

export const RemoveItemBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    svg {
      color: red;
      font-size: 20px;
    }
  }
  svg {
    color: #b6b6b6;
  }
`;

export const DiscountPricesDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductOldPriceDiscount = styled.span`
  color: #b91919;
  margin-right: 10px;
  display: block;
  font-size: 14px;
  text-decoration: line-through;
  font-weight: 100;
`;

export const ProductNewPriceDiscount = styled.span`
  color: #18840f;
  display: block;
  font-size: 16px;
  font-weight: 100;
`;

export const DiscountPricesDivCartPage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductOldPriceDiscountCartPage = styled.span`
  color: #b91919;
  margin-right: 10px;
  display: block;
  font-size: 16px;
  text-decoration: line-through;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const ProductNewPriceDiscountCartPage = styled.span`
  color: #18840f;
  display: block;
  font-size: 18px;
  font-weight: 100;
  margin-bottom: 1rem;
`;
