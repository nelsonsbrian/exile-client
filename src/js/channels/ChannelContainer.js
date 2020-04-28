import { connect } from 'react-redux';
import ChannelPane from './ChannelPane';

const mapStateToProps = ({ channels }) => {
  return {
    channels,
  }
}

export default connect(mapStateToProps, null)(ChannelPane);
