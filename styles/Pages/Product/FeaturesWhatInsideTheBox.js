import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  background: #fff;
  margin: 40px 0 20px 0;
  border: 1px solid #18840f;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

export const FeaturesDiv = styled.div`
  border-right: 1px solid #18840f;
  padding: 0px 20px;
  overflow-y: scroll;
  height: 260px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #18840f;
  }
`;

export const Features = styled.div`
  margin-bottom: 15px;
`;

export const InsideTheBoxDiv = styled.div`
  padding: 0px 20px;
  overflow-y: scroll;
  height: 260px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InsideTheBox = styled.div`
  margin-bottom: 15px;
`;

export const FeaturesInsideTheBoxH3 = styled.h3`
  color: #18840f;
  font-size: 13px;
  margin: 15px 0 10px 0;
`;
