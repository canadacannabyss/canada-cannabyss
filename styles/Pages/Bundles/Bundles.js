import styled from 'styled-components';
import { fadeText } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const H1 = styled.h1`
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 700;
  color: #777;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 440px) {
    font-size: 14px;
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

export const DivGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
  align-items: flex-start;
`;
