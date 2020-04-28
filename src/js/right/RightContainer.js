import { connect } from 'react-redux';
import RightPane from './RightPane';

const mapStateToProps = ({ data }) => {
  return {
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
  }
}

export default connect(mapStateToProps, null)(RightPane);
