'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Button } from '@chakra-ui/react';
import React, { useCallback, useMemo } from 'react';

interface PaginationProps {
  total: number;
  page: number;
  onChange: (value: number) => void;
}

const Pagination = ({ total, page, onChange }: PaginationProps) => {
  const handleClickNext = useCallback(() => {
    onChange(page + 1);
  }, [onChange, page]);

  const handleClickPrev = useCallback(() => {
    onChange(page - 1);
  }, [onChange, page]);

  const handleClickFirst = useCallback(() => {
    onChange(1);
  }, [onChange]);

  const handleClickLast = useCallback(() => {
    onChange(total);
  }, [total, onChange]);

  const pages = useMemo(() => {
    if (page <= 4 || total < 8) {
      if (total >= 8) {
        return [2, 3, 4, 5, '...'];
      } else {
        const result = Array.from({ length: total }, (_, i) => i + 1);
        return result.slice(1, result.length - 1);
      }
    } else if (total - page <= 3) {
      return ['...', total - 4, total - 3, total - 2, total - 1];
    } else {
      return ['...', page - 1, page, page + 1, '...'];
    }
  }, [total, page]);

  return (
    <Flex columnGap='2' justifyContent='flex-end' w='full' role='list'>
      <Button variant='outline' isDisabled={page <= 1} w='42px' onClick={handleClickPrev}>
        <ChevronLeftIcon fontSize={20} />
      </Button>
      <Button w='42px' variant={page === 1 ? 'solid' : 'outline'} onClick={handleClickFirst}>
        1
      </Button>
      {pages.map((item, index) => {
        const handleChangePage = () => {
          if (typeof item === 'number' && item !== page) {
            onChange(item);
          }
        };

        return (
          <Button
            w='42px'
            variant={page === +item ? 'solid' : 'outline'}
            key={`${item}${index}`}
            onClick={handleChangePage}
            isDisabled={typeof item === 'string'}
          >
            {item}
          </Button>
        );
      })}

      {total >= 2 && (
        <Button w='42px' variant={page === total ? 'solid' : 'outline'} onClick={handleClickLast}>
          {total}
        </Button>
      )}
      <Button variant='outline' isDisabled={page === total} w='42px' onClick={handleClickNext}>
        <ChevronRightIcon fontSize={20} />
      </Button>
    </Flex>
  );
};

export default Pagination;
