'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Button } from '@chakra-ui/react';
import React, { useCallback, useMemo, useState } from 'react';

interface PaginationProps {
  total: number;
  page: number;
  onChange: (value: number) => void;
}

const Pagination = ({ total, page, onChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(page);

  const handleClickNext = useCallback(() => {
    setCurrentPage((prev) => ++prev);
  }, []);

  const handleClickPrev = useCallback(() => {
    setCurrentPage((prev) => --prev);
  }, []);

  const handleClickFirst = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const handleClickLast = useCallback(() => {
    setCurrentPage(total);
  }, [total]);

  const pages = useMemo(() => {
    if (currentPage <= 4) {
      return [2, 3, 4, 5, '...'];
    } else if (total - currentPage <= 2) {
      return ['...', total - 4, total - 3, total - 2, total - 1];
    } else {
      return ['...', currentPage - 1, currentPage, currentPage + 1, '...'];
    }
  }, [total, currentPage]);

  return (
    <Flex columnGap='2' justifyContent='flex-end' w='full' role='list'>
      <Button variant='outline' isDisabled={currentPage <= 1} w='42px' onClick={handleClickPrev}>
        <ChevronLeftIcon fontSize={20} />
      </Button>
      <Button w='42px' variant={currentPage === 1 ? 'solid' : 'outline'} onClick={handleClickFirst}>
        1
      </Button>
      {pages.map((item, index) => {
        const handleChangePage = () => {
          if (typeof item === 'number' && item !== currentPage) {
            setCurrentPage(item);
            onChange(item);
          }
        };

        return (
          <Button
            w='42px'
            variant={currentPage === +item ? 'solid' : 'outline'}
            key={`${item}${index}`}
            onClick={handleChangePage}
            isDisabled={typeof item === 'string'}
          >
            {item}
          </Button>
        );
      })}
      <Button
        w='42px'
        variant={currentPage === total ? 'solid' : 'outline'}
        onClick={handleClickLast}
      >
        {total}
      </Button>
      <Button
        variant='outline'
        isDisabled={currentPage === total}
        w='42px'
        onClick={handleClickNext}
      >
        <ChevronRightIcon fontSize={20} />
      </Button>
    </Flex>
  );
};

export default Pagination;
