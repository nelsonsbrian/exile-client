export default (props, payload) => {
  payload = JSON.parse(payload);
  let { type, subtype, data } = payload;
  switch (type.toUpperCase()) {
    case `ATTRIBUTES`:
      return props.recieveAttributes(data);
    case 'METADATA':
      return props.receiveMetadata(data);
    case 'MAP':
      return props.receiveMap(data);
    case 'EFFECTS':
      handleEffects({ props, type, subtype, data });
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

function handleEffects({ props, type, subtype, data }) {

  switch (subtype.toUpperCase()) {

    case 'ALL':
      return props.receiveEffects(data);

    case 'UPDATE':
      return props.updateEffect(data);

    case 'REMOVE':
      return props.removeEffect(data);

    case 'ADD':
      return props.addEffect(data);

    default:
      throw new RangeError(`The socket message of '${type}' - '${subtype}' did not get caught.`);
  }
}