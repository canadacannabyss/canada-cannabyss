import styled from "styled-components";

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
  display: grid;
  position: fixed;
  width: 350px;
  padding: 20px 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 327px;
  z-index: 99999;
  border-radius: 4px;
  background-color: #fff;
  overflow-y: scroll;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 15px;
  font-weight: 100;
  text-align: center;
  color: #777;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  padding: 5px;
`;

export const NamesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const LoginInfoDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
`;

export const Input = styled.input`
  border: 1px solid green;
  border-radius: 4px;
  width: 100%;
  padding: 10px 13px;
  font-size: 16px;
  box-shadow: inset 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  border: 1px solid green;
  border-radius: 4px;
  background: #18840f;
  color: #fff;
  font-size: 16px;
  padding: 6px 8px;
`;

export const Sep = styled.div`
  width: 30%;
  height: 1px;
  display: block;
  margin: 20px auto;
  background: #b6b6b6;
`;

export const SocialMediaLoginDiv = styled.div`
  h2 {
    font-size: 13px;
    color: #777;
    font-weight: 100;
    text-align: center;
    margin-bottom: 10px;
  }
  ul {
    display: table;
    margin: 0 auto;
  }
`;
