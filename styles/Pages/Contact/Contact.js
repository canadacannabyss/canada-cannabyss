import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 25px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
  &::after {
    content: '';
    height: 2px;
    width: 50px;
    background: #18840f;
    display: block;
    margin: 2px auto 0 auto;
  }
`;

export const P = styled.p`
  margin-top: 20px;
  color: #777;
  text-align: justify;
  font-size: 16px;
  max-width: 750px;
  margin: 20px auto 0 auto;
`;

export const Form = styled.form`
  display: table;
  max-width: 400px;
  margin: 20px auto 60px auto;
  background: #0000000d;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  border-radius: 5px;
  color: #a5a5a5;
  border: none;
  background-color: #fff;
  width: 100%;
  padding: 20px 25px 5px 25px;
  outline: none;
  margin-bottom: 7px;
`;

export const TextArea = styled.textarea`
  padding: 20px 25px 5px 25px;
  outline: none;
  border-radius: 5px;
  border: none;
  resize: none;
  background-color: #fff;
  width: 100%;
  height: 200px;
`;

export const Submit = styled.button`
  display: table;
  margin: 0 auto;
  width: 100%;
  background: #18840f;
  color: #fff;
  border: none;
  padding: 8px 0;
`;
