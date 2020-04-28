import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../shared/styled/theme';
import EditMenu from './components/EditMenu';

export default ({ actionBar, aliases, sendMessage, sendActionBar }) => {

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
    sendActionBar({ payload: { key: editBar, aliasKeyword: newAlias } });

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
