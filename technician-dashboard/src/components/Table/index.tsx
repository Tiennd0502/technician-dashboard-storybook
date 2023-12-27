import { memo } from 'react';
import { Heading, Text, Flex, Box, Button, Checkbox, useMediaQuery } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

// Types
import { TableData, TableHeader, SORT_TYPE, Filter } from '@/interfaces';

// Components
import { SearchBox, FilterIcon } from '..';

interface TableProps {
  title: string;
  filter: Filter;
  columns: TableHeader[];
  data: TableData[];
  onAdd?: () => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onSearch?: (value: string) => void;
}

const Table = ({
  title,
  filter: { sortBy, order },
  columns,
  data,
  onAdd,
  onEdit,
  onDelete,
  onSearch,
}: TableProps) => {
  const [isLargeScreen] = useMediaQuery('(min-width: 768px)');

  return (
    <Box p='7' borderWidth='1px' borderRadius='md' borderColor='primary' h='100%'>
      <Flex justifyContent='space-between' mb='7' alignItems='center'>
        <Heading variant='headingLg' mr='auto'>
          {title}
        </Heading>
        {onSearch && (
          <Box minW='200px' ml='auto' mr='4'>
            <SearchBox onSearch={onSearch} />
          </Box>
        )}
        <Button as={Flex} gap='4' variant='outline' mr='0'>
          Filter <FilterIcon />
        </Button>
        {onAdd && (
          <Button ml='4' onClick={onAdd}>
            Add new{' '}
          </Button>
        )}
      </Flex>
      <Flex gap='1' flexDirection='column'>
        {isLargeScreen && (
          <Flex bg='background.section.primary' borderRadius='md' h='50px' w='100%' role='list'>
            {columns?.map(({ key, label, isCheckbox, width, onSort }) =>
              isCheckbox ? (
                <Box minW={width} key={key}></Box>
              ) : (
                <Flex key={key} alignItems='center' gap='5' w={width}>
                  <Text variant='textSm'>{label}</Text>
                  {onSort ? (
                    <Flex flexDirection='column' cursor='pointer'>
                      <TriangleUpIcon
                        w='4'
                        h='2'
                        {...(sortBy === key &&
                          order === SORT_TYPE.Asc && {
                            color: 'primary.500',
                          })}
                        onClick={() => onSort({ sortBy: key, order: SORT_TYPE.Asc })}
                      />
                      <TriangleDownIcon
                        w='4'
                        h='2'
                        onClick={() => onSort({ sortBy: key, order: SORT_TYPE.Desc })}
                        {...(sortBy === key &&
                          order === SORT_TYPE.Desc && {
                            color: 'primary.500',
                          })}
                      />
                    </Flex>
                  ) : null}
                </Flex>
              ),
            )}
          </Flex>
        )}

        {data.length ? (
          data.map((item) => (
            <Flex
              key={item.id}
              h={isLargeScreen ? '50px' : 'auto'}
              borderWidth='1px'
              borderRadius='md'
              borderColor='secondary'
              alignItems={isLargeScreen ? 'center' : 'flex-start'}
              flexDirection={isLargeScreen ? 'row' : 'column'}
              p={isLargeScreen ? 'auto' : '4'}
            >
              <Flex w='100%' flexDirection={isLargeScreen ? 'row' : 'column'}>
                {columns.map(({ key, width, label, isCheckbox, isAction, customView }) =>
                  isCheckbox ? (
                    <Flex
                      key={key}
                      minW={width}
                      alignItems='center'
                      justifyContent={isLargeScreen ? 'center' : 'flex-start'}
                    >
                      <Checkbox size='lg' isDisabled />
                    </Flex>
                  ) : (
                    <Flex w={isLargeScreen ? width : '100%'} key={key} alignItems='center'>
                      {!isLargeScreen && (
                        <Text variant='textMd' mr='auto'>
                          {label}:
                        </Text>
                      )}
                      {customView ? (
                        customView(item[key])
                      ) : isAction ? (
                        <>
                          {onEdit && (
                            <Button px='2' onClick={() => onEdit(item.id)}>
                              Edit{' '}
                            </Button>
                          )}
                          {onDelete && (
                            <Button
                              variant='outline'
                              ml='4'
                              px='2'
                              onClick={() => onDelete(item.id)}
                            >
                              Delete
                            </Button>
                          )}
                        </>
                      ) : (
                        <Text variant='textSm'>{item[key]}</Text>
                      )}
                    </Flex>
                  ),
                )}
              </Flex>
            </Flex>
          ))
        ) : (
          <Flex
            h='50px'
            alignItems='center'
            justifyContent='center'
            borderWidth='1px'
            borderRadius='md'
            borderColor='secondary'
          >
            <Text variant='textMd'>No data found</Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default memo(Table);
