import styled from 'styled-components';

export const LinkTo = styled.a`
  cursor: pointer;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  position: relative;
  &:hover {
    .bgImage {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1199px) {
    height: 350px;
  }
  @media (max-width: 575px) {
    height: 200px;
    border-radius: 0px;
  }
  @media (max-width: 440px) {
    height: 160px;
  }
`;

export const CategoryImage = styled.div`
  display: table;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url('${props.bgImg}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1199px) {
    height: 350px;
    /* transform: translateY(-350px); */
  }
  @media (max-width: 575px) {
    height: 200px;
    /* transform: translateY(-200px); */
  }
  @media (max-width: 440px) {
    height: 160px;
    /* transform: translateY(-160px); */
  }
`;

export const CategoryName = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #18840f;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 900;
    padding: 10px;
    background: #fff;
    z-index: 0;
    text-align: center;
  }
`;
