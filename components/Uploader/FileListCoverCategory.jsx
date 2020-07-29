import React from 'react';
import {
  FileDiv,
  FileInfo,
  PreviewCover,
} from '../../styles/Components/Uploader/FileListCoverCategory';

const FileList = ({ file, onDelete }) => (
  <FileDiv key={file.id}>
    <FileInfo>
      <PreviewCover src={file.url} />
      <br />
      <div>
        <span>
          {!!file.url && (
            <button type="button" onClick={() => onDelete(file.id)}>
              Delete
            </button>
          )}
        </span>
      </div>
    </FileInfo>
  </FileDiv>
);

export default FileList;
