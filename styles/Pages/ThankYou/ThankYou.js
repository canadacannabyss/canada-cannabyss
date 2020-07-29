import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px auto 50px auto;
  width: 80%;
  display: grid;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const GridDiv = styled.div`
  margin: 10px auto 0 auto;
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 15px;
  }
  @media (max-width: 991px) {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  @media (max-width: 575px) {
    grid-gap: 10px;
    grid-template-columns: unset;
    grid-template-rows: unset;
  }
`;

export const ThankYouPlate = styled.div`
  background: #fff;
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 400px;
  margin: 0 auto;
  padding: 15px;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ThankYouTitle = styled.h1`
  color: #18840f;
  font-size: 22px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MoreProduct = styled.h2`
  text-align: center;
  font-size: 16px;
  color: #777;
  margin-top: 25px;
`;
