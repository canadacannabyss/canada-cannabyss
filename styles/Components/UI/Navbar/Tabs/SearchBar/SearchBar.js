import styled from 'styled-components';

export const SearchBarFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchBarForm = styled.form`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: end;
  -webkit-justify-content: end;
  -ms-flex-pack: end;
  justify-content: end;
  border-radius: 50px;
  background: #fff;
  border: 1px solid #18840f;
  width: 65%;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
  input {
    border: none;
    background: transparent;
    padding: 12px 0px 12px 14px;
    color: #18840f;
    width: 100%;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #18840f;
    }
  }
  select {
    border: none;
    color: #18840f;
    font-size: 16px;
    background: transparent;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  button {
    background: transparent;
    border: none;
    color: #18840f;
    padding: 0 15px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    svg {
      transform: translateY(3px);
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 400px) {
    width: 70%;
  }
`;
