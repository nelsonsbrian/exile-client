export default (props, payload) => {
  payload = JSON.parse(payload);
  const { group, data } = payload;
  switch (group.toUpperCase()) {
    case `ATTRIBUTES`:
      return props.recieveAttributes(data);
    case 'METADATA':
      return props.receiveMetadata(data);
    case 'MAP':
      return props.receiveMap(data);
    case 'EFFECTS':
      return props.receiveEffects(data);
    case 'SETTINGS':
      return props.receiveSettings(data);
    case 'COMBAT':
      return props.receiveCombat(data);
    case 'GROUP':
      return props.receiveGroup(data);
    case 'EQUIPMENT':
      return props.receiveEquipment(data);
    case 'QUESTS':
      return props.receiveQuests(data);
    case 'CHANNELS':
      return props.receiveChannels(data);
    case 'CHANNEL_UPDATE':
      return props.receiveChannelUpdate(data);
    case 'ACTIONBAR':
      return props.receiveActionBar(data);
  }
}