import React from 'react'
import FontButtons from './components/FontButtons';
import styled from 'styled-components';
import { colors } from '../../components/styled/theme';
import Modal, { ModalContent } from '../../components/styled/Modal';
import Switch from "react-switch";
import SummonButtons from './components/SummonButtons';

export default function SettingsPanel({ settings, setFontSize, togglePlayerSetting, setSummonLevel }) {
  const { fontSize } = settings.account;
  const { playerToggle, playerOther } = settings;
  return (
    <ModalContentStyle>
      <SettingsContainer >

        {Object.entries(playerToggle).map(([settingKey, settingValue]) => (
          <SwitchContainer key={settingKey}>

            <Switch
              checked={settingValue || false}
              onChange={() => togglePlayerSetting(settingKey)}
              onColor={colors.green}
              offColor={colors.red}
              onHandleColor={colors.bgreen}
              offHandleColor={colors.bred}
              // handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className={`react-switch switch-${settingValue}`}
              id={settingKey}
            />
            {/* <span>{settingKey}</span> */}
            <SettingLabel htmlFor={settingKey}>
              {settingKey}
            </SettingLabel>
          </SwitchContainer>
        ))}

        <FontButtons fontSize={fontSize} setFontSize={setFontSize} />

        <SummonButtons setSummonLevel={setSummonLevel} level={playerOther.summonMsg} />

      </SettingsContainer>
    </ModalContentStyle>
  )
}


const ModalContentStyle = styled(ModalContent)`
  width: 70vw;
  height: unset;
	padding: 25px;

`;

const SettingsContainer = styled.div`
  min-height: 100%;
  width: 100%;
  height: inherit;
  height: 50vh;
  overflow-y: scroll;

  padding: 25px 15px;
  color: ${colors.secondaryText};
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-shadow: inset 0px 0px 10px 5px ${colors.dark};

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* justify-content: flex-start; */
  align-content: flex-start;
  align-items: flex-start;


`;

const SwitchContainer = styled.div`
  max-width: 250px;
  display: flex;
  justify-content: center;
  height: 30px;
`;

const SettingLabel = styled.label`
  font-variant: small-caps;
  margin-left: 15px;
  margin-right: 15px;
  transform: translateY(-20%);
  display: inline-block;
  :hover {
    cursor: pointer;
  }
  span{ 
  }

`;