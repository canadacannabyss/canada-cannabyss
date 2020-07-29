import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin: 15px 8px 0 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #f6f6f6;
    a {
      color: #18840f;
      background: #18840f33;
    }
    button {
      color: #ff0000;
      background: #ff00002b;
    }
  }
  @media (max-width: 768px) {
    margin: 15px 2px 0 2px;
    width: 270px;
  }
  @media (max-width: 634px) {
    width: 240px;
  }
  @media (max-width: 568px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 170px;
  }
`;

export const ProductImage = styled.img`
  height: 100px;
  width: 300px;
  display: block;
  margin: 0 auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  @media (max-width: 768px) {
    width: 270px;
    height: 90px;
  }
  @media (max-width: 634px) {
    width: 240px;
    height: 80px;
  }
  @media (max-width: 568px) {
    width: 200px;
    height: 66px;
  }
  @media (max-width: 480px) {
    width: 170px;
    height: 56px;
  }
`;

export const DivImage = styled.div`
  width: 100%;
  height: 110px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: ${(props) => `url('${props.backgroundImage}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProductName = styled.p`
  font-size: 15px;
  text-align: center;
  margin: 7px 0;
  width: 300px;
  @media (max-width: 768px) {
    width: 270px;
  }
  @media (max-width: 634px) {
    width: 240px;
  }
  @media (max-width: 568px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 170px;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 5px;
`;

export const Edit = styled.a`
  font-size: 15px;
  color: transparent;
  background: transparent;
  padding: 10px;
  border-radius: 5px;
  margin: 4px auto 0 auto;
  display: table;
  height: 35px;
  width: 39px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    color: #18840f;
    background: #18840f33;
  }
`;

export const Delete = styled.button`
  font-size: 15px;
  color: transparent;
  background: transparent;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 4px auto 0 auto;
  display: table;
  height: 35px;
  width: 39px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:active {
    background: #ff000047;
  }
  @media (max-width: 768px) {
    color: #ff0000;
    background: #ff00002b;
  }
`;
