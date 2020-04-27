
import React from 'react';
import { colors } from '../../components/styled/theme';
import { connect } from 'react-redux';
import Character from './Character';
import { setCharacterPanel } from '../settings/settingsActions';


const mapStateToProps = ({ quests, settings, data }) => {
  return {
    quests,
    metadata: data.metadata,
    settings,
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
  }
}

const mapDispatchToProps = {
  setCharacterPanel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
