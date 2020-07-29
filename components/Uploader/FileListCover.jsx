import React from 'react';
import {
  ContainerCover,
  FileDiv,
  FileInfo,
  PreviewCover,
} from '../../styles/Components/Uploader/FileListCover';

const FileList = ({ files, onDelete }) => (
  <ContainerCover>
    {files.map((file) => (
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
    ))}
  </ContainerCover>
);

export default FileList;
