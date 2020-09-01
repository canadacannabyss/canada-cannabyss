import React, { Fragment } from 'react';
import Link from 'next/link';
import {
  Wrapper,
  SellerTitle,
  Seller,
  List,
  AlsoBundles,
} from '../../../styles/Pages/Product/ProductsUser';
import { DivGrid } from '../../../styles/Pages/Bundles/Bundles';
import RoundFloatNumber from '../../../utils/Calculate/roundFloatNumber';
import BundleList from '../../UI/Lists/Bundles/BundlesList';

const BundleUser = (props) => {
  const { user, resellerBundles } = props;
  const roundFloatNumber = new RoundFloatNumber();

  console.log('resellerBundles:', resellerBundles);

  return (
    <Wrapper>
      <SellerTitle>Seller:</SellerTitle>
      <Seller>
        <div
          className='image'
          alt={user.profileImage.name}
          style={{
            backgroundImage: `url('${user.profileImage.url}')`,
          }}
        />
        <div className='sellerInfo'>
          <span>{`${user.names.firstName} ${user.names.lastName}`}</span>
        </div>
      </Seller>
      <AlsoBundles>
        Other bundles by {`${user.names.firstName} ${user.names.lastName}`}
      </AlsoBundles>
      <DivGrid>
        <BundleList bundles={resellerBundles.data} />
      </DivGrid>
    </Wrapper>
  );
};

export default BundleUser;
