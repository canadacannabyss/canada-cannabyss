/* eslint-disable react/prop-types */
import React from 'react';
import {
  ContainerAdmin,
  DeleteButton,
  FileInfoAdmin,
  PreviewAdmin,
} from '../../../styles/Components/Uploader/Admin/FileListCoverAdmin';

const FileList = ({ file, onDelete }) => (
  <ContainerAdmin>
    <FileInfoAdmin>
      <PreviewAdmin src={file.url} />
      {!!file.url && (
        <DeleteButton type="button" onClick={() => onDelete(file.id)}>
          Delete
        </DeleteButton>
      )}
    </FileInfoAdmin>
  </ContainerAdmin>
);

export default FileList;
