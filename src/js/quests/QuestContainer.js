import React from 'react';
import { colors } from '../../components/styled/theme';
import { connect } from 'react-redux';
import QuestPanel from './QuestPanel';


const mapStateToProps = ({ quests }) => {
  return {
    quests,
  }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(QuestPanel);
