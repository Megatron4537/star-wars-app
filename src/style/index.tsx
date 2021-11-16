const Colors = {
  darkBlack: 'rgb(45,45,45)',
  whiteCrema: 'rgb(239,240,235)',
  darkRed: 'rgb(74,34,34)',
  chocolate: 'rgb(79,61,61)',
  denim: 'rgb(86,105,135)',
  powderBlue: 'rgb(139,162,176)',
  blueR2: 'rgb(17,63,96)',
  redHeart: 'rgb(173,38,45)',
  coral: 'rgb(203,99,83)',
  trekTan: 'rgb(209,174,155)',
};

const DarkTheme = {
  dark: true,
  colors: {
    primary: Colors.whiteCrema,
    background: Colors.darkBlack,
    card: Colors.chocolate,
    text: Colors.whiteCrema,
    border: Colors.trekTan,
    notification: Colors.trekTan,
  },
};

const LightTheme = {
  dark: false,
  colors: {
    primary: Colors.darkBlack,
    background: Colors.whiteCrema,
    card: Colors.trekTan,
    text: Colors.darkBlack,
    border: Colors.trekTan,
    notification: Colors.trekTan,
  },
};

export {DarkTheme, LightTheme, Colors};
