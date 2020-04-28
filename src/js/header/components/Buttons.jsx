import React from 'react';
import styled from 'styled-components';
import { colors } from '../../shared/styled/theme';

export const Play = ({ colorFill }) => {
  return (
    <SVGContainer >
      <SVGLink>
        <SVGIcon viewBox="0 0 496.158 496.158" colorFill={colorFill}>
          <path fill="#32BEA6" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.002,0,111.062,0,248.085c0,137.002,111.07,248.071,248.083,248.071C385.088,496.155,496.158,385.086,496.158,248.085z" />
          <path fill="#FFFFFF" d="M370.805,235.242L195.856,127.818c-4.776-2.934-11.061-3.061-15.951-0.322c-4.979,2.785-8.071,8.059-8.071,13.762v214c0,5.693,3.083,10.963,8.046,13.752c2.353,1.32,5.024,2.02,7.725,2.02c2.897,0,5.734-0.797,8.205-2.303l174.947-106.576c4.657-2.836,7.556-7.986,7.565-13.44C378.332,243.258,375.452,238.096,370.805,235.242z" />
        </SVGIcon>
      </SVGLink>
    </SVGContainer>
  );
}

export const Stop = ({ colorFill }) => {
  return (
    <SVGContainer >
      <SVGLink>
        <SVGIcon viewBox="0 0 473.931 473.931" colorFill={colorFill}>
          <circle fill="#E84849" cx="236.966" cy="236.966" r="236.966" />
          <path fill="#FFFFFF" d="M338.771,324.568c0,7.846-6.361,14.207-14.215,14.207H149.345c-7.85,0-14.211-6.361-14.211-14.207V149.349c0-7.854,6.361-14.215,14.211-14.215H324.56c7.854,0,14.215,6.361,14.215,14.215v175.219H338.771z" />
        </SVGIcon>
      </SVGLink>
    </SVGContainer>
  );
}

const SVGContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.black};

`;

const SVGLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

`;


const SVGIcon = styled.svg`
  flex: none;
  height: 35px;
`;


