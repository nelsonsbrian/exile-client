import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { colors } from '../../shared/styled/theme';
import { sendMessage, sendActionBar } from '../../connection/connectionActions';
import { truncateWithEnding } from '../../utils/StringUtil';
import { sprintf } from 'sprintf-js';



export default function EditMenu({ aliases, handleActionBarSelection, currentAlias, handleEditMode, editBar }) {

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