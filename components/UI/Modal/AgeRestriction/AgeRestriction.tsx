import React, { FC, useState, useEffect } from 'react';

import Logo from '../../../../assets/img/canada-cannabyss-logo.svg';

import {
  Background,
  Container,
  H1Div,
  Statement,
  ButtonsDiv,
  YesButton,
  NoButton,
} from '../../../../styles/Components/UI/Modal/AgeRestriction/AgeRestriction';

interface IAgeRestrictionProps {
  toggleIsAgeRestricted: (toggleIsAgeRestricted: boolean) => void;
}

const AgeRestriction: FC<IAgeRestrictionProps> = ({
  toggleIsAgeRestricted,
}) => {
  function setAgeRestrictionToFalse(): void {
    localStorage.setItem('isAgeRestricted', 'false');
    toggleIsAgeRestricted(false);
  }

  return (
    <>
      <Background />
      <Container>
        <H1Div>
          <img src={Logo} alt="Canada Cannabyss" />
          <div className="sep" />
          <h1>Age Restriction</h1>
        </H1Div>
        <Statement>
          You must be at least +18 years old to enter the website.
        </Statement>
        <ButtonsDiv>
          <YesButton
            onClick={() => {
              setAgeRestrictionToFalse();
            }}
          >
            Yes
          </YesButton>
          <NoButton>No</NoButton>
        </ButtonsDiv>
      </Container>
    </>
  );
};

export default AgeRestriction;
