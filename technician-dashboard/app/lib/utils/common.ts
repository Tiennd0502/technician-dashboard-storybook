export const removeSpaces = (text = '', isTrimmed = false) => {
  const result = text.replace(/ +/g, ' ');

  return isTrimmed ? result.trim() : result;
};
