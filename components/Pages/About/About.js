import React from 'react';
import Head from 'next/head';

import Layout from '../../Layout';

import { FaWind } from 'react-icons/fa';

import {
  Wrapper,
  WhyChooseDiv,
  WhyChooseH2,
  WhyChooseH3,
  WhyChooseSquares,
  Div,
  SquareH3,
  SquareP,
} from '../../../styles/Pages/About/About';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Us - Canada Cannabyss</title>
      </Head>
      <WhyChooseDiv>
        <Wrapper>
          <WhyChooseH2>WHY CHOOSE CANADIAN GROWN CANNABIS?</WhyChooseH2>
          <WhyChooseH3>
            Canadian grown Cannabis, one of the best grown bud in the world.
          </WhyChooseH3>
          <WhyChooseSquares>
            <Div>
              <FaWind />
              <SquareH3>Climate</SquareH3>
              <SquareP>
                The Canadain climate might be cold in most parts, but on the
                west coast the air is oxygen rich from dense forests of our
                massive trees, heavy precipitation and radiating sunshine
                creates excellent growing climates for all growers.
              </SquareP>
            </Div>
            <Div>
              <FaWind />
              <SquareH3>Growing Experience</SquareH3>
              <SquareP>
                Whenever searching top countries for quality cannabis growing,
                Canada is always there competing in the race. Canada has a long
                legacy of growers from East to West going back several
                generations.
              </SquareP>
            </Div>
            <Div>
              <FaWind />
              <SquareH3>Quality Strands</SquareH3>
              <SquareP>
                We source the highest quality flower from sources across Canada.
                Quality control from the cultivator to processor is our highest
                priority.
              </SquareP>
            </Div>
            <Div>
              <FaWind />
              <SquareH3>High Standards</SquareH3>
              <SquareP>
                Our standards don't go below AAA. We take priude in offering bud
                that will exceed expectations and give you the best experience
                possible when consuming our products.
              </SquareP>
            </Div>
          </WhyChooseSquares>
        </Wrapper>
      </WhyChooseDiv>
    </Layout>
  );
};

export default About;
