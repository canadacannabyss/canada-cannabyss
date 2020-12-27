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
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  padding: 20px 20px;
  z-index: 999999;
  @media (max-width: 320px) {
    width: 90%;
  }
`;

export const BrandDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0rem 0.5rem 0.5rem 0.5rem;
  img {
    height: 40px;
    width: 40px;
  }
  p {
    color: #18840f;
    font-size: 15px;
    line-height: 15px;
    span {
      font-weight: 900;
      font-size: 16px;
      color: #b01129;
    }
  }
  .sep {
    content: '';
    width: 2px;
    height: 20px;
    background: #b01129;
    position: relative;
    display: block;
    margin: 0 10px;
  }
  h1 {
    color: #b01129;
    font-size: 17px;
    font-weight: 900;
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

export const RegisterInfoDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
`;

export const Sep = styled.div`
  width: 30%;
  height: 1px;
  display: block;
  margin: 20px auto;
  background: #b6b6b6;
`;

export const SocialMediaRegisterDiv = styled.div`
  /* display: grid; */
  h2 {
    font-size: 13px;
    color: #777;
    font-weight: 100;
    text-align: center;
    margin-bottom: 10px;
  }
  ul {
    display: grid;
    grid-gap: 5px;
    margin: 0 auto;
    width: 100%;
  }
`;

export const InputInline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  letter-spacing: 0.04em;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(184, 196, 194);
  border-image: initial;
  border-radius: 4px;
  background: #fff;
  transition: all 0.2s ease-in-out 0s;
  &:focus {
    border-color: #18840f;
    outline: none;
  }
`;

export const Label = styled.label`
  color: #18840f;
  font-size: 13px;
  font-weight: 900;
`;

export const Submit = styled.button`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-top: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  -webkit-letter-spacing: 0.04em;
  -moz-letter-spacing: 0.04em;
  -ms-letter-spacing: 0.04em;
  letter-spacing: 0.04em;
  border: 1px solid #18840f66;
  border-image: initial;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  background: #18840f33;
  color: #18840f;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:focus {
    border-color: #18840f;
    outline: none;
  }
  &:hover {
    background: #18840f40;
  }
  &:active {
    background: #18840f54;
  }
  &::placeholder {
    color: 1px solid rgb(184, 196, 194);
  }
`;

export const OpenFormButton = styled.button`
  display: table;
  margin: 4px auto;
  background: transparent;
  border: none;
  color: #18840f;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Warning = styled.div`
  border: 1px solid #d426269e;
  background-color: #d426260f;
  display: table;
  margin: 5px auto;
  border-radius: 5px;
  padding: 5px 8px;
  color: #d42626;
  font-size: 13px;
  letter-spacing: 1px;
  text-align: center;
`;

export const EmailSentToMessage: any = styled.div`
  width: 350px;
  display: table;
  padding: 7px 13px;
  text-align: center;
  position: fixed;
  top: ${(props: any) => props.top};
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  margin: 10px auto;
  border: 1px solid #18840f66;
  border-image: initial;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
  background: #d1e6cf;
  color: #18840f;
  p {
    text-align: center;
    span {
      font-weight: 900;
    }
  }
`;
