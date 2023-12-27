import { Icon, Box, IconProps } from '@chakra-ui/react';

interface CircleIconProps extends IconProps {
  color: string;
}

const CircleIcon = ({ color, ...props }: CircleIconProps) => (
  <Icon w='3' h='3' borderRadius='full' as={Box} bg={color} {...props} />
);

export default CircleIcon;
