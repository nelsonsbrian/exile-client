import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../components/styled/theme';

export default function SummonButtons({ setSummonLevel, level }) {

  return (
    <ButtonContainer>
      <p> Summon Level:</p>

      <Button level={level} setLevel='OFF' onClick={() => setSummonLevel('OFF')}>Off</Button>
      <Button level={level} setLevel='LPK' onClick={() => setSummonLevel('LPK')}>Lpk</Button>
      <Button level={level} setLevel='NPK' onClick={() => setSummonLevel('NPK')}>Npk</Button>
      <Button level={level} setLevel='CPK' onClick={() => setSummonLevel('CPK')}>Cpk</Button>
    </ButtonContainer>
  )
}


const ButtonContainer = styled.div`
  /* position: relative;
  right: 0px;
  top: 0; */
  height: 60px;
  margin: 0;
  font-variant: small-caps;
  max-width: 250px;

  display: flex;
  flex-wrap: wrap;

  height: max-content;

  p{
    width: 100%;
    font-size: 22px;
  }

`;

const Button = styled.div`
  width: 52px;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 0 5px;
  background-color: ${({ level, setLevel }) => level === setLevel ? colors.bgreen : colors.primary};
  color: ${({ level, setLevel }) => level === setLevel ? colors.primary : colors.secondaryText};
  border:  2px solid  ${({ level, setLevel }) => level === setLevel ? colors.primary : colors.secondaryText};
  border-radius:  0.12em;
  text-decoration:  none;
  text-align:  center;
  transition: all 0.2s;

  :hover {
    color: ${colors.primary};
    background-color:${colors.secondaryText};
    border-color: ${colors.primary};
  }
`;