import React from 'react';
import {
  CheckboxDiv,
  CheckboxDivChecked,
} from '../../../../styles/Components/UI/Buttons/Checkbox/AllowCustomersPurchaseOutOfStockCheckbox';

const AcceptTermsOfUseCheckbox = (props) => {
  const { handleCheckAcceptTermsOfUse, acceptTermsOfUse } = props;

  const handleToggleAcceptTermsOfUse = () => {
    const toggle = handleCheckAcceptTermsOfUse;
    toggle();
  };

  return (
    <>
      {acceptTermsOfUse ? (
        <CheckboxDivChecked>
          <ul className='unstyled centered'>
            <li>
              <input
                tabIndex='-1'
                className='styled-checkbox'
                id='styled-checkbox-5'
                type='checkbox'
                value='value5'
              />
              <label
                htmlFor='styled-checkbox-5'
                onClick={handleToggleAcceptTermsOfUse}
              >
                Accept Terms of Use
              </label>
            </li>
          </ul>
        </CheckboxDivChecked>
      ) : (
        <CheckboxDiv>
          <ul className='unstyled centered'>
            <li>
              <input
                tabIndex='-1'
                className='styled-checkbox'
                id='styled-checkbox-5'
                type='checkbox'
                value='value5'
              />
              <label
                htmlFor='styled-checkbox-5'
                onClick={handleToggleAcceptTermsOfUse}
              >
                Accept Terms of Use
              </label>
            </li>
          </ul>
        </CheckboxDiv>
      )}
    </>
  );
};

export default AcceptTermsOfUseCheckbox;
