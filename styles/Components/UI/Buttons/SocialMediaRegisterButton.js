import styled from 'styled-components';

export const LinkToProviderLi = styled.li`
  list-style: none;
  width: 100%;
  a {
    border: 1px solid ${(props) => props.backgroundColor};
    border-radius: 4px;
    background: ${(props) => props.backgroundColor};
    color: #fff;
    display: flex;
    text-decoration: none;
    span {
      background: #fff;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 7px 7px 4px 7px;
      svg {
        font-size: 20px;
        color: ${(props) => props.backgroundColor};
      }
    }
    p {
      align-self: center;
      margin: 0 auto;
    }
  }
`;
