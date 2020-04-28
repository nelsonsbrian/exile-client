import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage, sendActionBar } from '../connection/connectionActions';
import ActionBar from './ActionBar';

ActionBar.propTypes = {
  aliases: PropTypes.arrayOf(PropTypes.array).isRequired,
  actionBar: PropTypes.object.isRequired,
}

const mapStateToProps = ({ actionBar }) => {
  return {
    aliases: actionBar.aliases,
    actionBar: actionBar.actionBar,
  }
};

export default connect(mapStateToProps, { sendActionBar, sendMessage })(ActionBar);
