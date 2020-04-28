import { connect } from 'react-redux';
import RightPane from './RightPane';

const mapStateToProps = ({ metadata }) => {
  return {
    imgPanel: metadata.imgPanel,
    imgBorder: metadata.imgBorder,
  }
}

export default connect(mapStateToProps, null)(RightPane);
