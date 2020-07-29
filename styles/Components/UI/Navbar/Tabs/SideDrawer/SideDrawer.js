import styled from 'styled-components';

import { OpenSideDrawer, spin } from '../../../../../Animations/Animations';

export const Backgrond = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  top: 0px;
  display: none;
  z-index: 999999999;
`;

export const Nav = styled.nav`
  border-right: 1px solid green;
  width: 230px;
  height: 100%;
  position: fixed;
  display: block;
  background: #fff;
  z-index: 99999999999999999999;
  padding: 10px 0;
  overflow-y: scroll;
  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.2);
  transform: translateX(-250px);
  &::-webkit-scrollbar {
    display: none;
  }

  .ac-container {
    max-width: 400px;
  }

  .ac-container .labelProfile {
    padding: 10px 20px !important;
    position: relative;
    z-index: 20;
    display: block;
    cursor: pointer;
    color: #18840f;
    line-height: 33px;
    background: #fff;
    font-size: 16px;
    height: fit-content !important;
    line-height: 20px;
  }

  .ac-container label {
    padding: 10px 20px 30px 20px;
    position: relative;
    z-index: 20;
    display: block;
    cursor: pointer;
    color: #18840f;
    line-height: 33px;
    background: #fff;
    font-size: 16px;
    height: 30px;
    line-height: 20px;
  }

  .ac-container {
    width: 100%;
    margin: 10px auto 30px auto;
    text-align: left;
  }

  .ac-container label:hover {
    background: #fff;
  }

  .ac-container input:checked + label,
  .ac-container input:checked + label:hover {
    background: #f2f2f2;
    color: #777;
    height: 30px;
    padding: 10px 20px 30px 20px;
    line-height: 20px;
    font-size: 16px;
  }

  .ac-container label:hover:after,
  .ac-container input:checked + label:hover:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    right: 13px;
    top: 7px;
  }

  .ac-container input:checked + label:hover:after {
  }

  .ac-container input {
    display: none;
  }

  .ac-container article {
    background: rgba(255, 255, 255, 0.5);
    margin-top: -1px;
    overflow: hidden;
    height: 0;
    position: relative;
    z-index: 10;
    overflow-y: scroll;
    -webkit-transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
    -moz-transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
    -o-transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
    -ms-transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
    transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .ac-container article p {
    font-style: normal;
    color: #777;
    line-height: 23px;
    font-size: 10px;
    padding: 20px;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8);
    font: normal normal 12px 'Open Sans';
  }

  .ac-container input:checked ~ article {
    -webkit-transition: height 0.5s ease-in-out, box-shadow 0.1s linear;
    -moz-transition: height 0.5s ease-in-out, box-shadow 0.1s linear;
    -o-transition: height 0.5s ease-in-out, box-shadow 0.1s linear;
    -ms-transition: height 0.5s ease-in-out, box-shadow 0.1s linear;
    transition: height 0.5s ease-in-out, box-shadow 0.1s linear;
    box-shadow: 0 0 0 1px rgba(155, 155, 155, 0.3);
  }

  .ac-container input:checked ~ article.ac-small {
    height: 140px;
  }

  .ac-container input:checked ~ article.ac-medium {
    height: 180px;
  }

  .ac-container input:checked ~ article.ac-large {
    height: 230px;
  }
`;

export const LinkTo = styled.a`
  color: #18840f;
  padding: 13px 20px;
  display: block;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
    color: #777;
  }
`;

export const Ul = styled.ul`
  li {
    a {
      color: #18840f;
      font-size: 16px;
      width: 100%;
      display: block;
      padding: 13px 20px;
      text-decoration: none;
      &:hover {
        background: #f2f2f2;
        color: #777;
      }
    }
  }
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPicture = styled.div`
  background: transparent;
  border: 1px solid #000;
  border-radius: 50px;
  height: 32px;
  display: flex;
  float: left;
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

export const UserP = styled.p`
  align-content: center;
  margin-left: 6px;
`;

export const UserLabel = styled.p``;

export const Login = styled.button`
  background: #18840f;
  color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  margin: 10px 20px 20px 20px;
  padding: 7px 10px;
  border: 1px solid #18840f;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #fff;
    color: #18840f;
  }
`;

export const Logout = styled.button`
  background: #fff;
  color: #18840f;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  margin: 10px 20px 20px 20px;
  padding: 7px 10px;
  border: 1px solid #18840f;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #18840f;
    color: #fff;
  }
`;

export const Loading = styled.div`
  display: table;
  margin: 15px auto;
  animation-name: ${spin};
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  svg {
    font-size: 20px;
    color: #777;
  }
`;
