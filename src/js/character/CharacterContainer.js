
import React from 'react';
import { colors } from '../shared/styled/theme';
import { connect } from 'react-redux';
import Character from './Character';
import { setCharacterPanel } from '../settings/settingsActions';


const mapStateToProps = ({ quests, settings, metadata }) => {
  return {
    quests,
    metadata,
    settings,
    imgPanel: metadata.imgPanel,
    imgBorder: metadata.imgBorder,
  }
}

const mapDispatchToProps = {
  setCharacterPanel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
