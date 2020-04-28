import React from 'react';
import styled from 'styled-components';
import Modal, { ModalContent } from '../../shared/components/Modal';
import Convert from 'ansi-to-html';
import { colors } from '../../shared/styled/theme';
import { SVGLink, SVGIcon, SVGContainer } from './MenuBar';

export default function MapModal({ map, metadata }) {
  return (
    <Modal
      render={() => <MapPanel grid={map.grid} extras={map.extras} metadata={metadata} />}
      title={`Map of ${metadata.area}`}
    >
      {(isOpen, setIsOpen) => (
        <SVGContainer onClick={() => setIsOpen(true)}>
          <SVGLink >
            <SVGIcon viewBox="-5 0 102 102">
              <path d="M64,20L32.082,0L0,20.031V96l32-20l32,20l32-20V0L64,20z M8,81.566V24.468L28,11.98v57.084l-0.24,0.15L8,81.566z M36,69.064  V11.896l23.752,14.883L60,26.935v57.131L36.24,69.216L36,69.064z M88,71.566l-20,12.5V26.935l0.24-0.15L88,14.434V71.566z" />
            </SVGIcon>
          </SVGLink>
        </SVGContainer>
      )}
    </Modal>
  )
}


const MapPanel = ({ grid, extras, metadata }) => {
  const convertAnsi = new Convert({ newline: true });
  return (
    <ModalContentStyle>
      <MapContainer >
        <pre dangerouslySetInnerHTML={{ __html: convertAnsi.toHtml(grid) }}></pre >
      </MapContainer>
      <RoomContainer >
        <RoomTitle>
          {metadata.room}
        </RoomTitle>
        <RoomDescription>
          {metadata.roomDesc}
        </RoomDescription>
      </RoomContainer>
    </ModalContentStyle>
  )
}

const ModalContentStyle = styled(ModalContent)`
  height: 90vh;
  width: 75vw;
	padding: 25px;
  display: flex;
  overflow-x: scroll;
  `;

const MapContainer = styled.div`
  border-radius: 4px;
  box-shadow: inset 0px 0px 10px 5px ${colors.dark};
  color: ${colors.secondaryText};
  background: rgba(0, 0, 0, 0.2);
  min-height: 100%;
  min-width: 900px;
  max-width: 1000px;
  width: 100%;
	padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  pre {
    background: black;
    color: white;
    font-family: monospace;
    white-space: pre;
    margin: 0 auto;
    font-size: 18px;
  }
`;

const RoomContainer = styled.div`
  border-radius: 4px;
  box-shadow: inset 0px 0px 10px 5px ${colors.dark};
  color: ${colors.secondaryText};
  background: rgba(0, 0, 0, 0.6);
  margin-left: 25px;
	padding: 25px;
  min-height: 100%;
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
`;

const RoomTitle = styled.p`
  text-align: center;
  color: ${colors.primaryText};
  font-size: 42px;
  font-weight: 600;
  text-decoration: underline;
`;

const RoomDescription = styled.p`
  text-align: left;
  padding: 10px;
  color: ${colors.secondaryText};
`;







