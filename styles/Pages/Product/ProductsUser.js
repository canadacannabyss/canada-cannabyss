import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 100%;
`;

export const SellerTitle = styled.div`
  font-size: 16px;
  color: #18840f;
  font-weight: 900;
  margin-bottom: 0.5rem;
`;

export const Seller = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  .image {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .sellerInfo {
    display: flex;
    margin-left: 5px;
    span {
      font-size: 16px;
      align-self: center;
      font-weight: 900;
    }
  }
`;

export const AlsoProducts = styled.h4`
  font-size: 16px;
  margin: 1.5rem 0;
`;

export const AlsoBundles = styled.h4`
  font-size: 16px;
  margin: 1.5rem 0;
  text-align: center;
`;

export const List = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 575px) {
    grid-gap: 10px;
  }
  @media (max-width: 440px) {
    grid-template-columns: unset;
    grid-template-rows: unset;
    grid-gap: 15px;
  }
`;
