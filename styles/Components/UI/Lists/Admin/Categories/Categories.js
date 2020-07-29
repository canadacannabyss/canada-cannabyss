import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  height: 180px;
  width: 180px;
  padding: 6px;
  margin: 15px 8px 0 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #f6f6f6;
    a {
      color: #fff;
      background: #18840f;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 15px;
  }
`;

export const ProductImage = styled.img`
  height: 100px;
  width: 100px;
  display: block;
  margin: 0 auto;
`;

export const ProductName = styled.p`
  font-size: 15px;
  text-align: center;
`;

export const Edit = styled.a`
  font-size: 15px;
  color: transparent;
  background: transparent;
  padding: 10px;
  border-radius: 50px;
  margin: 4px auto 0 auto;
  display: table;
  height: 35px;
  width: 39px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    color: #fff;
    background: #18840f;
  }
`;
