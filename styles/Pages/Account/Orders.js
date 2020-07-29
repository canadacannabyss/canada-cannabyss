import styled from 'styled-components';
import { spin } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const ListDiv = styled.div`
  border-radius: 7px;
  border: 1px solid #18840f;
  padding: 7px 10px 0px 10px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #18840f;
  margin-bottom: 1rem;
`;

export const NoOrdersYet = styled.p`
  color: #777;
  font-size: 15px;
`;

export const OrdersListDiv = styled.ul`
  overflow-y: scroll;
  height: 400px;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    margin-bottom: 10px;
    font-size: 20px;
    .selected {
      background: #f2f2f2;
    }
  }
`;

export const OrdersListDivFlex = styled.ul`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  div {
    svg {
      display: table;
      margin: 0 auto 6px auto;
      font-size: 23px;
      color: #18840f;
    }
  }
`;

export const OrderBtn = styled.div`
  background: transparent;
  border: none;
  padding: 7px 10px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Loading = styled.p`
  display: table;
  margin: 15px auto;
  animation-name: ${spin};
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  svg {
    font-size: 20px;
    color: #777;
  }
`;
