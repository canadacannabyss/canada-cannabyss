import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 20% 50% 15% 10%;
  grid-gap: 5px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ProductImg = styled.img`
  width: 100%;
  display: block;
`;

export const ProductName = styled.p`
  font-size: 12px;
`;

export const ProductPrice = styled.p`
  font-size: 15px;
  color: #18840f;
`;

export const ProductNumbers = styled.p`
  font-size: 15px;
  align-self: center;
  display: flex;
  span {
    font-size: 10px;
    align-self: center;
  }
`;

export const RemoveItemBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    svg {
      color: red;
      font-size: 20px;
    }
  }
  svg {
    color: #b6b6b6;
  }
`;
