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
  transform: rotate(-15deg);
  p {
    font-size: 16px;
  }
`;

export const ProductImage = styled.div`
  display: block;
  height: 200px;
  width: 200px;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1199px) {
    height: 170px;
    width: 170px;
  }
  @media (max-width: 575px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 470px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 400px) {
    width: 100%;
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
