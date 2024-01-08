import { ForwardedRef, forwardRef, memo } from 'react';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  error?: string;
  label?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const Input = ({ type = 'text', error, label, ref, ...props }: InputProps) => (
  <FormControl isInvalid={!!error}>
    <FormLabel fontWeight='semiBold'>{label}</FormLabel>
    <ChakraInput
      ref={ref}
      type={type}
      isInvalid={!!error}
      transition='all .5s ease'
      _focusVisible={{
        outline: 'none',
      }}
      {...props}
    />

    {error && <FormErrorMessage>{error}</FormErrorMessage>}
  </FormControl>
);

const Component = forwardRef<HTMLInputElement, InputProps>(function Component(props, ref) {
  return <Input {...props} ref={ref} />;
});

export default memo(Component);
