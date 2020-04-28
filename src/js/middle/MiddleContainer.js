import { connect } from 'react-redux';
import { sendMessage, updateMessage } from '../connection/connectionActions';
import MiddlePane from './MiddlePane';

const mapStateToProps = ({ connection, data, settings, character, combat }) => {
  return {
    attributes: character.attributes,
    metadata: data.metadata,
    inputHistory: connection.inputHistory,
    messages: connection.messages,
    settings,
    combat,
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
  }
};

export default connect(mapStateToProps, { updateMessage, sendMessage })(MiddlePane);
