import styled from 'styled-components';
import { fadeText } from '../../Animations/Animations';

export const BtnsWrapper = styled.div`
  margin: 20px auto 50px auto;
  width: 80%;
`;

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

export const ToggleBtnsList = styled.div`
  display: flex;
  align-content: space-between;
  width: 200px;
  .selected {
    color: #18840f;
    background: #18840f40;
  }
`;

export const ToggleBtn = styled.button`
  border: none;
  background: #fff;
  color: #18840f;
  font-size: 16px;
  border-radius: 3px;
  font-weight: 700;
  padding: 5px 7px;
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
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

export const LoadingProductContainer = styled.div`
  background: rgba(0, 0, 0, 0.15);
  animation: ${fadeText} 1s infinite;
  height: 271px;
  width: 100%;
  @media (max-width: 1199px) {
    height: 241px;
  }
  @media (max-width: 575px) {
    height: 236px;
  }
  @media (max-width: 470px) {
    height: 238px;
  }
`;
