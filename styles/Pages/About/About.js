import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto 50px auto;
  width: 1200px;
  @media (max-width: 1460px) {
    width: 80%;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const WhyChooseDiv = styled.div`
  background: radial-gradient(rgba(39, 39, 39, 0.93), rgba(39, 39, 39));
  color: #fff;
  padding-top: 50px;
`;

export const WhyChooseH2 = styled.h2`
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 24px;
`;

export const WhyChooseH3 = styled.h3`
  text-align: center;
  font-size: 15px;
`;

export const WhyChooseSquares = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 70px;
  @media screen and (max-width: 768px) {
    grid-template-rows: unset;
    grid-template-columns: unset;
    grid-gap: 40px;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  svg {
    font-size: 90px;
    margin: 0 auto;
  }
`;

export const SquareH3 = styled.h3`
  text-align: center;
  font-size: 16px;
  margin: 5px 0;
  justify-self: center;
`;

export const SquareP = styled.p`
  width: 300px;
  text-align: justify;
  margin: 0 auto;
`;
