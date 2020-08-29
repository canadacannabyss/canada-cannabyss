import styled from 'styled-components';
import { spin } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 40px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #777;
  font-size: 16px;
`;

export const ConfirmationMessage = styled.div`
  width: 350px;
  display: table;
  padding: 7px 13px;
  text-align: center;
  margin: 10px auto;
  border: 1px solid #18840f66;
  border-image: initial;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  background: #18840f33;
  color: #18840f;
  p {
    text-align: center;
    span {
      font-weight: 900;
    }
  }
`;

export const ConfirmationMessageError = styled.div`
  width: 300px;
  display: table;
  padding: 7px 13px;
  margin: 10px auto;
  border: 1px solid #840f0f66;
  border-image: initial;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  background: #840f0f33;
  color: #840f0f;
  p {
    text-align: center;
    span {
      font-weight: 900;
    }
  }
`;

export const Loading = styled.div`
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

export const LoadingSpinner = styled.div`
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
