import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto 40px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const PaymentMethodList = styled.div`
  display: table;
  margin: 0 auto 15px auto;
  div {
    display: flex;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
    button {
      align-content: space-between;
      cursor: pointer;
      background: #fff;
      border: none;
      padding: 8px 10px;
      &:focus {
        outline: none;
      }
      &:active {
        background: #18840f;
        svg {
          color: #fff;
        }
        p {
          color: #fff;
        }
      }
    }
    .selected {
      background: #18840f;
      svg {
        color: #fff;
      }
      p {
        color: #fff;
      }
    }
    svg {
      font-size: 25px;
      color: #18840f;
      margin: 0 auto;
      display: table;
    }
    img {
      height: 22px;
    }
    p {
      font-size: 14px;
      margin-top: 5px;
      color: #18840f;
    }
  }
`;

export const PaymentForm = styled.form`
  width: ${(props) => `${props.width}px`};
  padding: 8px 10px;
  background: #fff;
  border-radius: 4px;
  display: ${(props) => `${props.display}`};
  grid-template-columns: 55% 45%;
  margin: 25px auto 20px auto;
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  color: #18840f;
  font-size: 13px;
  font-weight: 900;
`;

export const Input = styled.input`
  color: #18840f;
  font-size: 16px;
  background: transparent;
  border: none;
  padding: 8px 10px 8px 0px;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
    background: #f2f2f2;
  }
`;

export const ChoosePaymentMethod = styled.p`
  color: #18840f;
  font-size: 16px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const ETransferStatement = styled.div`
  margin-top: 25px;
  font-size: 16px;
  line-height: 1rem;
  color: #777;
  display: grid;
  grid-template-columns: 60% 40%;
  p {
    margin-bottom: 0.5rem;
  }
  span {
    color: #18840f;
    font-weight: 900;
  }
  a {
    color: #18840f;
    text-decoration: none;
    font-weight: 900;
  }
  ol {
    margin-bottom: 0.5rem;
    padding-left: 15px !important;
    li {
      line-height: 1.5rem;
    }
  }
  ul {
    margin-bottom: 0.5rem;
    padding-left: 15px !important;
    li {
      line-height: 1.5rem;
    }
  }
  @media (max-width: 991px) {
    grid-template-columns: unset;
  }
`;

export const ETransferStatementH2 = styled.h2`
  font-size: 18px;
  color: #18840f;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const ETransferStatementH3 = styled.h3`
  font-size: 16px;
  color: #18840f;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const ETransferStatementEmail = styled.span`
  font-size: 17px;
  color: #18840f;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const ETransferStatementVideo = styled.div`
  display: table;
  margin: 15px auto 10px auto;
`;

export const ChoosePaymentBtn = styled.button`
  display: table;
  margin: 15px auto 10px auto;
  background: #18840f;
  color: #fff;
  font-size: 16px;
  padding: 7px 10px;
  border: none;
  cursor: pointer;
`;

export const Ol = styled.ol`
  margin-left: 15px;
  li {
    margin-bottom: 0.25rem;
  }
`;

export const CommingSoon = styled.p`
  color: #18840f;
  font-size: 16px;
  text-align: center;
  padding: 5px 8px;
  border-radius: 5px;
  display: table;
  margin: 30px auto 15px auto;
  border: 1px solid #18840f;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;
