/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardTopMain = styled.a`
  text-decoration: none;
  margin-bottom: 20px;
  width: 100%;
  height: 365px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export const DiscountPercentageMain = styled.div`
  background: #fff;
  display: flex;
  height: 70px;
  width: 70px;
  border-radius: 50px;
  color: #000;
  padding: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(10px, 10px) rotate(-15deg);
  transition: all 0.2s ease-in-out;
  p {
    font-size: 18px;
  }
`;

export const DiscountPercentage = styled.div`
  background: #fff;
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  color: #000;
  padding: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(10px, 10px) rotate(-15deg);
  transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  p {
    font-size: 16px;
  }
  @media (max-width: 440px) {
    color: #fff;
    background: #18840f;
  }
`;

export const GridSmall = styled.a`
  @media (max-width: 440px) {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 10px;
  }
`;

export const Card = styled.a`
  text-decoration: none;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export const Cover = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url('${props.src}')`};
  @media (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 440px) {
    height: 140px;
  }
  @media (max-width: 374px) {
    height: 130px;
  }
  @media (max-width: 356px) {
    height: 120px;
  }
  @media (max-width: 330px) {
    height: 115px;
  }
`;

export const BgCover = styled.div`
  background: rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url('${props.src}')`};
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 440px) {
    display: none;
  }
`;

export const BgMainCover = styled.div`
  background: rgba(0, 0, 0, 0.25);
  height: 480px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url('${props.src}')`};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 1199px) {
    height: 415px;
  }
  @media (max-width: 991px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 370px;
  }
  @media (max-width: 575px) {
    height: 350px;
  }
  @media (max-width: 440px) {
    height: 320px;
  }
  @media (max-width: 350px) {
    height: 300px;
  }
  @media (max-width: 320px) {
    height: 270px;
  }
`;

export const CoverMain = styled.div`
  height: 480px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) => `url('${props.src}')`};
  @media (max-width: 1199px) {
    height: 415px;
  }
  @media (max-width: 991px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 370px;
  }
  @media (max-width: 575px) {
    height: 350px;
  }
  @media (max-width: 440px) {
    height: 320px;
  }
  @media (max-width: 350px) {
    height: 300px;
  }
  @media (max-width: 320px) {
    height: 270px;
  }
`;

export const PublishedOnMain = styled.b`
  color: #fff;
  font-size: 14px;
  @media (max-width: 991px) {
    font-size: 12px;
  }
`;

export const PublishedOn = styled.b`
  color: #fff;
  font-size: 12px;
  @media (max-width: 991px) {
    font-size: 11px;
  }
  @media (max-width: 576px) {
    color: #333;
  }
`;

export const PostInfoDivMain = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: translateY(-478px);
  @media (max-width: 1199px) {
    transform: translateY(-415px);
  }
  @media (max-width: 991px) {
    transform: translateY(-400px);
  }
  @media (max-width: 768px) {
    transform: translateY(-370px);
  }
  @media (max-width: 575px) {
    transform: translateY(-350px);
  }
  @media (max-width: 440px) {
    transform: translateY(-320px);
  }
  @media (max-width: 350px) {
    transform: translateY(-300px);
  }
  @media (max-width: 345px) {
    transform: translateY(-300px);
  }
  @media (max-width: 320px) {
    transform: translateY(-270px);
  }
`;

export const PostInfoDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: translateY(-236px);
  @media (max-width: 1199px) {
    transform: translateY(-203px);
  }
  @media (max-width: 991px) {
    transform: translateY(-196px);
  }
  @media (max-width: 768px) {
    transform: translateY(-200px);
  }
  @media (max-width: 575px) {
    transform: translateY(-201px);
  }
  @media (max-width: 440px) {
    display: none;
  }
`;

export const TitleMain = styled.h5`
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  padding: 6px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 1199px) {
    font-size: 20px;
  }
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

export const Title = styled.h5`
  font-size: 16px;
  font-weight: 900;
  padding: 6px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  @media (max-width: 1199px) {
    font-size: 14px;
  }
  @media (max-width: 991px) {
    font-size: 12px;
    max-height: 30px;
    overflow-y: hidden;
  }
  @media (max-width: 576px) {
    width: unset;
    font-size: 16px;
    overflow-y: unset;
    color: #fff;
  }
  @media (max-width: 440px) {
    display: none;
  }
`;

export const CategoryDivMain = styled.div`
  padding: 0 0 0 8px;
  top: 324px;
  /* position: absolute; */
  @media (max-width: 1199px) {
    top: 264px;
  }
  @media (max-width: 991px) {
    top: 199px;
  }
`;

export const CategoryDiv = styled.div`
  padding: 0 0 0 8px;
  top: 142px;
  /* position: absolute; */
  @media (max-width: 1199px) {
    top: 107px;
  }
  @media (max-width: 991px) {
    top: 80px;
  }
  @media (max-width: 768px) {
    top: 110px;
  }
  @media (max-width: 576px) {
    top: 65px;
    &::before {
      background: #333;
    }
  }
`;

export const CategoryMain = styled.span`
  color: #333;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  padding-left: 6px;
  display: block;
  width: 150px;
  text-align: left;
  @media (max-width: 1199px) {
    font-size: 16px;
  }
  @media (max-width: 991px) {
    font-size: 15px;
  }
`;

export const Category = styled.span`
  color: #333;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding-left: 6px;
  display: block;
  width: 150px;
  text-align: left;
  @media (max-width: 1199px) {
    font-size: 14px;
  }
  @media (max-width: 991px) {
    font-size: 13px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
    color: #333;
  }
`;

export const SmallName = styled.h5`
  font-size: 17px;
  display: none;
  @media (max-width: 440px) {
    display: table;
    margin: 10px 0;
  }
`;

export const Price = styled.h6`
  font-size: 18px;
  display: table;
  font-weight: 500;
  padding: 6px;
  color: #fff;
  @media (max-width: 440px) {
    display: none;
  }
`;

export const SmallPrice = styled.h6`
  font-size: 20px;
  display: none;
  font-weight: 500;
  color: #18840f;
  @media (max-width: 440px) {
    display: table;
    margin: 0;
  }
`;

export const DiscountPricesDiv = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
`;

export const ProductOldSmallPriceDiscount = styled.span`
  color: #b91919;
  margin-right: 10px;
  display: none;
  font-size: 18px;
  text-decoration: line-through;
  font-weight: 100;
  margin-bottom: 1rem;
  @media (max-width: 440px) {
    display: block;
  }
`;

export const ProductNewSmallPriceDiscount = styled.span`
  color: #18840f;
  display: none;
  font-size: 20px;
  font-weight: 100;
  margin-bottom: 1rem;
  @media (max-width: 440px) {
    display: block;
  }
`;

export const DiscountPricesMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
`;

export const ProductOldPriceMainDiscount = styled.span`
  color: #fff;
  margin-right: 10px;
  display: table;
  font-size: 20px;
  text-decoration: line-through;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const ProductNewPriceMainDiscount = styled.span`
  color: #fff;
  display: table;
  font-size: 22px;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const ProductOldPriceDiscount = styled.span`
  color: #fff;
  margin-right: 10px;
  display: block;
  font-size: 16px;
  text-decoration: line-through;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const ProductNewPriceDiscount = styled.span`
  color: #fff;
  display: block;
  font-size: 18px;
  font-weight: 100;
  margin-bottom: 1rem;
`;

export const MainPrice = styled.h6`
  font-size: 22px;
  display: table;
  color: #fff;
  padding: 6px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 440px) {
    display: table;
    margin: 0;
  }
`;
