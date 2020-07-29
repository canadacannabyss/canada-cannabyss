import styled from 'styled-components';
import { fadeText } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 575px) {
    width: 100%;
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

export const LoadingH1 = styled.h1`
  height: 28px;
  width: 190px;
  background: rgba(0, 0, 0, 0.15);
  margin: 0 auto 1rem auto;
  display: table;
  animation: ${fadeText} 1s infinite;
  @media (max-width: 768px) {
    height: 24px;
    width: 180px;
  }
  @media (max-width: 440px) {
    height: 20px;
    width: 180px;
  }
`;

export const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 7px;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: 575px) {
    grid-template-columns: unset;
    grid-template-rows: unset;
    grid-gap: 4px;
  }
`;

export const AllCategories = styled.a`
  margin: 20px auto;
  display: table;
  background: #18840f33;
  color: #18840f;
  font-size: 16px;
  padding: 13px 17px;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #18840f40;
  }
  &:active {
    background: #18840f54;
  }
`;

export const LoadingAllCategories = styled.div`
  margin: 20px auto;
  display: table;
  height: 45px;
  width: 150px;
  background: #18840f33;
  border-radius: 4px;
  animation: ${fadeText} 1s infinite;
`;

export const LoadingCategoryWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
  @media (max-width: 1199px) {
    height: 350px;
  }
  @media (max-width: 575px) {
    height: 200px;
  }
  @media (max-width: 440px) {
    height: 160px;
  }
`;
