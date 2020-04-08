import React from 'react'
import styled from 'styled-components';
import { colors } from './theme';

export default function CloseButton() {

  return (
    <Link href="#">
      <Icon viewBox="0 0 23.332 23.333">
        <path d="M16.043,11.667L22.609,5.1c0.963-0.963,0.963-2.539,0-3.502l-0.875-0.875c-0.963-0.964-2.539-0.964-3.502,0L11.666,7.29  L5.099,0.723c-0.962-0.963-2.538-0.963-3.501,0L0.722,1.598c-0.962,0.963-0.962,2.539,0,3.502l6.566,6.566l-6.566,6.567  c-0.962,0.963-0.962,2.539,0,3.501l0.876,0.875c0.963,0.963,2.539,0.963,3.501,0l6.567-6.565l6.566,6.565  c0.963,0.963,2.539,0.963,3.502,0l0.875-0.875c0.963-0.963,0.963-2.539,0-3.501L16.043,11.667z" />
      </Icon>
    </Link>
  )
}

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0px 10px;
`;

const Icon = styled.svg`
  flex: none;
  fill: ${colors.primaryText};

  transition: fill 0.25s;

  width: 40px;
  height: 40px;
  ${Link}:hover & {
    fill: ${colors.dark};
  }
`;