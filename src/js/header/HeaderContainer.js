import { connect } from 'react-redux';
import HeaderPane from './HeaderPane';
import { setAutoConnect } from '../connection/connectionActions';

const mapStateToProps = ({ connection, data }) => {
  return {
    imgBorder: data.imgBorder,
    autoConnect: connection.autoConnect,
    socket: connection.socket,
    status: connection.status,
  }
};

export default connect(mapStateToProps, { setAutoConnect })(HeaderPane);
