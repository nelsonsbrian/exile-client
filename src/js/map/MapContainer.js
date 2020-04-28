import { connect } from 'react-redux';
import MapPanel from './MapPanel';

const mapStateToProps = ({ map, data }) => {
  return {
    imgBorder: data.imgBorder,
    imgPanel: data.imgPanel,
    grid: map.small.grid,
    metadata: data.metadata,
  }
};

export default connect(mapStateToProps, null)(MapPanel);
