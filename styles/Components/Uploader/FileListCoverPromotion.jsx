/* eslint-disable no-tabs */
import styled from 'styled-components';

export const ContainerCover = styled.div`
  margin: -300px auto 20px auto;
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 3px;
  width: 100%;
  height: 300px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 10px;
  overflow-y: scroll;
  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-align-items: flex-start;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
  border-radius: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FileDiv = styled.div`
  position: relative;
  margin: -300px 0 -20px 0;
`;

export const FileInfo = styled.div`
  div {
    display: block;
    span {
      font-size: 12px;
      color: #999;
      background-color: #fff;
      padding: 3px 6px;
      border-radius: 5px;
      transform: translateY(-20px);
      display: table;
      margin: 10px auto 5px auto;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        cursor: pointer;
      }
    }
    @media (max-width: 768px) {
      height: 350px;
      width: 100%;
    }
  }
`;

export const PreviewCover = styled.div`
  background-image: ${(props) => `url('${props.src}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  height: 300px;
`;
