import React from 'react';
import {
  Input,
  InputDiv,
  Label,
  PreviewDescription,
  PreviewTitle,
  PreviewURL,
  SEODiv,
  SEOH2,
  SEOPreview,
  TextArea,
} from '../../../styles/Pages/Admin/Add/Product/SEO';

const SEO = (props) => {
  const {
    title,
    slug,
    description,
    onChangeSeoTitle,
    onChangeSeoSlug,
    onChangeSeoDescription,
  } = props;

  return (
    <SEODiv>
      <SEOH2>Search engine listing preview</SEOH2>
      <SEOPreview>
        <PreviewTitle>{title} - Canada Cannabyss</PreviewTitle>
        <PreviewURL>{`https://canadacannabyss.com/product/${slug}`}</PreviewURL>
        <PreviewDescription>{description}</PreviewDescription>
      </SEOPreview>
      <InputDiv>
        <Label>Title</Label>
        <br />
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeSeoTitle}
        />
        <Label>Slug</Label>
        <br />
        <Input
          type="text"
          placeholder="Slug"
          onChange={onChangeSeoSlug}
          value={slug}
        />
        <Label>Description</Label>
        <TextArea
          placeholder="Description"
          onChange={onChangeSeoDescription}
          value={description}
        />
      </InputDiv>
    </SEODiv>
  );
};

export default SEO;
