import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import {
  Container,
  Edit,
  Delete,
  Div,
  DivButtons,
  DivImage,
  ProductImage,
  ProductName,
} from '../../../../../styles/Components/UI/Lists/Admin/Promotions/Promotions';

const PromotionsList = (props) => {
  const { promotions, handleGetElement } = props;

  const handleSelectPromotion = (e) => {
    const getter = handleGetElement;
    getter(e.currentTarget);
  };

  return (
    <>
      {promotions.map((promotion) => (
        <Container key={promotion._id} id={promotion._id}>
          <Div>
            <DivImage
              key={promotion._id}
              backgroundImage={promotion.media.url}
            />
          </Div>
          <ProductName>{promotion.promotionName}</ProductName>
          <DivButtons>
            <div>
              <Link
                href='/admin/edit/promotion/[slug]'
                as={`/admin/edit/promotion/${promotion.slug}`}
              >
                <Edit>
                  <FaEdit />
                </Edit>
              </Link>
            </div>
            <div>
              <Delete
                onClick={(e) => {
                  handleSelectPromotion(e);
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

export default PromotionsList;
