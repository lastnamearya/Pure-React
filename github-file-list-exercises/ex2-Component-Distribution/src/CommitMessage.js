import React from 'react';
import PropTypes from 'prop-types';

function CommitMessage({ commit }) {
  return (
    <span>
      {commit.message}
    </span>
  );
}

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
};

export default CommitMessage;