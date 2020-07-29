/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 9999999999;
  position: absolute;
  background: #fff;
  width: 130px;
  color: #000;
  top: 55px;
  right: 10%;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
  hr {
    margin: 0;
  }
`;

export const WrapperArrow = styled.div`
  display: table;
  background: #fff;
  width: 15px;
  z-index: 99999999999;
  height: 15px;
  top: 25px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  right: 25px;
  position: absolute;
  border-top-left-radius: 100px;
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
`;

export const ProfileDiv = styled.div`
  color: #000;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  font-size: 13px;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  &:hover {
    background: #ededed;
  }
`;

export const Profile = styled.a`
  margin: 0px auto;
  display: table;
  padding: 5px 0;
  color: #000;
  &:hover {
    text-decoration: none;
    color: #000;
  }
  p {
    margin: 0;
  }
`;

export const MenuOpitionUl = styled.ul`
  display: table;
  width: 100%;
  margin-bottom: 0px;
  padding-left: 0;
`;

export const MenuOpitionLi = styled.li`
  display: table;
  width: 100%;
  color: #000;
  font-size: 13px;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  &:hover {
    background: #18840f;
    a {
      color: #fff !important;
    }
  }
  .last {
    border-bottom-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
`;

export const LinkTo = styled.a`
  color: #000;
  text-align: center;
  padding: 7px 0;
  display: block;
  font-size: 15px;
  &:hover {
    text-decoration: none;
  }
`;
