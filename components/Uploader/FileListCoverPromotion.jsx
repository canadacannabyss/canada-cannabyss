import React from 'react';
import {
  FileDiv,
  FileInfo,
  PreviewCover,
} from '../../styles/Components/Uploader/FileListCoverPromotion';

const FileList = ({ files, onDelete }) => (
  <FileDiv key={files.id}>
    <FileInfo>
      <PreviewCover src={files.url} />
      <br />
      <div>
        <span>
          {!!files.url && (
            <button type="button" onClick={() => onDelete(files.id)}>
              Delete
            </button>
          )}
        </span>
      </div>
    </FileInfo>
  </FileDiv>
);

export default FileList;
