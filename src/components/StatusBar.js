import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { colors } from './styled/theme';
import { SVGLink, SVGIcon, SVGContainer } from './MenuBar';

function StatusBar({ effects, map, metadata, settings }) {

  return (
    <MenuContainer>
      <Mail mail={metadata.mail} />
      <Summon summon={settings.player.other} />
      <Gold gold={metadata.currencies.gold} />
    </MenuContainer>
  );
}

const mapStateToProps = ({ connection, data, settings }) => {
  return {
    effects: data.effects,
    map: data.map.large,
    metadata: data.metadata,
    settings,
  }
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);

const MenuContainer = styled.div`
  /* height: 50px; */
  width: 310px;

  display: flex;
  align-items: center;
  justify-items: center;
  align-items: center;
  align-content: center; 
  border: solid 3px black;
  background: ${colors.tan};
  /* background: ${colors.secondaryText}; */
  border-radius: 4px;

`;


const Mail = ({ mail }) => {
  return (
    <SVGContainer noButton>
      <SVGLink>
        <MailIcon viewBox="0 0 96 96" mail={mail} noButton>
          <path d="M80,12H16C9.373,12,4,17.373,4,24v48c0,6.627,5.373,12,12,12h64c6.627,0,12-5.373,12-12V24C92,17.373,86.627,12,80,12z   M80,20c0.459,0,0.893,0.093,1.303,0.235L48,46.877L14.697,20.235C15.108,20.093,15.541,20,16,20H80z M80,76H16c-2.21,0-4-1.79-4-4  V28.323l33.501,26.8C46.231,55.708,47.116,56,48,56s1.769-0.292,2.499-0.877L84,28.323V72C84,74.21,82.21,76,80,76z" />
        </MailIcon>
      </SVGLink>
    </SVGContainer>
  );
}


const MailIcon = styled(SVGIcon)`
  fill: ${({ mail }) => mail ? colors.primaryText : colors.yellow};
`;


const Summon = ({ summon }) => {
  return (
    <SVGContainer noButton>
      {/* <SVGLink> */}
      <SummonMsg summonable={summon.summonable} >
        {summon.summonMsg}
      </SummonMsg>
      {/* </SVGLink> */}
    </SVGContainer>
  );
}

const SummonMsg = styled.span`
  fill: none;
  color: ${({ summonable }) => summonable === 0 || summonable === 1 ? colors.bgreen : summonable === 2 ? colors.byellow : colors.bred};
  display: flex;
  display: inline-block;
  font-size: 16px;
  padding-top: 3px;
  align-items: center;
  justify-items: center;
`;


const Gold = ({ gold }) => {
  return (
    <GoldContainer >
      <GoldMsg  >
        {gold.toLocaleString()}
        <SVGLink>
          <SVGIcon viewBox="0 0 512 512" colorFill={colors.byellow} noButton>
            <path d="M192,332c-78.3,0-142-63.7-142-142S113.7,48,192,48s142,63.7,142,142S270.3,332,192,332Zm0-254A112,112,0,1,0,304,190,112.12,112.12,0,0,0,192,78Z" />
            <path d="M192,279a89,89,0,1,1,89-89A89.05,89.05,0,0,1,192,279ZM192,131a59,59,0,1,0,59,59A59,59,0,0,0,192,131Z" />
            <path d="M308.63,448.63A142,142,0,0,1,167.06,317.77,15,15,0,0,1,197,315.45,112,112,0,1,0,317.45,195a15,15,0,1,1,2.32-29.9A142,142,0,0,1,450.63,306.63C450.63,384.93,386.93,448.63,308.63,448.63Z" />
            <path d="M308.63,395.6a89,89,0,0,1-88.88-85.38,15,15,0,0,1,30-1.18A59,59,0,1,0,311,247.73a15,15,0,0,1,1.18-30,89,89,0,0,1-3.59,177.85Z" />
          </SVGIcon>
        </SVGLink>
      </GoldMsg>
    </GoldContainer>
  );
}

const GoldContainer = styled(SVGContainer)`
  width: 140px;
`;

const GoldMsg = styled.div`
  fill: none;
  /* color: ${colors.byellow}; */
  color: ${colors.secondaryText};
  width: 100%;
  display: flex;
  /* text-align: right; */
  /* font-size: 16px; */
  font-size: 1.0em;
  padding: 0px 3px;
  align-items: center;
  justify-content: space-between;
`;