import styled from "styled-components";

export const Div = styled.div`
  z-index: 9999999999;
  position: absolute;
  background: #fff;
  color: #000;
  top: 55px;
  right: 35.5%;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 991px) {
    right: 29%;
  }
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
    &:hover {
      background: #efefef;
      cursor: pointer;
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
