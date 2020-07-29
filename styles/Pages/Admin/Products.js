import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 400px;
  width: 100%;
  grid-gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: unset;
    grid-gap: 0px;
    height: unset;
    margin-bottom: 50px;
  }
`;

export const Div = styled.div`
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivMobile = styled.div`
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: 1px solid #b7b7b7;
  display: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: block;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const DivProduct = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-items: flex-start;
  overflow-y: scroll;
  border-radius: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListHead = styled.div`
  display: block;
  padding: 5px;
`;

export const CategoryUl = styled.ul`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }

  li {
    button {
      color: #18840f;
      font-size: 16px;
      background: transparent;
      padding: 10px 7px;
      width: 100%;
      border: none;
      text-align: left;
      color: #18840f;
      background: transparent;
      display: inline-block;
      cursor: pointer;
      &:hover {
        background: #18840f;
        color: #fff;
      }
      &:focus {
        outline: none;
      }
    }
    @media (max-width: 768px) {
      display: inline-block;
    }
  }
`;

export const ListBodyResult = styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid #18840f;
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 4px;
`;

export const AddBannerLinkTo = styled.a`
  background: #18840f;
  color: #fff !important;
  padding: 5px 7px;
  cursor: pointer;
  display: block;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
`;

export const ProductAdd = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsTitle = styled.p`
  color: #18840f;
  font-size: 14px;
  font-weight: 900;
  margin: 5px 0;
`;

export const ProductsAddLink = styled.a`
  color: #18840f;
  font-size: 16px;
  align-self: center;
  cursor: pointer;
`;

export const AllProducts = styled.button`
  color: #18840f;
  font-size: 16px;
  background: transparent;
  padding: 10px 7px;
  width: 100%;
  border: none;
  text-align: left;
  display: block;
  cursor: pointer;
  &:hover {
    background: #18840f;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

export const ProductsUl = styled.ul`
  li {
    button {
      color: #18840f;
      font-size: 16px;
      background: transparent;
      padding: 10px 7px;
      width: 100%;
      border: none;
      text-align: left;
      color: #18840f;
      background: transparent;
      display: block;
      cursor: pointer;
      &:hover {
        background: #18840f;
        color: #fff;
      }
      &:focus {
        outline: none;
      }
    }
    @media (max-width: 768px) {
      display: inline-block;
    }
  }
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;
