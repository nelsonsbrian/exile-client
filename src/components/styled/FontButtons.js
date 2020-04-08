import React from 'react'
import styled from 'styled-components';

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
      {fontSize}pt
      <Button as="button" onClick={() => handleSizeChange('+')}>+</Button>
      <Button as="button" onClick={() => handleSizeChange('-')}>-</Button>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  color: white;
  position: relative;
  right: 0px;
  top: 0;
  margin: 0;
`;

const Button = styled.button`


`;