import PropTypes from 'prop-types';
import React from 'react';
import {
  Explanation,
  Label,
  ShippingDiv,
  ShippingH2,
  WeightUnitDiv,
  WeightUnitInput,
  WeightUnitSelect,
} from '../../../styles/Pages/Admin/Add/Product/Shipping';
import PhysicalProductCheckbox from '../Buttons/Checkbox/PhysicalProduct';

const Shipping = (props) => {
  const {
    handleCheckPhysicalProduct,
    handleWeightAmount,
    handleWeightUnit,
    physicalProduct,
    weightAmount,
    weightUnit,
  } = props;
  return (
    <ShippingDiv>
      <ShippingH2>Shipping</ShippingH2>
      <PhysicalProductCheckbox
        handleCheckPhysicalProduct={handleCheckPhysicalProduct}
        physicalProduct={physicalProduct}
      />
      <br />
      <Label>Weight</Label>
      <Explanation>
        Used to calculate shipping rates at checkout and label prices during
        fulfillment.
      </Explanation>
      <WeightUnitDiv>
        <WeightUnitInput
          type='number'
          placeholder='1.5'
          min={0}
          step={0.1}
          onChange={handleWeightAmount}
          value={weightAmount}
        />
        <WeightUnitSelect onChange={handleWeightUnit} value={weightUnit}>
          <option>kg</option>
          <option>lbs</option>
        </WeightUnitSelect>
      </WeightUnitDiv>
    </ShippingDiv>
  );
};

Shipping.propTypes = {
  handleCheckPhysicalProduct: PropTypes.func.isRequired,
  handleWeightAmount: PropTypes.func.isRequired,
  handleWeightUnit: PropTypes.func.isRequired,
};

export default Shipping;
