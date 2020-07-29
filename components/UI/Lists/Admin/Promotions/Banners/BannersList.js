import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import {
  Container,
  Edit,
  Div,
  Delete,
  DivButtons,
  ProductImage,
  DivImage,
  ProductName,
} from '../../../../../../styles/Components/UI/Lists/Admin/Promotions/Banner/Banner';

const PromotionsList = (props) => {
  const { banners, handleGetElement } = props;

  const handleSelectBanner = (e) => {
    const getter = handleGetElement;
    getter(e.currentTarget);
  };

  return (
    <>
      {banners.map((banner) => (
        <Container key={banner._id} id={banner._id}>
          <>
            <Div columns={banner.promotions.length}>
              {banner.promotions.map((promotion, key) => (
                <DivImage
                  key={promotion._id}
                  backgroundImage={promotion.media.url}
                />
              ))}
            </Div>
            <ProductName>{banner.bannerName}</ProductName>
            <DivButtons>
              <div>
                <Link
                  href='/admin/edit/banner/[slug]'
                  as={`/admin/edit/banner/${banner.slug}`}
                >
                  <Edit>
                    <FaEdit />
                  </Edit>
                </Link>
              </div>
              <div>
                <Delete
                  onClick={(e) => {
                    handleSelectBanner(e);
                  }}
                >
                  <FaTrashAlt />
                </Delete>
              </div>
            </DivButtons>
          </>
        </Container>
      ))}
    </>
  );
};

export default PromotionsList;
