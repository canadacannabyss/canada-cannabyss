import styled from 'styled-components';
import { fadeText } from '../../../Animations/Animations';

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 600px;
  overflow: hidden;
  .slider-control-centerright,
  .slider-control-centerleft {
    display: none;
  }
  .slider-control-bottomcenter {
    display: none;
  }
  @media (max-width: 1200px) {
    height: unset;
    width: 100%;
    margin: unset;
  }
  /* @media (max-width: 991px) {
    height: 370px;
  }
  @media (max-width: 768px) {
    height: 350px;
  }
  @media (max-width: 575px) {
    height: 320px;
  }
  @media (max-width: 440px) {
    height: 280px;
  }
  @media (max-width: 350px) {
    height: 260px;
  }
  @media (max-width: 320px) {
    height: 240px;
  } */
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 600px;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
  @media (max-width: 1200px) {
    height: unset;
  }
  /* @media (max-width: 991px) {
    height: 370px;
  }
  @media (max-width: 768px) {
    height: 350px;
  }
  @media (max-width: 575px) {
    height: 320px;
  }
  @media (max-width: 440px) {
    height: 280px;
  }
  @media (max-width: 350px) {
    height: 260px;
  }
  @media (max-width: 320px) {
    height: 240px;
  } */
`;

export const Div = styled.div`
  width: 100%;
`;

export const DivImage = styled.div`
  height: 600px;
  overflow: hidden;
  @media (max-width: 1200px) {
    height: unset;
  }
`;

export const Image = styled.img`
  width: 100%;
  transform: translateY(-36px);
  @media (max-width: 1200px) {
    transform: unset;
  }
`;
