import styled from 'styled-components';

export const ProductLinkTo = styled.a`
  display: grid;
  cursor: pointer;
  @media (max-width: 440px) {
    grid-template-columns: 40% 60%;
    grid-template-rows: unset;
    border: none;
  }
`;

export const Details = styled.div`
  padding: 8px 10px;
  @media (max-width: 440px) {
    padding: 15px 0 15px 10px;
  }
`;

export const DiscountPercentage = styled.div`
  background: #18840f;
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  color: #fff;
  padding: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: rotate(-15deg) translate(6px, 10px);
  p {
    font-size: 16px;
  }
  @media (max-width: 440px) {
    height: 45px;
    width: 45px;
    font-size: 14px;
  }
  @media (max-width: 330px) {
    height: 40px;
    width: 40px;
    font-size: 12px;
  }
`;

export const ProductImage = styled.div`
  display: block;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
  img {
    width: 100%;
    margin-bottom: -4px;
  }
`;

export const ProductName = styled.p`
  margin: 7px 0 5px 0;
  font-size: 16px;
  @media (max-width: 470px) {
    font-size: 14px;
  }
  @media (max-width: 440px) {
    margin: 0 0 5px 0;
    font-size: 16px;
  }
`;

export const ProductPrice = styled.span`
  color: #18840f;
  margin: 0 auto;
  display: block;
  font-size: 17px;
  @media (max-width: 440px) {
    margin: 5px 0;
  }
`;

export const DiscountPricesDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 340px) {
    flex-direction: column;
  }
`;

export const ProductOldPriceDiscount = styled.span`
  color: #b91919;
  margin-right: 7px;
  display: block;
  font-size: 16px;
  text-decoration: line-through;
`;

export const ProductNewPriceDiscount = styled.span`
  color: #18840f;
  display: block;
  font-size: 18px;
`;

export const ViewDiv = styled.div`
  background: #18840f;
  position: absolute;
  display: block;
`;
