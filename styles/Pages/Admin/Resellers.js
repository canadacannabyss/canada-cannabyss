import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 0.5rem;
`;

export const ToCreateReseller = styled.a`
  background: #18840f;
  border: 1px solid transparent;
  color: #fff;
  font-size: 16px;
  padding: 5px 7px;
  border-radius: 4px;
  cursor: pointer;
  svg {
    color: #fff;
    margin-left: 5px;
    font-size: 13px;
  }
`;
