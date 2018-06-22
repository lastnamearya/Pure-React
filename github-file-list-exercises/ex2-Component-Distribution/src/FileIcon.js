import React from 'react';
import PropTypes from 'prop-types';

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if(file.type === 'folder') {
    icon = 'fa-folder';
  }
  return (
      <i className={`fa ${icon}`}/>
  );
}

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileIcon;