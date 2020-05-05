import { connect } from 'react-redux';
import EffectsPane from './EffectsPane';
import { updateTimers } from './effectsActions';
import { updateTargetTimers } from '../combat/combatActions';

const mapStateToProps = ({ effects, combat }) => {
  return {
    effects,
    combat,
  }

}

export default connect(mapStateToProps, { updateTimers, updateTargetTimers })(EffectsPane);


