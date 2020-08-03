import styled from 'styled-components';

export const Div = styled.div`
  z-index: 9999999999;
  position: absolute;
  background: #fff;
  color: #000;
  top: 105px;
  left: 26%;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  margin-bottom: 0;
  li {
    list-style: none;
    color: #18840f;
    text-align: center;
    padding: 7px 10px;
    border-left: 4px solid #f1f1f1;
    transition: 0.2s all ease-in-out;
    &:hover {
      background: #18840f1f;
      border-left: 4px solid #18840f33;
    }
    &:active {
      background: #18840f33;
    }
    a {
      color: #18840f;
      padding: 7px 10px;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
  }
`;
