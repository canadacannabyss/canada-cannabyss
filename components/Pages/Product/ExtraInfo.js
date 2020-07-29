import _ from 'lodash';
import React, { useState, useEffect, Fragment } from 'react';
import {
  Wrapper,
  Container,
  Div,
  TitleButtonDiv,
  Scroller,
  Info,
} from '../../../styles/Pages/Product/ExtraInfo';

const ExtraInfos = (props) => {
  const { extraInfoArray } = props;
  const [selectedInfoId, setSelectedInfoId] = useState('');
  const [selectedInfoDescription, setSelectedInfoDescription] = useState('');

  const handleSelectedInfoId = (e) => {
    setSelectedInfoId(e.currentTarget.id);
  };

  useEffect(() => {
    if (extraInfoArray.length > 0) {
      setSelectedInfoId(extraInfoArray[0]._id);
      setSelectedInfoDescription(extraInfoArray[0].description);
    }
  }, []);

  useEffect(() => {
    setSelectedInfoDescription(
      extraInfoArray.filter((info) => info._id === selectedInfoId)
    );
  }, [selectedInfoId]);

  const clearSelectedButtons = () => {
    const buttons = document.querySelectorAll('.selectButton');
    buttons.forEach((button) => {
      button.classList.remove('selected');
    });
  };

  const handleClickExtraInfoButton = (e) => {
    clearSelectedButtons();
    e.currentTarget.classList.add('selected');
  };

  return (
    <Wrapper>
      {extraInfoArray.length === 1 &&
      extraInfoArray[0].title.length === 0 &&
      extraInfoArray[0].description.length === 0 ? (
        <></>
      ) : (
        <>
          <Scroller>
            <TitleButtonDiv>
              {extraInfoArray.map((info, index) => (
                <Fragment key={info._id}>
                  {index === 0 ? (
                    <button
                      className='selectButton selected'
                      id={info._id}
                      onClick={(e) => {
                        handleClickExtraInfoButton(e);
                        handleSelectedInfoId(e);
                      }}
                    >
                      {info.title}
                    </button>
                  ) : (
                    <button
                      className='selectButton'
                      id={info._id}
                      onClick={(e) => {
                        handleClickExtraInfoButton(e);
                        handleSelectedInfoId(e);
                      }}
                    >
                      {info.title}
                    </button>
                  )}
                </Fragment>
              ))}
            </TitleButtonDiv>
          </Scroller>
          <Container>
            {selectedInfoDescription.length !== 0 && (
              <Div
                dangerouslySetInnerHTML={{
                  __html: selectedInfoDescription[0].description,
                }}
              />
            )}
          </Container>
        </>
      )}
    </Wrapper>
  );
};

export default ExtraInfos;
