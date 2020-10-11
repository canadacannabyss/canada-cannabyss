import styled from 'styled-components';

export const Product = styled.div`
  width: 100%;
  height: 235px;
  background-image: ${(props) => `url('${props.backgroundImage}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0,0,0,0.15) 0px 2px 4px, rgba(0,0,0,0.15) 0px 0px 2px;
  @media (max-width: 1160px) {
    height: 220px;
  }
  @media (max-width: 1110px) {
    height: 210px;
  }
  @media (max-width: 1050px) {
    height: 200px;
  }
  @media (max-width: 1010px) {
    height: 190px;
  }
  @media (max-width: 991px) {
    height: 200px;
  }
  @media (max-width: 945px) {
    height: 190px;
  }
  @media (max-width: 900px) {
    height: 180px;
  }
  @media (max-width: 835px) {
    height: 170px;
  }
  @media (max-width: 790px) {
    height: 160px;
  }
  @media (max-width: 768px) {
    height: 290px;
  }
  @media (max-width: 700px) {
    height: 280px;
  }
  @media (max-width: 670px) {
    height: 270px;
  }
  @media (max-width: 640px) {
    height: 260px;
  }
  @media (max-width: 600px) {
    height: 250px;
  }
  @media (max-width: 550px) {
    height: 240px;
  }
  @media (max-width: 490px) {
    height: 230px;
  }
  @media (max-width: 460px) {
    height: 225px;
  }
  @media (max-width: 450px) {
    height: 210px;
  }
  @media (max-width: 420px) {
    height: 190px;
  }
  @media (max-width: 385px) {
    height: 175px;
  }
  @media (max-width: 360px) {
    height: 160px;
  }
  @media (max-width: 320px) {
    height: 150px;
  }
  @media (max-width: 300px) {
    height: 140px;
  }
`;

export const Bg = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: block;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
`;

export const Title = styled.h5`
  font-size: 16px;
  font-weight: 900;
  padding: 6px 6px 6px 0px;
  color: #fff;
  transition: all 0.2s ease-in-out;
  @media (max-width: 1199px) {
    font-size: 14px;
  }
  @media (max-width: 991px) {
    font-size: 13px;
    overflow-y: hidden;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 576px) {
    width: unset;
    font-size: 16px;
    overflow-y: unset;
    color: #fff;
  }
  @media (max-width: 440px) {
    font-size: 14px;
  }
  @media (max-width: 330px) {
    font-size: 13px;
  }
`;

export const Price = styled.h6`
  font-size: 18px;
  display: table;
  font-weight: 500;
  color: #fff;
  transition: all 0.2s ease-in-out;
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 330px) {
    font-size: 15px;
  }
`;

export const DiscountPricesDiv = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
`;

export const ProductOldPriceDiscount = styled.span`
  color: #fff;
  margin-right: 10px;
  display: table;
  font-size: 18px;
  text-decoration: line-through;
  font-weight: 100;
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 330px) {
    font-size: 15px;
  }
`;

export const ProductNewPriceDiscount = styled.span`
  color: #fff;
  display: table;
  font-size: 18px;
  font-weight: 100;
  @media (max-width: 440px) {
    font-size: 16px;
  }
  @media (max-width: 330px) {
    font-size: 15px;
  }
`;

export const LinkTo = styled.a`
  width: 100%;
  height: 100%;
  cursor: pointer;
  @media (max-width: 575px) {
    #product-0 {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    #recentlyAddedBg-0 {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }

    #product-1 {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    #recentlyAddedBg-1 {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    #product-2 {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    #recentlyAddedBg-2 {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }

    #product-3 {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    #recentlyAddedBg-3 {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
`;

export const PostInfoDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: translateY(-237px);
  @media (max-width: 1160px) {
    transform: translateY(-221px);
  }
  @media (max-width: 1110px) {
    transform: translateY(-211px);
  }
  @media (max-width: 1050px) {
    transform: translateY(-201px);
  }
  @media (max-width: 1010px) {
    transform: translateY(-191px);
  }
  @media (max-width: 991px) {
    transform: translateY(-200px);
  }
  @media (max-width: 945px) {
    transform: translateY(-190px);
  }
  @media (max-width: 900px) {
    transform: translateY(-181px);
  }
  @media (max-width: 835px) {
    transform: translateY(-171px);
  }
  @media (max-width: 790px) {
    transform: translateY(-160px);
  }
  @media (max-width: 768px) {
    transform: translateY(-291px);
  }
  @media (max-width: 700px) {
    transform: translateY(-281px);
  }
  @media (max-width: 670px) {
    transform: translateY(-272px);
  }
  @media (max-width: 640px) {
    transform: translateY(-262px);
  }
  @media (max-width: 600px) {
    transform: translateY(-250px);
  }
  @media (max-width: 550px) {
    transform: translateY(-241px);
  }
  @media (max-width: 490px) {
    transform: translateY(-231px);
  }
  @media (max-width: 460px) {
    transform: translateY(-226px);
  }
  @media (max-width: 450px) {
    transform: translateY(-210px);
  }
  @media (max-width: 420px) {
    transform: translateY(-193px);
  }
  @media (max-width: 385px) {
    transform: translateY(-177px);
  }
  @media (max-width: 360px) {
    transform: translateY(-161px);
  }
  @media (max-width: 320px) {
    transform: translateY(-149px);
  }
  @media (max-width: 300px) {
    transform: translateY(-139px);
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
  font-size: 16px;
  @media (max-width: 440px) {
    height: 45px;
    width: 45px;
    font-size: 14px;
  }
  @media (max-width: 330px) {
    height: 40px;
    width: 40px;
    font-size: 13px;
  }
`;
