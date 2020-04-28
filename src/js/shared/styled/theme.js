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
  
  primary: '#560319',
  secondary: '#30292b',
  primaryText: '#ee0845',
  secondaryText: '#fee3ea',
  complementary1: '#034356',
  complementary2: '#035617',
  complementaryDark1: '#02303d',
  complementaryDark2: '#a0062e',
  dark: '#1d0108',
  tan: '#dcd4c8',
};

export const colors = {
  ...baseColors,

  // health: baseColors.bred,
  health: baseColors.primaryText,
  // health: baseColors.complementaryDark2,
  healthDark: baseColors.primary,
  mana: baseColors.bcyan,
  manaDark: baseColors.cyan,
  stamina: baseColors.byellow,
  staminaDark: baseColors.yellow,
  exp: baseColors.green,

};