import { connect } from 'react-redux';
import LeftPane from './LeftPane';

const mapStateToProps = ({ metadata }) => {
  return {
    imgPanel: metadata.imgPanel,
    imgBorder: metadata.imgBorder,
    metadata,
  }
}


export default connect(mapStateToProps, null)(LeftPane);
