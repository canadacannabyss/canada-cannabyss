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
import Logo from '../../../assets/img/canada-cannabyss-logo.webp';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Us - Canada Cannabyss</title>
        <meta name='description' content='About Us - Canada Cannabyss.' />

        {/* Open Graph */}
        <meta property='og:title' content='About Us - Canada Cannabyss' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`${process.env.MAIN_DOMAIN}/about`} />
        <meta
          property='og:description'
          content='About Us - Canada Cannabyss.'
        />
        <meta property='og:image' content={Logo} />
        <meta property='og:site_name' content='Canada Cannabyss' />

        {/* Google+ */}
        <meta itemprop='name' content='About Us - Canada Cannabyss' />
        <meta itemprop='description' content='About Us - Canada Cannabyss' />
        <meta itemprop='image' content={Logo} />

        {/* Twitter */}
        <meta name='twitter:card' content='product' />
        <meta name='twitter:site' content='@canadacannabyss' />
        <meta name='twitter:title' content='About Us - Canada Cannabyss' />
        <meta
          name='twitter:description'
          content='About Us - Canada Cannabyss.'
        />
        <meta name='twitter:creator' content='@canadacannabyss' />
        <meta name='twitter:image' content={Logo} />
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
