import styled from 'styled-components';

export const LinkTo = styled.a`
  cursor: pointer;
`;

export const Wrapper = styled.div`
  background: #fff;
  padding: 15px 10px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  width: 360px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 1.5rem;
  align-items: flex-start;
  @media (max-width: 440px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }
`;

export const DivScroll = styled.div`
  max-height: 275px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
`;

export const EmptyProducts = styled.div`
  height: 139px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #18840f;
    font-size: 16px;
  }
`;

export const ComboName = styled.h3`
  font-size: 16px;
  margin: 0.5rem 0;
`;

export const ComboPrice = styled.p`
  color: #18840f;
  font-size: 24px;
  text-align: center;
  margin: 10px 0 5px 0;
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

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
  margin: 0 auto;
  @media (max-width: 1490px) {
    width: 135px;
    height: 135px;
  }
  @media (max-width: 535px) {
    width: 150px;
    height: 150px;
  }
`;

export const BundlePrice = styled.span`
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

export const BundleOldPriceDiscount = styled.span`
  color: #b91919;
  margin-right: 7px;
  display: block;
  font-size: 16px;
  text-decoration: line-through;
`;

export const BundleNewPriceDiscount = styled.span`
  color: #18840f;
  display: block;
  font-size: 18px;
`;
