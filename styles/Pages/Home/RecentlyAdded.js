import styled from 'styled-components';
import { fadeText } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 50px auto;
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

export const RecentlyAddedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LoadingProduct = styled.div`
  width: 100%;
  height: 235px;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
  @media (max-width: 1160px) {
    height: 220px;
  }
  @media (max-width: 1110px) {
    height: 210px;
  }
  @media (max-width: 1050px) {
    height: 200px;
  }
  @media (max-width: 1010px) {
    height: 190px;
  }
  @media (max-width: 991px) {
    height: 200px;
  }
  @media (max-width: 945px) {
    height: 190px;
  }
  @media (max-width: 900px) {
    height: 180px;
  }
  @media (max-width: 835px) {
    height: 170px;
  }
  @media (max-width: 790px) {
    height: 160px;
  }
  @media (max-width: 768px) {
    height: 290px;
  }
  @media (max-width: 700px) {
    height: 280px;
  }
  @media (max-width: 670px) {
    height: 270px;
  }
  @media (max-width: 640px) {
    height: 260px;
  }
  @media (max-width: 600px) {
    height: 250px;
  }
  @media (max-width: 550px) {
    height: 240px;
  }
  @media (max-width: 490px) {
    height: 230px;
  }
  @media (max-width: 460px) {
    height: 225px;
  }
  @media (max-width: 450px) {
    height: 210px;
  }
  @media (max-width: 420px) {
    height: 190px;
  }
  @media (max-width: 385px) {
    height: 175px;
  }
  @media (max-width: 360px) {
    height: 160px;
  }
  @media (max-width: 320px) {
    height: 150px;
  }
  @media (max-width: 300px) {
    height: 140px;
  }
`;
