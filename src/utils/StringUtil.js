

export function cap(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
}

export function channelAbbreviation(channel) {
  if (!channel) { return '*' }
  const abbvs = {
    "say": 'S',
    "tell": 'T',
    "shout": 'S',
    "ftell": 'F',
    "racial": 'R',
    "auction": 'A',
    "gossip": 'G',
    "music": 'M',
    "questtalk": 'Q',
    "wiznet": 'W',
    "pray": 'P',
    "clantalk": 'C',
    "showform": 'F',
  }
  return abbvs[channel] || '*';
}

export function truncateWithEnding(text, max, ending = '...') {
  return text.length > max ? text.substr(0, max - ending.length) + ending : text;
};
