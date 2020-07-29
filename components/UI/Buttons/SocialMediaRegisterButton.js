import React from 'react';
import PropTypes from 'prop-types';

import { LinkToProviderLi } from '../../../styles/Components/UI/Buttons/SocialMediaRegisterButton';

const SocialMediaRegisterButton = (props) => {
  const { backgroundColor, endpoint, icon, socialMediaName } = props;
  return (
    <LinkToProviderLi backgroundColor={backgroundColor}>
      <a href={endpoint}>
        <span>{icon}</span>
        <p>{socialMediaName}</p>
      </a>
    </LinkToProviderLi>
  );
};

SocialMediaRegisterButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  socialMediaName: PropTypes.string.isRequired,
};

export default SocialMediaRegisterButton;
