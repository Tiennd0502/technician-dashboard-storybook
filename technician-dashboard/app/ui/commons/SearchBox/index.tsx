'use client';

import { memo, useState, useCallback, ChangeEvent, KeyboardEvent } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { removeSpaces } from '@/lib/utils';

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = useCallback(() => onSearch(keyword || ''), [keyword, onSearch]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setKeyword(removeSpaces(event?.target.value || '')),
    [],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSearch(keyword);
      }
    },
    [keyword, onSearch],
  );

  return (
    <InputGroup>
      <Input
        placeholder='Enter keyword...'
        value={keyword}
        onChange={handleChange}
        onBlur={handleSearch}
        fontSize='sm'
        onKeyDown={handleKeyDown}
      />
      <InputRightElement cursor='pointer' data-testid='search-icon'>
        <SearchIcon onClick={handleSearch} />
      </InputRightElement>
    </InputGroup>
  );
};

export default memo(SearchBox);
