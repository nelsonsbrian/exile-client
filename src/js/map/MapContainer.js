import { connect } from 'react-redux';
import MapPanel from './MapPanel';

const mapStateToProps = ({ map, metadata }) => {
  return {
    imgBorder: metadata.imgBorder,
    imgPanel: metadata.imgPanel,
    grid: map.small.grid,
    metadata,
  }
};

export default connect(mapStateToProps, null)(MapPanel);
