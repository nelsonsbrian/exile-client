import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { colors } from './styled/theme';
import { cap } from '..//utils/StringUtil';
import bullet from '../img/bullet.jpg';

function PlayerScore({ attributes, metadata, imgPanel, imgBorder }) {

  const comma = (str) => str.toLocaleString();
  const {
    name, race, playerClass, level, experienceTNL, position, maxLevel } = metadata;

  const { health, mana, stamina, critical, speed, hitroll, damroll, spellHit,
    armor, dodge, parry, spellDeflect, shieldBlock, spell, arcane, elemental, divine,
    strength, intelligence, wisdom, dexterity, constitution
  } = attributes;
  return (
    <ScoreContainer imgPanel={imgPanel} imgBorder={imgBorder}>

      <ScoreSection size={35}>
        <GItem col={3}><ScoreHeader>{name} Lvl {level}</ScoreHeader></GItem>
        <GItem col={3}>{<ScoreHeader>{race} {playerClass}</ScoreHeader>}</GItem>
      </ScoreSection>

      <ScoreSection>
        <GItem col={3} color='health' center>{comma(health.current)} / {comma(health.max)} hps</GItem>
        <GItem color='primaryText' attrTitle>Position:</GItem>
        <GItem col={2} center>{cap(position)}</GItem>

        <GItem col={3} color='mana' center>{comma(mana.current)} / {comma(mana.max)} mana</GItem>
        {level >= maxLevel ? <GItem col={3}></GItem> :
          <>
            <GItem color='exp' right>ExpTNL:</GItem>
            <GItem col={2} center color='exp'>{comma(experienceTNL)}</GItem>
          </>
        }

        <GItem col={3} color='stamina' center>{comma(stamina.current)} / {comma(stamina.max)} stamina</GItem>
        <GItem col={3}></GItem>
      </ScoreSection>

      <ScoreSection>
        <GItem color='primaryText' attrTitle >Crit:</GItem>
        <GItem center >{comma(critical.current)}</GItem>
        <GItem right >{critical.percent}</GItem>
        <GItem color='primaryText' attrTitle >Armor:</GItem>
        <GItem center >{comma(armor.current)}</GItem>
        <GItem right >{armor.percent}</GItem>

        <GItem color='primaryText' attrTitle >Hitroll:</GItem>
        <GItem center >{comma(hitroll.current)}</GItem>
        <GItem right >{hitroll.percent}</GItem>
        <GItem color='primaryText' attrTitle >Dodge:</GItem>
        <GItem center >{comma(dodge.current)}</GItem>
        <GItem right >{dodge.percent}</GItem>

        <GItem color='primaryText' attrTitle >Damroll:</GItem>
        <GItem center >{comma(damroll.current)}</GItem>
        <GItem col={1}></GItem>
        <GItem color='primaryText' attrTitle >Parry:</GItem>
        <GItem center >{comma(parry.current)}</GItem>
        <GItem right >{parry.percent}</GItem>

        <GItem color='primaryText' attrTitle >Spell Hit:</GItem>
        <GItem center >{comma(spellHit.current)}</GItem>
        <GItem right >{spellHit.percent}</GItem>
        <GItem color='primaryText' attrTitle >Block:</GItem>
        <GItem center >{comma(shieldBlock.current)}</GItem>
        <GItem right >{shieldBlock.percent}</GItem>

        <GItem color='primaryText' attrTitle >Speed:</GItem>
        <GItem center >{comma(speed.current)}</GItem>
        <GItem right >{speed.percent}</GItem>
        <GItem color='primaryText' attrTitle >Deflect:</GItem>
        <GItem center >{comma(spellDeflect.current)}</GItem>
        <GItem right >{spellDeflect.percent}</GItem>
      </ScoreSection>

      <ScoreSection>
        <GItem color='primaryText' attrTitle >Str:</GItem>
        <GItem center >{Math.min(strength.current, 25)}</GItem>
        <GItem col={1}></GItem>
        <GItem color='primaryText' attrTitle >Spell:</GItem>
        <GItem center >{comma(spell.current)}</GItem>
        <GItem right >{spell.percent}</GItem>

        <GItem color='primaryText' attrTitle >Int:</GItem>
        <GItem center >{Math.min(intelligence.current, 25)}</GItem>
        <GItem col={1}></GItem>
        <GItem color='primaryText' attrTitle >Arcane:</GItem>
        <GItem center >{comma(arcane.current)}</GItem>
        <GItem right >{arcane.percent}</GItem>

        <GItem color='primaryText' attrTitle >Wis:</GItem>
        <GItem center >{Math.min(wisdom.current, 25)}</GItem>
        <GItem col={1}></GItem>
        <GItem color='primaryText' attrTitle >Element:</GItem>
        <GItem center >{comma(elemental.current)}</GItem>
        <GItem right >{elemental.percent}</GItem>

        <GItem color='primaryText' attrTitle >Dex:</GItem>
        <GItem center >{Math.min(dexterity.current, 25)}</GItem>
        <GItem col={1}></GItem>
        <GItem color='primaryText' attrTitle >Divine:</GItem>
        <GItem center >{comma(divine.current)}</GItem>
        <GItem right >{divine.percent}</GItem>

        <GItem color='primaryText' attrTitle >Con:</GItem>
        <GItem center >{Math.min(constitution.current, 25)}</GItem>
        <GItem col={4}></GItem>
      </ScoreSection >

    </ScoreContainer>
  )
}

const mapStateToProps = ({ connection, data }) => {
  return {
    attributes: data.attributes,
    metadata: data.metadata,
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
  }
};

export default connect(mapStateToProps, null)(PlayerScore);

const ScoreContainer = styled.div`
  height: 435px;
  width: 100%;
  position: relative;
`;

const ScoreHeader = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 22px;
`;

const ScoreSection = styled.div`
  margin: 10px 15px;
  display: grid;
  grid-template-columns: 65px 1fr 65px 1fr 1fr 1fr;

  grid-auto-rows: ${({ size }) => size ? `${size}px` : '25px'};

  grid-row-gap: 0px;
  grid-column-gap: 3px;
`;

const GItem = styled.div`
  /* border: 1px solid gray; */

  color: ${({ color }) => colors[color] || 'white'};
  text-decoration: ${({ header }) => header ? 'underline' : 'none'};
  
  justify-self: ${({ attrTitle }) => attrTitle ? 'end' : 'stretch'};
  justify-self: ${({ right }) => right && 'end'};
  justify-self: ${({ center }) => center && 'center'};
  justify-self: ${({ left }) => left && 'start'};

  grid-column: span ${({ col }) => col ? col : 1};
  grid-row: span ${({ row }) => row ? row : 1};
`;