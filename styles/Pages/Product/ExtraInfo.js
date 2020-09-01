import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px 0 20px 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
`;

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-left: 1px solid #18840f;
  border-right: 1px solid #18840f;
  border-bottom: 1px solid #18840f;
  border-top: none;
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const Div = styled.div`
  padding: 10px 20px;
  color: #000;
  font-size: 16px;
  p {
    margin-bottom: 0.5rem;
    line-height: 1.5;
    img {
      width: 100%;
    }
  }
  img {
    width: 100%;
  }
  ul {
    margin-bottom: 0.5rem;
    li {
      list-style: none !important;
      line-height: 1.5;
      font-size: 16px;
      margin-left: 15px;
      &::before {
        content: '';
        display: block;
        position: relative;
        width: 4px;
        height: 4px;
        border-radius: 50px;
        background: #000;
        top: 13px;
        left: -14px;
      }
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Info = styled.div`
  margin-bottom: 15px;
`;

export const Scroller = styled.div`
  border-top: 1px solid #18840f;
  border-left: 1px solid #18840f;
  border-right: 1px solid #18840f;
  border-bottom: none;
  transform: translateY(1px);
  overflow-x: scroll;
  overflow-y: hidden;
  height: 35px;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  display: inline-block;
  vertical-align: top;
  .selected {
    background: #18840f33;
  }
  button {
    color: #18840f;
    border: none;
    padding: 7px 10px;
    font-size: 16px;
    font-weight: 900;
    background: #fff;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    &:hover {
      background: #18840f40;
    }
    &:active {
      background: #18840f54;
    }
    &:focus {
      outline: none;
    }
  }
`;
