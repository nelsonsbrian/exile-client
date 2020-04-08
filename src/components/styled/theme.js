const baseColors = {
  bmagenta: '#ff55ff',
  bgreen: '#55ff55',
  bblue: '#5555ff',
  byellow: '#ffff55',
  bred: '#ff5555',
  bcyan: '#55ffff',
  bwhite: '#ffffff',
  bblack: '#555555',

  magenta: '#aa00aa',
  green: '#00aa00',
  blue: '#0000aa',
  yellow: '#aaaa00',
  red: '#aa0000',
  cyan: '#00aaaa',
  white: '#aaaaaa',
  black: '#000000',

  bgmagenta: '#aa00aa',
  bggreen: '#00aa00',
  bgblue: '#0000aa',
  bgyellow: '#aaaa00',
  bgred: '#aa0000',
  bgcyan: '#00aaaa',
  bgwhite: '#aaaaaa',
  bgblack: '#000000',
};

export const colors = {
  ...baseColors,

  health: baseColors.bred,
  mana: baseColors.bcyan,
  stamina: baseColors.byellow,
  exp: baseColors.green,

  primary: '#560319',
  secondary: '#30292b',
  primaryText: '#ee0845',
  secondaryText: '#fee3ea',
  complementary1: '#034356',
  complementary2: '#035617',
  dark: '#1d0108',
  tan: '#d2b48c',
};