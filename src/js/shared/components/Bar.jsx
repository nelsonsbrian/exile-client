import React from 'react';
import { Line } from 'rc-progress';
import { colors } from '../styled/theme';

export default function Bar({ current, max, attribute, height, width }) {
  return (
    <div style={{ height: height || '40px', width: width || '100%', padding: '2px 0px' }}>
      <Line percent={current / max * 100}
        strokeWidth="25"
        trailWidth="25"
        trailColor={colors[`${attribute}Dark`]}
        strokeColor={colors[attribute] || 'white'}
        strokeLinecap="butt"
      />
    </div>
  )
};