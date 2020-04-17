import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from './styled/theme';
import { connect } from 'react-redux';
import Convert from 'ansi-to-html';
import dateformat from 'dateformat';
import { channelAbbreviation } from '../utils/StringUtil';

const convertAnsi = new Convert({ newline: true });


function ChannelPane({ channels }) {
  const endChannelRef = useRef(null);
  const [showSlider, setShowSlider] = useState(true)


  useEffect(() => {
    if (endChannelRef && endChannelRef.current) {
      endChannelRef.current.scrollTop = endChannelRef.current.scrollHeight;
    }
  }, [channels])


  const handleScroll = () => {
    const { scrollTop, scrollHeight, offsetHeight } = endChannelRef && endChannelRef.current || {};
    (scrollHeight - scrollTop < offsetHeight + 10) ? setShowSlider(false) : setShowSlider(true);
  }

  const allMessages = [];
  Object.entries(channels).forEach(([channel, msgArray]) => msgArray.forEach(message => {
    return (
      allMessages.push({
        channel,
        message: message.message,
        key: message.timestamp,
        timestamp: dateformat(Date.parse(message.timestamp), 'H:MM'),
        sort: Date.parse(message.timestamp)
      }))
  }));
  const sortedMessages = allMessages.sort((a, b) => a.sort - b.sort)
  return (
    <ContentContainer id="channel-end"
      ref={endChannelRef}
      showSlider={showSlider}
      onScroll={() => handleScroll()}
    >
      {sortedMessages.map(({ key, timestamp, message, channel }, i) => (
        <div key={key + i} className={`channel-${channel}`}>
          <span>{`[${timestamp}][${channelAbbreviation(channel)}]`} </span>
          <span dangerouslySetInnerHTML={{ __html: convertAnsi.toHtml(message) }} />
        </div>
      ))}
    </ContentContainer>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    channels: data.channels,
  }
}

export default connect(mapStateToProps, null)(ChannelPane);

const ContentContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
  font-size: 14px;

  &::-webkit-scrollbar {
    display: ${ ({ showSlider }) => showSlider ? `block` : 'none'}; /*Chrome etc */
  }
  -ms-overflow-style: ${ ({ showSlider }) => showSlider ? `block` : 'none'}; /*IE & EDGE*/
`;

