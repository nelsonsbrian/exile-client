import { connect } from 'react-redux';
import LeftPane from './LeftPane';

const mapStateToProps = ({ data }) => {
  return {
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
    metadata: data.metadata,
  }
}


export default connect(mapStateToProps, null)(LeftPane);
