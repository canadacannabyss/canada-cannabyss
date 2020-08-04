import styled from 'styled-components';

export const Div = styled.div`
  z-index: 9999999999;
  position: absolute;
  display: grid;
  grid-template-columns: 20% 80%;
  height: 350px;
  width: 685px;
  background: #fff;
  color: #000;
  border-radius: 3px;
  top: 105px;
  left: 10%;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 991px) {
    left: 5%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  margin-bottom: 0;
  background: #f1f1f1;
  overflow-y: scroll;
  height: 350px;
  scrollbar-color: #d6d6d6 transparent;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d6d6d6;
    border: 1px solid #d6d6d6;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: #5a5a5a;
  }

  li {
    list-style: none;
    color: #5a5a5a;
    text-align: left;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      background: #18840f1f;
      a {
        color: #18840f;
      }
      svg {
        color: #18840f;
      }
    }
    a {
      color: #5a5a5a;
      text-decoration: none;
      display: block;
      &:hover {
        text-decoration: none;
      }
    }
    svg {
      float: right;
      transform: rotate(-90deg);
    }
  }
`;

export const ProductsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 350px;
  ul {
    height: 350px;
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ProductLi = styled.li`
  color: #18840f;
  list-style: none;
  transition: 0.2s all ease-in-out;
  &:hover {
    background: #18840f1f;
  }
  &:active {
    background: #18840f33;
  }
  a {
    padding: 10px;
    color: #18840f;
    text-decoration: none;
    display: block;
  }
`;
