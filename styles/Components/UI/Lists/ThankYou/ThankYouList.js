import styled from "styled-components";

export const ProductLinkTo = styled.a`
  display: grid;
  cursor: pointer;
  @media (max-width: 440px) {
    grid-template-columns: 40% 60%;
    grid-template-rows: unset;
  }
`;

export const Details = styled.div`
  @media (max-width: 440px) {
    padding: 15px 0 15px 10px;
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
  text-align: center;
  margin: 7px 0 5px 0;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  @media (max-width: 470px) {
    font-size: 14px;
  }
  @media (max-width: 440px) {
    margin: 0;
    text-align: left;
    font-size: 16px;
    white-space: unset;
    overflow: auto;
    text-overflow: unset;
  }
`;

export const ProductPrice = styled.span`
  text-align: center;
  color: #18840f;
  margin: 0 auto;
  display: block;
  font-size: 16px;
  @media (max-width: 440px) {
    margin: 5px 0;
    text-align: left;
  }
`;

export const ViewDiv = styled.div`
  background: #18840f;
  position: absolute;
  display: block;
`;
