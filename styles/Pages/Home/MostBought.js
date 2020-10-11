import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 25px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const Container = styled.div`
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
`;

export const ContentDiv = styled.div`
  padding: 5px;
`;

export const Title = styled.h2`
  color: #18840f;
  font-size: 16px;
  margin-bottom: 0.5rem;
`;

export const Price = styled.h6`
  font-size: 18px;
  display: table;
  font-weight: 500;
  color: #18840f;
  transition: all 0.2s ease-in-out;
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 330px) {
    font-size: 15px;
  }
`;

export const DiscountPricesDiv = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
`;

export const ProductOldPriceDiscount = styled.span`
  color: #b91919;
  margin-right: 10px;
  display: table;
  font-size: 18px;
  text-decoration: line-through;
  font-weight: 100;
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 330px) {
    font-size: 15px;
  }
`;

export const ProductNewPriceDiscount = styled.span`
  color: #18840f;
  display: table;
  font-size: 18px;
  font-weight: 100;
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 330px) {
    font-size: 15px;
  }
`;

export const H1 = styled.h1`
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
  color: #777;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 440px) {
    font-size: 14px;
  }
`;

export const LinkTo = styled.a`
  text-decoration: none;
  cursor: pointer;
`;