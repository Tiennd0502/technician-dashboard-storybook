import { SORT_TYPE } from '@/lib/interfaces';
import { generateQuery } from '../query';

describe('Generate Query', () => {
  test('should return query string with sortBy and order', () => {
    const prarams = {
      sortBy: 'name',
      order: SORT_TYPE.Asc,
    };
    const result = generateQuery(prarams);

    expect(result).toEqual('?sortBy=name&order=asc');
  });

  test('should return query string with filter name, sortBy and order', () => {
    const prarams = {
      name: 'product',
      sortBy: 'name',
      order: SORT_TYPE.Asc,
    };
    const result = generateQuery(prarams);

    expect(result).toEqual('?name=product&sortBy=name&order=asc');
  });
});
