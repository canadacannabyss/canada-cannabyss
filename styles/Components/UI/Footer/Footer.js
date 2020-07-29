import styled from "styled-components";

export const FooterDiv = styled.footer`
  position: relative;
  width: 100%;
  background: #f2f2f2;
  padding: 50px 0 10px 0;
`;

export const FooterGrid = styled.div`
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 991px) {
    width: 90%;
    grid-template-columns: 1fr 1fr 1fr 0.5fr 1fr;
  }
  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr 1fr 0fr 0.5fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: unset;
    grid-gap: 1rem;
  }
`;

export const Div = styled.div`
  hr {
    margin: 12px 0 7px 0;
    color: #777;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Ul = styled.ul`
  margin-bottom: 0;
  li {
    list-style: none;
    margin-top: 2px;
  }
`;

export const LinkTo = styled.a`
  color: #777 !important;
  font-size: 12px;
  font-weight: 100;
  cursor: pointer;
  &:hover {
    color: #18840f;
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Newsletter = styled.div`
  display: grid;
  grid-template-columns: 87% 13%;
  justify-content: end;
  background: #fff;
  margin-bottom: 15px;
  input {
    border: none;
    background: transparent;
    padding: 8px 0px 8px 14px;
    color: #18840f;
    background: #fff;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #18840f;
    }
  }
  button {
    background: transparent;
    border: none;
    color: #18840f;
    padding: 0;
    background: #fff;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    svg {
      transform: translateY(4px);
    }
  }
`;

export const SocialMedia = styled.ul`
  margin-bottom: 0;
  li {
    display: inline;
    margin-right: 7px;
    a {
      cursor: pointer;
      svg {
        color: #777;
        font-size: 20px;
        :hover {
          color: #18840f;
        }
      }
    }
    @media (max-width: 768px) {
      margin: 0 7px;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const NewsletterP = styled.p`
  color: #777;
  font-size: 14px;
  margin-bottom: 1rem;
  font-weight: 400;
`;

export const SocialMediaP = styled.p`
  color: #777;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const CopyRight = styled.p`
  color: #777;
  font-size: 12px;
  margin-bottom: 2px;
  margin-top: 10px;
  text-align: center;
`;
