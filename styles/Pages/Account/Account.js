import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px auto 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 20px 0;
  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const Sep = styled.div`
  height: 1px;
  background: #e0e0e0;
  width: 100px;
  display: block;
  margin: 20px 0;
  @media (max-width: 520px) {
    display: table;
    margin: 20px auto;
  }
`;

export const UserInfoImageName = styled.div`
  display: block;
  align-items: center;
`;

export const UserInfoDate = styled.p`
  font-size: 14px;
  margin-bottom: 0.5rem;
  @media (max-width: 520px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const UserInfoImage = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  border: 1px solid #e0e0e0;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url('${props.image}')`};
  @media (max-width: 520px) {
    display: table;
    margin: 0 auto;
  }
`;

export const UserInfoName = styled.h2`
  font-size: 18px;
  @media (max-width: 520px) {
    display: table;
    margin: 0 auto;
  }
`;

export const ReferralLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 590px) {
    flex-direction: column;
    align-items: unset;
  }
  p {
    font-size: 14px;
    color: #000;
    font-weight: 900;
    @media (max-width: 520px) {
      text-align: center;
    }
  }
  span {
    margin-left: 5px;
    color: #18840f;
    font-size: 16px;
    border: 1px solid #bdbdbd;
    background: #f7f7f7;
    border-radius: 4px;
    padding: 2px 4px;
    user-select: none;
    word-break: break-all;
    cursor: pointer;
    &:active {
      background: #f2f2f2;
    }
    @media (max-width: 590px) {
      margin-left: 0px;
    }
    @media (max-width: 520px) {
      text-align: center;
      width: 250px;
      display: table;
      margin: 0 auto;
    }
    @media (max-width: 290px) {
      width: 100%;
    }
  }
`;

export const CopyToClipBoard = styled.button`
  background: #18840f33;
  color: #18840f;
  padding: 4px 6px;
  border: 1px solid #18840f66;
  border-radius: 4px;
  margin-left: 10px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #18840f40;
  }
  &:active {
    background: #18840f54;
  }
  &:focus {
    outline: none;
  }
`;

export const MenusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1199px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 460px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Menu = styled.div`
  margin-bottom: 15px;
  h3 {
    font-size: 15px;
    color: #000;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }
  ul {
    li {
      list-style: none;
      margin-bottom: 7px;
      a {
        padding: 4px 0px;
        text-decoration: none;
        color: #18840f;
      }
    }
  }
`;
