import React from 'react'
import styled, { css } from 'styled-components'
import Map from './Map'
import { colors } from './styled/theme';
import { connect } from 'react-redux';

function QuestsPane({ quests }) {
  const hasQuests = quests.length;
  return (
    <ContentContainer>
      {hasQuests ?
        quests.map(([id, quest], i) => (
          <QuestContainer key={id}>
            <QuestTitle
              incomplete={quest.state.goals.some(({ progress }) => !progress.complete)}
            >
              {`(${(i + 1)}) `} {quest.state.config.title}</QuestTitle>
            {/* {quest.state.status} {quest.state.timer} {quest.state.started} */}

            {/* {console.log(quest)} */}
            <QuestProgress>
              {quest.state.goals
                .filter(({ progress }) => !progress.complete)
                .map(({ state, progress, config }) => (
                  <QuestGoal key={config.title}>
                    {progress.display}
                    {/* - {state.count} / {progress.max} {config.title} */}
                    {/* Complete: {progress.complete.toString()} */}
                  </QuestGoal>
                ))}

            </QuestProgress>
          </QuestContainer>
        ))
        : 'No Active Quests' }
    </ContentContainer>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    quests: data.quests,
  }
}

export default connect(mapStateToProps, null)(QuestsPane);

const ContentContainer = styled.div`
  /* overflow-y: scroll;
  height: 400px; */
`;

const QuestContainer = styled.div`

`;

const QuestTitle = styled.div`
  color: ${({ incomplete }) => incomplete ? colors.bcyan : colors.bgreen};
`;

const QuestProgress = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const QuestGoal = styled.div`
  color: ${colors.byellow};
  width: 100%;
  padding-left: 15px;
`;

