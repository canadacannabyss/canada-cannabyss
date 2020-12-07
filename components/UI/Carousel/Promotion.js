import React, { Fragment } from 'react';
import Link from 'next/link';
import _ from 'lodash';
import Carousel from 'nuka-carousel';

import {
  Wrapper,
  Div,
  Image,
  DivImage,
  LoadingWrapper,
} from '../../../styles/Components/UI/Carousel/Promotion';

const Promotion = (props) => {
  const { banners } = props;
  console.log('banners.promotions:', banners.promotions);
  return (
    <>
      {banners.loading && <LoadingWrapper />}
      {banners.fetched &&
        !_.isEmpty(banners.data) &&
        !banners.error &&
        !banners.loading && (
          <Wrapper>
            <Carousel autoplay>
              {banners.data.map((banner) => (
                <Link
                  href="/promotion/[slug]"
                  as={`/promotion/${banner.promotions[0].slug}`}
                >
                  <DivImage>
                    <Image src={banner.promotions[0].media.url} />
                  </DivImage>
                </Link>
              ))}
            </Carousel>
          </Wrapper>
        )}
    </>
  );
};

export default Promotion;
