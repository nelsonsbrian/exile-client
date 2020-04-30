import { connect } from 'react-redux';
import EffectsPane from './EffectsPane';
import { updateTimers } from './effectsActions';

const mapStateToProps = ({ metadata, effects }) => {
  return {
    effects,
    imgPanel: metadata.imgPanel,
    imgBorder: metadata.imgBorder,
  }

}

export default connect(mapStateToProps, { updateTimers })(EffectsPane);


