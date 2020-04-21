import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { colors } from './styled/theme';
import { sendActionBar, sendMessage } from '../actions';
import { truncateWithEnding } from '../utils/StringUtil';
import { sprintf } from 'sprintf-js';

function ActionBar({ actionBar, aliases, sendMessage, sendActionBar, metadata }) {

  const [editMode, setEditMode] = useState(false);
  const [editBar, setEditBar] = useState(null)

  const handleActionBarClick = (e, key, barItem) => {
    if (editMode) {
      setEditBar(key);
    } else {
      if (barItem) {
        sendMessage(barItem);
      }
    }
  }

  const handleActionBarSelection = (e) => {
    e.preventDefault();
    const newAlias = e.target.value === 'null' ? null : e.target.value;
    sendActionBar({ payload: { key: editBar, aliasKeyword: newAlias }, player: metadata.name });

    setEditBar(null);
  }

  const handleEditMode = (e) => {
    if (editMode) {
      setEditBar(null);
    } else {
      sendMessage('alias');
    }
    setEditMode((old) => !old)
  }

  return (
    <PaneContainer editMode={editMode} >
      {Object.entries(actionBar).map(([key, barItem]) => (
        <BarItem
          key={key}
          onClick={(e) => handleActionBarClick(e, key, barItem)}
          editMode={editMode}
          editBar={key}
          barItem={barItem}
        >
          <p>{barItem ? barItem : ''}</p>
        </BarItem>
      ))}
      <EditActionBar onClick={handleEditMode} editMode={editMode} />

      {editMode &&
        <EditMenu
          editBar={editBar}
          currentAlias={actionBar[editBar]}
          aliases={aliases}
          handleActionBarSelection={handleActionBarSelection}
          handleEditMode={handleEditMode}
        />
      }
    </PaneContainer >
  )
}

const mapStateToProps = ({ connection, data }) => {
  return {
    aliases: data.actionBar.aliases,
    actionBar: data.actionBar.actionBar,
    metadata: data.metadata,
  }
};

export default connect(mapStateToProps, { sendActionBar, sendMessage })(ActionBar);

const PaneContainer = styled.div`
  width: 100%;
  height: 56px;
  background: ${({ editMode }) => editMode ? colors.bred : 'black'};
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const barItemHover = `
  &:hover p {
    color: ${colors.bcyan};
  }

  &:hover{
    border-color: ${colors.byellow};
    background: ${colors.primary};
    cursor: pointer;
    border-width: 3px;
    padding: 0px;
  }
`;

const BarItem = styled.div`
  height: 50px;
  width: 50px;
  margin: 3px 3px 3px 3px;
  border: 1px ${colors.yellow} solid;
  border-radius: 3px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3px;
  font-size: 14px;
  position: relative;

  ${({ barItem, editMode }) => barItem || editMode ? barItemHover : null};

  &::after{
    content: '${({ editMode, editBar }) => editMode && editBar ? editBar.toString() : ''}';
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    text-align: right;
    font-size: 12px;
    font-weight: 600;
    padding: 3px;
    color: ${colors.byellow}
  }
`;

const EditActionBar = styled.div`
  height: 50px;
  width: 15px;
  margin: 3px 3px 3px 3px;
  position: relative;
  border: 1px ${colors.yellow} solid;
  border-radius: 3px;
  background: black;

  ${barItemHover}

  &::after{
    content: '${({ editMode }) => editMode ? 'Stop' : 'Edit'}';
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 10px;
    font-weight: 600;
  }

`;

function EditMenu({ aliases, handleActionBarSelection, currentAlias, handleEditMode, editBar }) {

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.defaultPrevented) { return; }
    if (e.key === 'Esc' || e.key === 'Escape') {
      handleEditMode();
    }
  }

  const getSelectionString = (editBar) => {
    const selection = <SelectionNumber>#{editBar}</SelectionNumber>
    return editBar ?
      <>Change action bar {selection} to</> :
      <>Select a action bar to assign an alias</>;
  }

  const maxKeywordLen = Math.min(aliases.reduce((acc, [keyword,]) => Math.max(keyword.length, acc), 4), 10)

  return (
    <EditMenuContainer>
      <CurrentSelection>{getSelectionString(editBar)}</CurrentSelection>
      {editBar &&
        <EditMenuSelect value={currentAlias || ''} onChange={(e) => handleActionBarSelection(e)}>
          <EditMenuOption value="" disabled>Choose an alias to bind to this</EditMenuOption>
          <EditMenuOption value={'null'}>&lt;Clear Alias&gt;</EditMenuOption>
          {aliases.map(([keyword, action]) => (
            <EditMenuOption key={keyword} value={keyword}>
              {`${keyword} `.padEnd(maxKeywordLen, '.')} | {truncateWithEnding(action, 80)}
            </EditMenuOption>
          ))}
        </EditMenuSelect>
      }
    </EditMenuContainer>
  );
}


const EditMenuContainer = styled.div`
  width: 100%;
  height: 95px;
  position: absolute;
  left: 0; top: 0;
  background: ${ colors.complementaryDark2};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EditMenuSelect = styled.select`
  height: 40px;
  width: 300px;
  outline-color: yellow;
  background: black;
  font-family: monospace;

  &:hover,
  &:focus,
  &:active {
    background-color: #000000 !important; /* for IE */
    color: ${colors.byellow} !important;
    border-color: ${colors.byellow};
    outline: none;
  }

  option:checked {
    background: linear-gradient(#d6d6d6, #d6d6d6);
    background-color: ${colors.primaryText} !important; /* for IE */
    color: ${colors.black} !important;
  }
`;

const EditMenuOption = styled.option`
  color: ${colors.byellow};
  background: ${ colors.secondary};
  font-family: monospace;
`;

const CurrentSelection = styled.p`
  display: inline-block;
  color: ${colors.primaryText};
  background: ${colors.black};
  width: 100%;
  font-size: 26px;
  font-weight: 600;
  margin: 0;
  text-align: center;
  padding: 5px;
  height: 40px;

  border-top: 3px ${colors.primaryText} solid;
  border-bottom: 3px black solid;
`;

const SelectionNumber = styled.span`
  color: ${colors.byellow};
`;