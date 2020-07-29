import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70px;
  height: fit-content;
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background: #fff;
  top: 42px;
  overflow-y: scroll;
  left: 6px;
  border-radius: 4px;
  border: 1px solid #188110;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Div = styled.div`
  width: 100%;
  &:hover {
    button {
      background: #188110;
      color: #fff;
    }
  }
  button {
    width: 100%;
    color: #188110;
    border: none;
    padding: 8px 8px;
    background: #fff;
    transition: all 0.13s ease-in-out;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;
