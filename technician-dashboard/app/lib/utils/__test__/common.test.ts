import { removeSpaces } from '../common';

describe('removeSpaces', () => {
  const text = '  this   is text  ';
  test('should return query string with isTrimmed false', () => {
    const result = removeSpaces(text);

    expect(result).toEqual(' this is text ');
  });

  test('should return query string with isTrimmed true', () => {
    const result = removeSpaces(text, true);

    expect(result).toEqual('this is text');
  });
});
