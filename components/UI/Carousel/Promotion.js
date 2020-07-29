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
            <Carousel
            // autoplay
            >
              {banners.data.map((banner) => (
                <Div key={banner._id} columns={banner.promotions.length}>
                  {banner.promotions.map((promotion) => (
                    <Fragment key={promotion._id}>
                      <Link
                        href='/promotion/[slug]'
                        as={`/promotion/${promotion.slug}`}
                      >
                        <DivImage
                          backgroundImage={promotion.media.url}
                        ></DivImage>
                      </Link>
                    </Fragment>
                  ))}
                </Div>
              ))}
            </Carousel>
          </Wrapper>
        )}
    </>
  );
};

export default Promotion;
