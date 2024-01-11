'use client';

import { memo, useState, useCallback, ChangeEvent, KeyboardEvent } from 'react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { removeSpaces } from '@/lib/utils';

interface SearchBoxProps {
  value?: string;
  onSearch: (value: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = useCallback(() => onSearch(keyword), [keyword, onSearch]);

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

  const handleClearSearchBox = useCallback(() => {
    setKeyword('');
    onSearch('');
  }, [onSearch]);

  return (
    <InputGroup>
      <Input
        fontSize='sm'
        placeholder='Enter keyword...'
        value={keyword}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <InputRightElement>
        {keyword && (
          <CloseIcon
            data-testid='icon-clear-input'
            borderRadius='full'
            display='block'
            pos='absolute'
            zIndex={2}
            right='40px'
            top='50%'
            padding='4px'
            bg='background.section.primary'
            _hover={{
              boxShadow: 'base',
            }}
            transform='translateY(-50%)'
            cursor='pointer'
            onClick={handleClearSearchBox}
          />
        )}
        <SearchIcon cursor='pointer' onClick={handleSearch} data-testid='search-icon' />
      </InputRightElement>
    </InputGroup>
  );
};

export default memo(SearchBox);
