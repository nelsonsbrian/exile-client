import { connect } from 'react-redux';
import { sendMessage, updateMessage } from '../connection/connectionActions';
import { updateQueue } from '../../redux/metadata/metadataActions';
import MiddlePane from './MiddlePane';


const mapStateToProps = ({ connection, settings, character, combat, metadata }) => {
  return {
    attributes: character.attributes,
    metadata,
    inputHistory: connection.inputHistory,
    messages: connection.messages,
    settings,
    combat,
    imgPanel: metadata.imgPanel,
    imgBorder: metadata.imgBorder,
  }
};

export default connect(mapStateToProps, { updateMessage, sendMessage, updateQueue })(MiddlePane);
