import styled from 'styled-components';
import { fadeText } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto 40px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
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
  height: 23px;
  width: 90px;
  margin: 0 auto 1rem auto;
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
  @media (max-width: 768px) {
    width: 80px;
  }
  @media (max-width: 440px) {
    width: 70px;
  }
`;

export const DivScroll = styled.div`
  height: 300px;
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

export const AllBundle = styled.a`
  margin: 20px auto;
  display: table;
  background: #18840f33;
  color: #18840f;
  font-size: 16px;
  padding: 13px 17px;
  border: 1px solid #18840f66;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #18840f40;
  }
  &:active {
    background: #18840f54;
  }
  &:focus {
    outline: none;
  }
`;

export const LoadingAllBundle = styled.div`
  margin: 20px auto;
  display: table;
  height: 45px;
  width: 125px;
  background: #18840f33;
  border-radius: 4px;
  animation: ${fadeText} 1s infinite;
`;

export const LoadingBundleWrapper = styled.div`
  background: rgba(0, 0, 0, 0.15);
  display: block;
  width: 360px;
  height: 300px;
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
