import React from 'react';
import styled from 'styled-components';
import Modal, { ModalContent } from './styled/Modal';
import Convert from 'ansi-to-html';
import { colors } from './styled/theme';
import { SVGLink, SVGIcon, SVGContainer } from './MenuBar';

export default function EffectsModal({ effects }) {
  return (
    <Modal
      render={() => <EffectsPanel effects={effects} />}
      title='Player Effects'
    >
      {(isOpen, setIsOpen) => (
        <SVGContainer onClick={() => setIsOpen(true)}>
          <SVGLink >
            <SVGIcon viewBox="0 0 24 24">
              <path d="M23.7,3.1l-2.8-2.8c-0.4-0.4-1-0.4-1.4,0L0.3,19.5c-0.4,0.4-0.4,1,0,1.4l2.8,2.8c0.4,0.4,1,0.4,1.4,0L23.7,4.5   C24.1,4.1,24.1,3.5,23.7,3.1z M3.8,21.6l-1.4-1.4L15.2,7.4l1.4,1.4L3.8,21.6z M17.3,8.1l-1.4-1.4l4.2-4.2l1.4,1.4L17.3,8.1z" />
              <polygon points="12,6 12.8,3.8 15,3 12.8,2.2 12,0 11.2,2.2 9,3 11.2,3.8  " />
              <polygon points="5,9 5.8,6.8 8,6 5.8,5.2 5,3 4.2,5.2 2,6 4.2,6.8  " />
              <polygon points="21,12 20.2,14.2 18,15 20.2,15.8 21,18 21.8,15.8 24,15 21.8,14.2  " />
            </SVGIcon>
          </SVGLink>
        </SVGContainer>
      )}
    </Modal>
  )
}


const EffectsPanel = ({ effects }) => {
  const convertAnsi = new Convert({ newline: true });
  return (
    <ModalContentStyle>
      <EffectContainer >
        <Effect header>
          <EffectDuration>
            Duration
          </EffectDuration>
          <EffectName>
            Name
          </EffectName>
          <EffectDescription>
            Description
          </EffectDescription>
        </Effect>
        {effects.map(effect => {
          return (
            <Effect key={effect.name}>
              <EffectDuration>
                {effect.short}
              </EffectDuration>
              <EffectName>
                {effect.name}
              </EffectName>
              <EffectDescription dangerouslySetInnerHTML={{ __html: convertAnsi.toHtml(effect.description) }}>

              </EffectDescription>
            </Effect>
          )
        })}
      </EffectContainer>
    </ModalContentStyle>
  )
}

const ModalContentStyle = styled(ModalContent)`
  height: 50vh;
  width: 80vw;
	padding: 25px;
  `;

const EffectContainer = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 25px 15px;
  /* border: 10px solid black; */
  overflow-y: scroll;
  /* margin: 20px; */
	/* background-color: rgba(210,180,140, .9); */
  color: ${colors.secondaryText};
  background: rgba(0, 0, 0, 0.2);
  /* padding: 20px; */
  border-radius: 4px;
  box-shadow: inset 0px 0px 10px 5px ${colors.dark};
  `;

const Effect = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 120px 350px auto;
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  
  text-decoration: ${({ header }) => header ? 'underline' : 'none'};
  /* border-top: solid 3px black; */
  
  `;

const GridChild = styled.div`
  /* border-left: solid 2px black; */
  padding: 2px 10px;
`;

const EffectDuration = styled(GridChild)`

`;

const EffectName = styled(GridChild)`

  `;

const EffectDescription = styled(GridChild)`
  text-align: left;
  
`;








