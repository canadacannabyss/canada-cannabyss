import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import {
  Container,
  DivGrid,
  Edit,
  ProductImage,
  ProductName,
  Delete,
  Div,
  DivImage,
  DivButtons,
} from '../../../../../styles/Components/UI/Lists/Admin/Bundles/BundlesList';

const BundlesList = (props) => {
  const { bundles, handleGetElement } = props;

  console.log('bundles:', bundles);

  const handleSelectBundle = (e) => {
    const getter = handleGetElement;
    getter(e.currentTarget);
  };

  return (
    <>
      {bundles.map((bundle) => (
        <Container key={bundle._id} id={bundle._id}>
          <Div>
            {bundle.products.length > 0 && (
              <DivImage
                key={bundle._id}
                backgroundImage={bundle.products[0].media[0].url}
              />
            )}
          </Div>
          <ProductName>{bundle.bundleName}</ProductName>
          <DivButtons>
            <div>
              <Link
                href='/admin/edit/bundle/[slug]'
                as={`/admin/edit/bundle/${bundle.slug}`}
              >
                <Edit>
                  <FaEdit />
                </Edit>
              </Link>
            </div>
            <div>
              <Delete
                onClick={(e) => {
                  handleSelectBundle(e);
                }}
              >
                <FaTrashAlt />
              </Delete>
            </div>
          </DivButtons>
        </Container>
      ))}
    </>
  );
};

export default BundlesList;
