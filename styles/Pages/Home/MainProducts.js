/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { loadingTiles, fadeText } from '../../Animations/Animations';

export const TopProduct = styled.div`
  width: 80%;
  margin: 20px auto 30px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7px;
  @media (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const TopProductSubDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 7px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: unset;
  }
  @media (max-width: 440px) {
    grid-template-columns: unset;
    grid-template-rows: unset;
  }
`;

export const CoverLoading = styled.div`
  background: #eaeaea;
  height: 170px;
  width: 100%;
  margin-bottom: 15px;
  animation: ${loadingTiles} 1s infinite;
  @media (max-width: 1199px) {
    height: 140px;
  }
  @media (max-width: 991px) {
    height: 105px;
  }
  @media (max-width: 768px) {
    height: 140px;
  }
  @media (max-width: 574px) {
    background-image: url('') !important;
    height: 106px;
    border-bottom: 1px solid #999;
  }
`;

export const CoverMainLoading = styled.div`
  background: #eaeaea;
  height: 356px;
  width: 100%;
  animation: ${loadingTiles} 1s infinite;

  @media (max-width: 1199px) {
    height: 294px;
  }
  @media (max-width: 991px) {
    height: 226px;
  }
  @media (max-width: 768px) {
    margin-bottom: 13px;
  }
`;

export const LoadingCoverMain = styled.div`
  height: 480px;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
  @media (max-width: 1199px) {
    height: 415px;
  }
  @media (max-width: 991px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 370px;
  }
  @media (max-width: 575px) {
    height: 350px;
  }
  @media (max-width: 440px) {
    height: 320px;
  }
  @media (max-width: 350px) {
    height: 300px;
  }
  @media (max-width: 320px) {
    height: 270px;
  }
`;

export const LoadingCover = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
  @media (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 440px) {
    height: 140px;
  }
  @media (max-width: 374px) {
    height: 130px;
  }
  @media (max-width: 356px) {
    height: 120px;
  }
  @media (max-width: 330px) {
    height: 115px;
  }
`;
