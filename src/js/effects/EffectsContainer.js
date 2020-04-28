import { connect } from 'react-redux';
import EffectsPane from './EffectsPane';

const mapStateToProps = ({ metadata, effects }) => {
  return {
    effects,
    imgPanel: metadata.imgPanel,
    imgBorder: metadata.imgBorder,
  }

}

export default connect(mapStateToProps, null)(EffectsPane);


