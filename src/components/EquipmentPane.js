import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { colors } from './styled/theme';
import ReactTooltip from 'react-tooltip';
import { sendLastItemIdentify } from '../actions';
import { Sword, Ring, Chest, Lantern, Necklace, Belt, Hands, Shield, Pants, Helmet, Boot, Wrist, Idol, Hold, Arms, About, Axe, Dagger, Bow, Crossbow, Staff } from './svgs/Equipment';
import Convert from 'ansi-to-html';
const convertAnsi = new Convert({ newline: true });

function EquipmentPane({ equipment }) {
  return (
    <GroupContainer >
      <GroupContent>

        <PlaceHolderContainer />
        <PlaceHolderContainer />
        <Equipment slot='head' item={equipment['head']} />
        <PlaceHolderContainer />
        <PlaceHolderContainer />

        <PlaceHolderContainer />
        <Equipment slot='necklace 1' item={equipment['necklace 1']} />
        <Equipment slot='about' item={equipment['about']} />
        <Equipment slot='necklace 2' item={equipment['necklace 2']} />
        <PlaceHolderContainer />

        <PlaceHolderContainer />
        <Equipment slot='arms' item={equipment['arms']} />
        <Equipment slot='chest' item={equipment['chest']} />
        <Equipment slot='hands' item={equipment['hands']} />
        <PlaceHolderContainer />

        <Equipment slot='left wrist' item={equipment['left wrist']} />
        <PlaceHolderContainer />
        <Equipment slot='waist' item={equipment['waist']} />
        <PlaceHolderContainer />
        <Equipment slot='left finger' item={equipment['left finger']} />

        <Equipment slot='right wrist' item={equipment['right wrist']} />
        <PlaceHolderContainer />
        <Equipment slot='legs' item={equipment['legs']} />
        <PlaceHolderContainer />
        <Equipment slot='right finger' item={equipment['right finger']} />


        <PlaceHolderContainer />
        <PlaceHolderContainer />
        <Equipment slot='feet' item={equipment['feet']} />
        <PlaceHolderContainer />
        <PlaceHolderContainer />

        <Equipment slot='light' item={equipment['light']} />
        <Equipment slot='primary weapon' item={equipment['primary weapon']} />
        <Equipment slot='idol' item={equipment['idol']} />
        <Equipment slot='secondary weapon' item={equipment['secondary weapon']} />
        <Equipment slot='held' item={equipment['held']} />


      </GroupContent>
    </GroupContainer >
  )
}

const mapStateToProps = ({ data }) => {
  return {
    equipment: data.equipment,
  }

}

export default connect(mapStateToProps, null)(EquipmentPane);

const Equipment = connect(mapStateToProps, { sendLastItemIdentify })(({ slot, item, sendLastItemIdentify }) => {
  let Icon;
  switch (slot) {
    case 'light': Icon = Lantern; break;
    case 'left finger':
    case 'right finger':
      Icon = Ring;
      break;
    case 'necklace 1':
    case 'necklace 2':
      Icon = Necklace;
      break;
    case 'chest': Icon = Chest; break;
    case 'head': Icon = Helmet; break;
    case 'legs': Icon = Pants; break;
    case 'feet': Icon = Boot; break;
    case 'hands': Icon = Hands; break;
    case 'arms': Icon = Arms; break;
    case 'about': Icon = About; break;
    case 'waist': Icon = Belt; break;
    case 'left wrist':
    case 'right wrist':
      Icon = Wrist;
      break;
    case 'idol': Icon = Idol; break;
    case 'primary weapon':
    case 'secondary weapon':
      if (!item) {
        Icon = Sword;
        break;
      }
      if (item.isPiercing) {
        Icon = Dagger;
      } else if (item.type === 'CROSSBOW') {
        Icon = Crossbow;
      } else if (item.type === 'BOW') {
        Icon = Bow;
      } else if (item.twoHanded && item.attackType !== 'SLASH') {
        Icon = Staff;
      } else {
        Icon = Sword;
      }
      break;
    case 'held':
      if (!item) {
        Icon = Hold;
        break;
      }
      if (item.isShield) {
        Icon = Shield;
      } else {
        Icon = Hold;
      }
      break;
    default: Icon = null;
  }

  const handleLastItem = (item) => {
    if (item && item.uuid) {
      sendLastItemIdentify({ payload: item.uuid });
    }
  }

  let colorFill = item ? colors.bgreen : colors.primaryText;

  return (
    <EquipmentContainer>
      {Icon &&
        <ToolTipContainer
          data-tip
          data-for={`identify${slot}`}
          onClick={() => handleLastItem(item)}
        >
          <Icon colorFill={colorFill} />
          <ReactTooltip
            id={`identify${slot}`}
            place='right'
            effect='solid'
            border={true}
            background-color='yellow'
            className="identify-tooltip"
            getContent={() => <IdentifyToolTip item={item} />}
          />
        </ToolTipContainer>
      }
    </EquipmentContainer>
  )
});

const GroupContainer = styled.div`
  width: 100%;
  min-width: 100%;
  padding: 15px 15px 0 15px;
  height: 435px;
  color: ${colors.secondaryText};
`;

const GroupContent = styled.div`
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  justify-items: center;
  grid-gap: 5px;
`;

const EquipmentContainer = styled.div`
  border: 2px yellow solid;
`;

const PlaceHolderContainer = styled(EquipmentContainer)`
  border: none;

`;



const IdentifyToolTip = ({ item }) => {
  return (item && item.identify ?
    <IdentifyContainer dangerouslySetInnerHTML={{ __html: convertAnsi.toHtml(item.identify) }} /> :
    < IdentifyContainer >No item equipped</IdentifyContainer >
  )
}

const IdentifyContainer = styled.div`
  padding: 15px;
  font-size: 20px;
  /* background: orange; */
`;

const ToolTipContainer = styled.div`
  cursor: pointer;

  .identify-tooltip{
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    color: ${colors.tan};
    opacity: .9 !important;
    background: ${colors.black} !important;
    border: ${colors.tan} 3px solid !important;
  }
`;