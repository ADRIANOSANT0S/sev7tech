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
    mode: 'light',
    primary: colors.pureWhite,
    secondary: colors.twilightBlue,

    //Background
    bgBody: colors.pureWhite,
    bgPreHeader: colors.deepOcean,
    bgHeader: colors.twilightBlue,
    bgFooter: colors.deepOcean,
    bgCardService: colors.twilightBlue,
    bgSvg: colors.deepOcean,
    bgCardInfos: colors.navy,

    // Button Theme Background
    buttonTheme: colors.deepOcean,

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
    mode: 'dark',
    primary: colors.twilightBlue,
    secondary: colors.pureWhite,

    // Background
    bgBody: colors.deepOcean,
    bgPreHeader: colors.navy,
    bgHeader: colors.twilightBlue,
    bgFooter: colors.navy,
    bgCardService: colors.twilightBlue,
    bgSvg: colors.deepOcean,
    bgCardInfos: colors.twilightBlue,

    // Button Theme Background
    buttonTheme: colors.deepOcean,

    // Color text
    primaryText: colors.pureWhite,
    secondaryText: colors.twilightBlue,

    //box-shadow
    shadow: colors.blueRgba,

    button: colors.goldAccent,
    buttonText: colors.deepOcean,
    border: colors.charcoal,
    lightBlue: colors.skyColor
  }
}
