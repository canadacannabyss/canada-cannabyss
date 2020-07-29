import styled from 'styled-components';
import { fadeText } from '../../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto 50px auto;
  width: 80%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: 991px) {
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
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

export const LoadingBundleContainer = styled.div`
  background: rgba(0, 0, 0, 0.15);
  width: 330px;
  height: 220px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 1.5rem;
  animation: ${fadeText} 1s infinite;
  @media (max-width: 440px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }
`;
