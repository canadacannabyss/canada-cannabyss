import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px auto 50px auto;
  width: 80%;
  @media (max-width: 991px) {
    width: 90%;
  }
`;

export const H1 = styled.h1`
  font-size: 22px;
  color: #18840f;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  color: #18840f;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Date = styled.span`
  color: #18840f;
  text-transform: uppercase;
  font-size: 11px;
`;

export const P = styled.p`
  font-size: 14px;
  text-align: justify;
  color: #777;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const LinkTo = styled.a`
  color: #18840f !important;
  cursor: pointer;
`;

export const Ul = styled.ul`
  padding-left: 40px;
  margin-bottom: 1rem;
  li {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
`;
