import styled from 'styled-components';
import { fadeText, spin } from '../../../Animations/Animations';

export const Navigation = styled.nav`
  width: 100%;
  height: 96px;
  background: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 99999999;
    height: 56px;
  }
`;

export const TopGroup = styled.div`
  width: 100%;
  height: 56px;
  background: #fff;
`;

export const TopGroupWapper = styled.div`
  width: 80%;
  height: 56px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  @media (max-width: 768px) {
    width: 90px;
  }
`;

export const CartDiv = styled.div`
  button {
    background: #fff;
    border: none;
    margin-right: 15px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    svg {
      color: #18840f;
      font-size: 18px;
    }
  }
`;

export const BottomGroup = styled.div`
  width: 100%;
  height: 40px;
  background: #f1f1f1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BottomGroupSearch = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    height: 53px;
    background: #f1f1f1;
    display: block;
  }
`;

export const BottomGroupWrapper = styled.div`
  width: 80%;
  height: 40px;
  margin: 0 auto;
  background: #f1f1f1;
  display: flex;
  flex-direction: row;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const BottomGroupWrapperSearch = styled.div`
  width: 80%;
  height: 53px;
  margin: 0 auto;
  background: #f1f1f1;
  display: flex;
  flex-direction: row;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 6% 32% 37% 23%;
  margin: 0 auto;
  width: 80%;
  padding: 13px 0;
  grid-gap: 5px;
  @media (max-width: 1199px) {
    grid-template-columns: 6% 32% 37% 23%;
  }
  @media (max-width: 991px) {
    grid-template-columns: 6% 32% 35% 25%;
    width: 90%;
  }
  @media (max-width: 875px) {
    grid-template-columns: 6% 32% 36% 24%;
  }
  @media (max-width: 792px) {
    grid-template-columns: 6% 30% 36% 26%;
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

export const BrandFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BrandFlexMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
    a {
      display: flex;
      flex-direction: row;
      text-decoration: none;
      align-items: center;
    }
  }
`;

export const Brand = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
  @media (max-width: 400px) {
    height: 35px;
    width: 35px;
  }
  @media (max-width: 286px) {
    display: none;
  }
`;

export const BrandName = styled.div`
  margin-left: 5px;
  p {
    color: #18840f;
    line-height: 15px;
    @media (max-width: 286px) {
      text-align: center;
    }
    span {
      color: #b01129;
      font-weight: 900;
    }
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
  color: #5a5a5a;
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
  width: auto;
  margin-right: 15px;
  &:focus {
    outline: none;
  }
  svg {
    margin-left: 4px;
    font-size: 12px;
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

export const SignInButton = styled.button`
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
  width: 65px;
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
    display: none;
  }
`;

export const CartItemsAmount = styled.div`
  background: #18840f;
  border-radius: 50px;
  position: absolute;
  transform: translate(-17px, -15px);
  width: 20px;
  height: 20px;
  color: #fff;
  font-size: 11px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-items: center;
  p {
    margin-left: 2px;
  }
`;

export const UserButtonName = styled.button`
  background: #fff;
  border: none;
  text-align: left;
  width: auto;
  border: 0px;
  padding: 3px 5px;
  border-radius: 3px;
  min-width: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #f1f1f1;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.2);
  }
  &:active {
    background: #f1f1f1;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.23);
  }
  &:focus {
    outline: none;
  }
  .account {
    color: #18840f;
    font-weight: 900;
  }
  p {
    color: #5a5a5a;
    span {
      color: #18840f;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserButtonNameLoading = styled.button`
  background: #f1f1f1;
  border: none;
  text-align: left;
  width: 100px;
  height: 38px;
  border: 0px;
  padding: 3px 5px;
  border-radius: 3px;
  min-width: 100px;
  cursor: pointer;
  animation: ${fadeText} 1s infinite;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TabButtonUser = styled.button`
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
  margin-right: 10px;
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
    padding: 0;
    margin-right: 0;
  }
`;

export const BarsCartDiv = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const UserDiv = styled.div`
  align-self: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserDivFlex = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserButton = styled.button`
  background: transparent;
  border: 1px solid #000;
  border-radius: 50px;
  cursor: pointer;
  height: 32px;
  display: block;
  float: right;
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

export const LoadingUserButton = styled.div`
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  height: 32px;
  width: 32px;
  display: block;
  float: right;
  animation: ${fadeText} 1s infinite;
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
  float: right;
`;

export const Li = styled.li`
  display: inline;
  margin-left: 10px;
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

export const DrawerBtn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-self: center;
    cursor: pointer;
    width: 90px;
  }
  svg {
    font-size: 21px;
    color: #18840f;
    display: flex;
    align-self: center;
  }
`;

export const MobileDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const MobileSearch = styled.button`
  display: none;
  border: none;
  background: #fff;
  &:focus {
    outline: none;
  }
  svg {
    color: #18840f;
    font-size: 21px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
