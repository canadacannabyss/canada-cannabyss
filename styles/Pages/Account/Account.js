import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: unset;
  }
`;

export const MenuDiv = styled.div`
  padding: 15px;
  background: #f2f2f2;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
`;

export const MenuTitle = styled.h2`
  color: #18840f;
  font-size: 16px;
  margin-bottom: 1rem;
`;

export const LinkTo = styled.div`
  width: 100%;
  margin: 9px 0;
  a {
    padding: 15px;
    background: #fff;
    width: 100%;
    display: block;
    text-decoration: none;
    color: #18840f;
    transition: all 0.2s ease-in-out;
    border-radius: 4px;
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
    &:hover {
      background: #18840f;
      color: #fff;
    }
  }
`;
