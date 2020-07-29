import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 15px;
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const TagDiv = styled.div`
  width: 100%;
  height: 400px;
  box-shadow: inset 0px 0px 14px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  background: #fafafa;
  justify-content: space-evenly;
  @media (max-width: 530px) {
    height: 370px;
  }
  @media (max-width: 430px) {
    height: 350px;
  }
  @media (max-width: 430px) {
    height: 320px;
  }
`;

export const DiscountOnTagPDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const DiscountOnTagP = styled.p`
  color: #fff;
  font-size: 26px;
  display: flex;
  word-break: break-word;
  position: fixed;
  top: 208px;
  width: 173px;
  left: 357px;
  transform: rotate(-25deg);
  height: 127px;
`;

export const TagWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  justify-content: center;
  align-self: center;
  svg {
    color: #18840f;
    font-size: 250px;
    transform: rotateZ(-60deg) skew(20deg);
    align-self: center;
    @media (max-width: 1199px) {
      font-size: 220px;
    }
    @media (max-width: 991px) {
      font-size: 200px;
    }
    @media (max-width: 768px) {
      font-size: 220px;
    }
    @media (max-width: 530px) {
      font-size: 190px;
    }
    @media (max-width: 430px) {
      font-size: 120px;
      /* margin: 30px auto; */
    }
  }
  @media (max-width: 530px) {
    height: 270px;
  }
  @media (max-width: 460px) {
    font-size: 160px;
  }
`;

export const DiscountDiv = styled.div`
  display: block;
`;

export const CouponInfoDiv = styled.div`
  width: 100%;
  display: block;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  -webkit-letter-spacing: 0.04em;
  -moz-letter-spacing: 0.04em;
  -ms-letter-spacing: 0.04em;
  letter-spacing: 0.04em;
  border: 1px solid rgb(184, 196, 194);
  border-image: initial;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  transition: all 0.2s ease-in-out;
  &:focus {
    border-color: #18840f;
    outline: none;
  }
  &::placeholder {
    color: 1px solid rgb(184, 196, 194);
  }
`;

export const SelectDiv = styled.div`
  display: flex;
`;

export const Label = styled.label`
  color: #18840f;
  font-size: 13px;
  font-weight: 900;
`;

export const Select = styled.select`
  height: 40px;
  font-size: 16px;
  margin-bottom: 5px;
  padding-left: 12px;
  box-sizing: border-box;
  -webkit-letter-spacing: 0.04em;
  -moz-letter-spacing: 0.04em;
  -ms-letter-spacing: 0.04em;
  letter-spacing: 0.04em;
  border: none;
  background: rgb(255, 255, 255);
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: 1px solid rgb(184, 196, 194);
  }
`;

export const CouponDescription = styled.div`
  height: 320px;
  overflow-y: scroll;
  font-size: 16px;
  color: #777;
  font-weight: 100;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
  p {
    font-size: 16px;
    color: #777;
    font-weight: 100;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;

export const ProductListDiv = styled.div`
  margin: 20px auto;
  border: 1px solid #18840f66;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  width: 100%;
  height: 400px;
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-items: flex-start;
  overflow-y: scroll;
  border-radius: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button`
  margin: 20px auto;
  display: table;
  background: #18840f33;
  color: #18840f;
  font-size: 16px;
  padding: 13px 17px;
  border: 1px solid #18840f66;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
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

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: block;
  position: fixed;
  top: 0;
  z-index: 99999999999;
`;

export const Warning = styled.div`
  border: 1px solid #d42626;
  border-radius: 3px;
  padding: 5px 10px;
  color: #d42626;
  font-size: 12px;
  margin: 7px auto;
  display: table;
  cursor: default;
  background: #d426260f;
  text-transform: uppercase;
`;
