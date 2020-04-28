import React from 'react';
import styled from 'styled-components';
import Modal, { ModalContent } from '../../shared/components/Modal';
import { colors } from '../../shared/styled/theme';
import { SVGLink, SVGIcon, SVGContainer } from './MenuBar';
import pluralize from 'pluralize';

export default function WhoModal({ metadata }) {
  return (
    <Modal
      render={() => <WhoPanel metadata={metadata} />}
      title='Players Online'
    >
      {(isOpen, setIsOpen) => (
        <SVGContainer onClick={() => setIsOpen(true)}>
          <SVGLink >
            <SVGIcon viewBox="0 0 128 128">
              <polygon points="91,45 83,45 83,73 73,73 73,119 61,119 61,73 51,73 51,45 43,45 43,81 53,81 53,127 81,127 81,81 91,81  " />
              <path d="M53,15c0,7.7,6.3,14,14,14s14-6.3,14-14S74.7,1,67,1S53,7.3,53,15z M73,15c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6   S73,11.7,73,15z" />
              <path d="M19,25c0,7.7,6.3,14,14,14s14-6.3,14-14s-6.3-14-14-14S19,17.3,19,25z M39,25c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6   S39,21.7,39,25z" />
              <polygon points="113,83 103,83 103,119 87,119 87,127 111,127 111,91 121,91 121,51 113,51  " />
              <path d="M87,25c0,7.7,6.3,14,14,14s14-6.3,14-14s-6.3-14-14-14S87,17.3,87,25z M101,19c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6   S97.7,19,101,19z" />
              <polygon points="31,83 21,83 21,51 13,51 13,91 23,91 23,127 47,127 47,119 31,119  " />
            </SVGIcon>
          </SVGLink>
        </SVGContainer>
      )}
    </Modal>
  )
}


const WhoPanel = ({ metadata }) => {
  const count = metadata.wholist.list.length;
  return (
    <ModalContentStyle>
      <WhoContainer >
        <Count>{count} {pluralize('player', count)} online</Count>
        <Player header>
          <Level>
            Level
          </Level>
          <PClass>
            Class
          </PClass>
          <PRace>
            Race
          </PRace>
          <Name>
            Name
          </Name>
        </Player>
        {metadata.wholist.list.map(player => {
          return (
            <Player key={player.name}>
              <Level>
                {player.level}
              </Level>
              <PClass>
                {player.class}
              </PClass>
              <PRace>
                {player.race}
              </PRace>
              <Name>
                {player.name}
              </Name>
            </Player>
          )
        })}
      </WhoContainer>
    </ModalContentStyle>
  )
}

const ModalContentStyle = styled(ModalContent)`
  height: 80vh;
  width: 30vw;
	padding: 25px;
  `;

const WhoContainer = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 25px 15px;
  /* border: 10px solid black; */
  overflow-y: scroll;
  /* margin: 20px; */
	/* background-color: rgba(210,180,140, .9); */
  color: ${colors.secondaryText};
  background: rgba(0, 0, 0, 0.6);
  /* padding: 20px; */
  border-radius: 4px;
  box-shadow: inset 0px 0px 10px 5px ${colors.dark};
`;

const Player = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 100px 100px 100px auto;
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  
  text-decoration: ${({ header }) => header ? 'underline' : 'none'};
  font-size: ${({ header }) => header ? '28px' : '22px'};
  font-weight: ${({ header }) => header ? '600' : '400'};
  color: ${({ header }) => header ? colors.primaryText : colors.secondaryText};
  /* text-decoration: ${({ header }) => header ? 'underline' : 'none'}; */

  /* border-top: solid 3px black; */
  
`;

const GridChild = styled.div`
  /* border-left: solid 2px black; */
  padding: 2px 10px;
`;

const Level = styled(GridChild)`

`;

const Name = styled(GridChild)`
  text-align: left; 

`;

const PClass = styled(GridChild)`
  
`;

const PRace = styled(GridChild)`
  
`;


const Count = styled(GridChild)`
  /* margin-top: 25px; */
  text-align: right;   
`;



