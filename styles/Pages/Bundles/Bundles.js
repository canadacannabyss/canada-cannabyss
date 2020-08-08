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

export const WrapperPage = styled.div`
  display: table;
  margin: 20px auto 0 auto;
  .current {
    padding: 6px 10px;
    font-size: 16px;
    margin: 0 3px;
    border: none;
    background: #18840f;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    -webkit-transition: all 0.15s ease-in-out;
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
    &:focus {
      outline: none;
    }
  }
`;

export const Pages = styled.button`
  padding: 6px 10px;
  font-size: 16px;
  margin: 0 3px;
  border: none;
  background: #18840f33;
  color: #18840f;
  font-size: 16px;
  border: 1px solid #18840f66;
  border-radius: 4px;
  -webkit-transition: all 0.15s ease-in-out;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
