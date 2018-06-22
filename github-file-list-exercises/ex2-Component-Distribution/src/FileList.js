import React from 'react';
import PropTypes from 'prop-types';
import FileListItem from './FileListItem';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => 
        <FileListItem key={file.id} file={file}/>
      )}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array
};

export default FileList;