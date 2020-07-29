import _ from 'lodash';
import Link from 'next/link';
import React from 'react';
import {
  AllBundle,
  DivGrid,
  H1,
  LoadingH1,
  LoadingAllBundle,
  LoadingBundleWrapper,
  Wrapper,
} from '../../../styles/Pages/Home/Bundles';
import CombosList from '../../UI/Lists/Home/BundlesList/BundlesList';

const Bundles = (props) => {
  const { bundles } = props;
  return (
    <Wrapper>
      {bundles.loading && (
        <>
          <LoadingH1 />
          <DivGrid>
            <LoadingBundleWrapper />
            <LoadingBundleWrapper />
          </DivGrid>
          <LoadingAllBundle />
        </>
      )}
      {bundles.fetched &&
        !_.isEmpty(bundles.data) &&
        !bundles.loading &&
        !bundles.error && (
          <>
            <H1>Bundles</H1>
            <DivGrid>
              <CombosList bundles={bundles.data} />
            </DivGrid>
            <Link href='/bundles' as='/bundles'>
              <AllBundle>All Bundles</AllBundle>
            </Link>
          </>
        )}
    </Wrapper>
  );
};

export default Bundles;
