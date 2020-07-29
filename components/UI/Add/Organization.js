import React from 'react';
import {
  Input,
  Label,
  OrganizationDiv,
  OrganizationGrid,
  OrganizationH2,
  TextArea,
} from '../../../styles/Pages/Admin/Add/Product/Organization';

const Organization = (props) => {
  const { onChangeCategory, onChangeTags, categoryValue, tagsValue } = props;

  return (
    <OrganizationDiv>
      <OrganizationH2>Organization</OrganizationH2>
      <OrganizationGrid>
        <div>
          <Label>Category</Label>
          <Input
            type="text"
            placeholder="Category"
            onChange={onChangeCategory}
            value={categoryValue}
          />
        </div>
        <div>
          <Label>Tags</Label>
          <TextArea
            placeholder="Tags"
            onChange={onChangeTags}
            value={tagsValue}
          />
        </div>
      </OrganizationGrid>
    </OrganizationDiv>
  );
};

export default Organization;
