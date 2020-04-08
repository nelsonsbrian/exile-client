import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from './theme';
import CloseButton from './CloseButton';
import ReactDOM from 'react-dom';

export default function Modal({ children, render, title }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.defaultPrevented) { return; }
    if (e.key === 'Esc' || e.key === 'Escape') {
      setIsOpen(false);
    }
  }


  return (

    <>
      {children(isOpen, setIsOpen)}
      {ReactDOM.createPortal(
        <ModalBG
          isOpen={isOpen}
          onClick={() => { setIsOpen(false) }}
        >
          <ModalContentContainer onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <HeaderText>{title || 'Menu'}</HeaderText>
              <ButtonContainer onClick={() => setIsOpen(false)}>
                <CloseButton />
              </ButtonContainer>

            </ModalHeader>
            {render()}
          </ModalContentContainer>
        </ModalBG>,
        document.getElementById('portal-root'))}
    </>
  )
}


const ModalBG = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	width: 100%;
  height: 100%;
  z-index: 5;
	position: absolute;
	top: 0;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
	justify-content: center;
	align-items: center;
`;

// Import this into your Modal file and use this as a wrapper for your content
export const ModalContent = styled.div`
  min-height: 30vh;
  min-width: 30vw;
  height: 40vh;
  width: 40vw;
	background-color: rgba(210,180,140, .6);
	text-align: center;
	padding: 20px;
  position: relative;
  margin-top: 60px;
  z-index: 1;
  border-radius: 4px;
`;

const ModalContentContainer = styled.div`
	position: relative;
  font-size: 22px;
  z-index: 3;
`;

const ButtonContainer = styled.div`
  position: absolute;
  z-index: 41;
  top: 0;
  right: 0;
  justify-content: center;
	align-items: center;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  padding: 10px;
  `;


const ModalHeader = styled.div`
  position: absolute;
  height: 60px;
  z-index: 42;
  width: 100%;
	top: 0;
  left: 0;
  padding: 0px 15px;
  color: ${colors.primaryText};
  background: ${colors.primary};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const HeaderText = styled.h2`
  margin: 0;
  width: 85%;
  font-size: 42px;
`;