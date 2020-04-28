import { connect } from 'react-redux';
import HeaderPane from './HeaderPane';
import { setAutoConnect } from '../connection/connectionActions';

const mapStateToProps = ({ connection, metadata }) => {
  return {
    imgBorder: metadata.imgBorder,
    autoConnect: connection.autoConnect,
    socket: connection.socket,
    status: connection.status,
  }
};

export default connect(mapStateToProps, { setAutoConnect })(HeaderPane);
