import PropTypes from 'prop-types';
import React from 'react';
import {
  InventoryDiv,
  InventoryDivInput,
  InventoryGrid,
  InventoryH2,
  Label,
  InventoryGridDiv,
} from '../../../styles/Pages/Admin/Add/Product/Inventory';
import AllowCustomersPurchaseOutOfStockCheckbox from '../Buttons/Checkbox/AllowCustomersPurchaseOutOfStockCheckbox';

const Inventory = (props) => {
  const {
    handleCheckAllowPurchaseOutOfStock,
    handleSku,
    handleBarcode,
    handleQuantity,
    sku,
    barcode,
    quantity,
    allowPurchaseOutOfStock,
  } = props;

  return (
    <InventoryDiv>
      <InventoryH2>Inventory</InventoryH2>
      <InventoryGrid>
        <InventoryGridDiv>
          <Label>SKU</Label>
          <br />
          <InventoryDivInput
            type='text'
            placeholder='DTO-M-T53HD'
            onChange={handleSku}
            value={sku}
          />
        </InventoryGridDiv>
        <div>
          <Label>Barcode (ISBN, UPC, GTIN, etc.)</Label>
          <br />
          <InventoryDivInput
            type='text'
            placeholder='ISBN 978-3-16-148410-0'
            onChange={handleBarcode}
            value={barcode}
          />
        </div>
        <div>
          <Label>Quantity</Label>
          <br />
          <InventoryDivInput
            type='number'
            style={{
              width: '150px',
            }}
            placeholder='10'
            min={0}
            onChange={handleQuantity}
            value={quantity}
          />
        </div>
      </InventoryGrid>
      <AllowCustomersPurchaseOutOfStockCheckbox
        handleCheckAllowPurchaseOutOfStock={handleCheckAllowPurchaseOutOfStock}
        allowPurchaseOutOfStock={allowPurchaseOutOfStock}
      />
    </InventoryDiv>
  );
};

Inventory.propTypes = {
  handleCheckAllowPurchaseOutOfStock: PropTypes.func.isRequired,
  handleSku: PropTypes.func.isRequired,
  handleBarcode: PropTypes.func.isRequired,
  handleQuantity: PropTypes.func.isRequired,
};

export default Inventory;
