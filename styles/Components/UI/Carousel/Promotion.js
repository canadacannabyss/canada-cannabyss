import styled from 'styled-components';
import { fadeText } from '../../../Animations/Animations';

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  .slider-control-centerright,
  .slider-control-centerleft {
    display: none;
  }
  .slider-control-bottomcenter {
    display: none;
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
  margin-top: 30px;
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
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
  display: grid;
  grid-gap: 5px;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
`;

export const DivImage = styled.div`
  width: 100%;
  height: 400px;
  background: ${(props) => `url('${props.backgroundImage}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
