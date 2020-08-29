import styled from 'styled-components';
import { spin } from '../../Animations/Animations';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 0.5rem;
`;
