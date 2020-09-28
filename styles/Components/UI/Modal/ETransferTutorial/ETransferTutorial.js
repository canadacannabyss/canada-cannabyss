import styled from 'styled-components';

export const Background = styled.div`
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export const Wrapper = styled.div`
  position: fixed;
  width: 500px;
  overflow-y: scroll;
  padding: 20px 20px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 99999;
  border-radius: 4px;
  background-color: #fff;
  overflow-y: scroll;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 540px) {
    width: 90%;
  }
  @media (max-width: 360px) {
    height: 390px;
  }
`;

export const HeadingCloseButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  font-size: 16px;
  color: #18840f;
  margin-bottom: 1rem;
`;

export const CloseBtn = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    svg {
      color: #e41111;
    }
  }
  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
  svg {
    color: #777;
    font-size: 18px;
    transform: rotate(45deg);
  }
`;

export const BeforeStatement = styled.h2`
  font-size: 16px;
  font-weight: 900;
  color: #777;
  margin-bottom: 1rem;
`;

export const Ol = styled.ol`
  margin-left: 15px;
  li {
    font-size: 16px;
    margin-bottom: 0.5rem;
    span {
      color: #18840f;
      font-weight: 900;
    }
  }
`;
