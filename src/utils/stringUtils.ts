/**
 * Converts a value from pixels (px) to em units.
 *
 * The conversion is done by dividing the pixel value by the font size (default is 16).
 *
 * @param px - The pixel value to convert.
 * @param base - The base font size used for conversion (default is 16).
 * @returns The equivalent value in em units as string.
 */

export const pxToEm = (px: number, base = 16): string => `${px / base}em`

/**
 * Truncates the text if it exceeds the character limit.
 * Adds '..' at the end of text if it has more than 180 characters.
 *
 * @param text - The text to be checked.
 * @param characterLimit - The maximum number of characters allowed.before truncating.
 * @returns The original text or truncated text with '...'.
 */

export const textSplit = (text: string, characterLimit: number): string => {
  if (text.length > characterLimit) {
    return text + ' ...'
  }

  return text
}
