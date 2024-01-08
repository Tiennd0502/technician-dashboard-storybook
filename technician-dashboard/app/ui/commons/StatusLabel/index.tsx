import { memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { STATUS_LABEL } from '@/lib/constants';
import { STATUS } from '@/lib/interfaces';
import { CircleIcon } from '@/ui/icons';

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
