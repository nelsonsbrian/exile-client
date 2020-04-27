import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../components/styled/theme';

export default function FontButtons({ fontSize, setFontSize }) {

  const handleSizeChange = (type) => {
    if (type === '+' && fontSize < 16) {
      setFontSize(fontSize + 2);
    } else if (type === '-' && fontSize > 10) {
      setFontSize(fontSize - 2);
    }
  }

  return (
    <ButtonContainer>
      <Button onClick={() => handleSizeChange('+')}>+</Button>
      <Button onClick={() => handleSizeChange('-')}>-</Button>
      <span>{fontSize}pt font</span>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  max-width: 250px;
  display: flex;
  justify-content: center;
  height: 30px;
  margin: 0;
  font-variant: small-caps;

  span {
    display: inline-block;
    margin-left: 15px;
  }

`;

const Button = styled.div`
  width: 22px;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 0 1px;
  border:  0.1em solid ${colors.secondaryText};
  background-color:${colors.primary};
  border-radius:  0.12em;
  text-decoration:  none;
  color:  ${colors.secondaryText};
  text-align:  center;
  transition: all 0.2s;

  :hover {
    color: ${colors.primary};
    background-color:${colors.secondaryText};
    border-color: ${colors.primary};
  }
`;