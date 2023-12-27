import { memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { STATUS_LABEL } from '@/constants';
import { STATUS } from '@/interfaces';
import { CircleIcon } from '..';

interface StatusLabelProps {
  value: STATUS;
}

const StatusLabel = ({ value }: StatusLabelProps) => (
  <Flex alignItems='center'>
    <CircleIcon color={STATUS_LABEL[value]} mr='2' />
    <Text data-testId='status-value' variant='textSm'>
      {STATUS[value]}
    </Text>
  </Flex>
);

export default memo(StatusLabel);
