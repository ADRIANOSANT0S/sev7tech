export const colors = {
  navy: '#002D72',
  twilightBlue: '#021D40',
  goldAccent: '#F0BA00',
  deepOcean: '#003366',
  pureWhite: '#FFFFFF',
  charcoal: '#333333',
  skyColor: '#6699CC',
  blueRgba: 'rgba(102, 153, 204, 0.8)',
  blackRgba: '#fff'
}

export const theme = {
  light: {
    primary: colors.pureWhite,
    secondary: colors.twilightBlue,

    //Background
    bgBody: colors.pureWhite,
    bgPreHeader: colors.deepOcean,
    bgHeader: colors.twilightBlue,

    // Button Theme Background
    buttonTeme: colors.deepOcean,

    // Color text
    primaryText: colors.twilightBlue,
    secondaryText: colors.pureWhite,

    //box-shadow
    shadow: colors.blackRgba,
    button: colors.goldAccent,
    buttonText: colors.deepOcean,
    border: colors.charcoal,
    lightBlue: colors.skyColor
  },
  dark: {
    primary: colors.twilightBlue,
    secondary: colors.pureWhite,

    // Background
    bgBody: colors.deepOcean,
    bgPreHeader: colors.twilightBlue,
    bgHeader: colors.navy,

    // Button Theme Background
    buttonTeme: colors.twilightBlue,

    // Color text
    primaryText: colors.twilightBlue,
    secondaryText: colors.pureWhite,

    //box-shadow
    shadow: colors.blueRgba,

    button: colors.goldAccent,
    buttonText: colors.deepOcean,
    border: colors.charcoal,
    lightBlue: colors.skyColor
  }
}
