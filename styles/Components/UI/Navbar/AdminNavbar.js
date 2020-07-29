import styled from 'styled-components';

export const Navigation = styled.nav`
  /* border-bottom: 1px solid green; */
  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25); */
`;

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 5% 89% 5%;
  margin: 0 auto;
  width: 80%;
  padding: 13px 0;
  grid-gap: 5px;
  @media (max-width: 1199px) {
    grid-template-columns: 5% 89% 5%;
  }
  @media (max-width: 991px) {
    grid-template-columns: 5% 89% 5%;
    width: 90%;
  }
  @media (max-width: 875px) {
    grid-template-columns: 5% 89% 5%;
  }
  @media (max-width: 792px) {
    grid-template-columns: 5% 89% 5%;
    width: 95%;
  }
  @media (max-width: 768px) {
    grid-template-columns: unset;
    display: flex;
    justify-content: space-between;
    width: 90%;
    grid-gap: 1px;
  }
`;

export const Brand = styled.img`
  height: 30px;
  width: 30px;
  margin: 0 auto;
  cursor: pointer;
  @media (max-width: 400px) {
    height: 35px;
    width: 35px;
  }
`;

export const MenuDiv = styled.div`
  align-self: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkTo = styled.a`
  color: #18840f !important;
  cursor: pointer;
  align-self: center;
  text-align: center;
  font-size: 15px;
  padding: 0;
`;

export const TabButton = styled.button`
  color: #18840f;
  cursor: pointer;
  background: transparent;
  border: none;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  padding: 3px 6px;
  text-align: center;
  font-size: 15px;
  &:focus {
    outline: none;
  }
  svg {
    margin-left: 4px;
    @media (max-width: 768px) {
      font-size: 21px;
      margin: 0;
      display: flex;
      align-self: center;
    }
  }
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const BarsCartDiv = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SearchBar = styled.div`
  display: grid;
  grid-template-columns: 87% 13%;
  justify-content: end;
  border-radius: 50px;
  background: #f2f2f2;
  padding: 0 4px;
  input {
    border: none;
    background: transparent;
    padding: 12px 0px 12px 14px;
    color: #18840f;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #18840f;
    }
  }
  button {
    background: transparent;
    border: none;
    color: #18840f;
    padding: 0;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    svg {
      transform: translateY(3px);
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 400px) {
    width: 70%;
  }
`;

export const UserDiv = styled.div`
  align-self: center;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BrandDiv = styled.div`
  display: grid;
  align-self: center;
`;

export const BrandSearchDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .search {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const Ul = styled.ul`
  margin-bottom: 0;
`;

export const Li = styled.li`
  display: inline;
  margin-right: 20px;
  @media (max-width: 1199px) {
    margin-left: 6px;
  }
`;

export const LiUser = styled.li`
  display: inline;
  margin-left: 7px;
  @media (max-width: 1199px) {
    margin-left: 1px;
  }
`;

export const UserButton = styled.button`
  background: transparent;
  border: 1px solid #000;
  border-radius: 50px;
  cursor: pointer;
  height: 32px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
  img {
    height: 30px;
    width: 30px;
    border-radius: 50px;
  }
  &:focus {
    outline: none;
  }
`;

export const DrawerBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-self: center;
    cursor: pointer;
  }
  svg {
    font-size: 21px;
    color: #18840f;
    display: flex;
    align-self: center;
  }
`;
